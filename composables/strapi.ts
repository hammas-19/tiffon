import axios from 'axios'
// import { useCacheStore } from '@/stores/CacheStore'

function formatFile (fileObj: any) {
  Object.assign(fileObj, fileObj.attributes)
  delete fileObj.attributes

  if (fileObj.formats) {
    const formats = fileObj.formats
    for (const format in formats) {
      formats[format] = formats[format].url
      fileObj[format] = formats[format]
    }
    delete fileObj.formats
  }
  return fileObj
}

export const useStrapi = async (url: string, config: Object = {}) => {
  // if (process.client) {
  //   const cachedValue = useCacheStore().data[url]
  //   if (cachedValue) {
  //     return cachedValue
  //   }
  // }

  const runtimeConfig = useRuntimeConfig().public

  axios.defaults.headers.common.Authorization = 'Bearer ' + runtimeConfig.API_READ_TOKEN
  axios.defaults.baseURL = runtimeConfig.API_BASE_URL
  const response = (await axios(url, config))

  let responseData = response.data.data || []
  if (Array.isArray(responseData)) {
    // responseData = responseData.map((obj: any) => normalizeStrapiObject(obj))
    responseData = responseData.map((obj: any) => {
      Object.assign(obj, obj.attributes)
      delete obj.attributes
      // loop over objects
      for (const key in obj) {
        if (!obj[key]) {
          continue
        }
        // if any key does not have data attribute then continue
        const defaultDeepData = obj[key].data
        if (!defaultDeepData) {
          continue
        }

        // create a copy of default data attribute to loop
        if (Array.isArray(defaultDeepData)) {
          const dataSet: any[] = []
          defaultDeepData.forEach(function (innerObj: any) {
            dataSet.push(formatFile(innerObj))
          })
          obj[key] = dataSet
        } else {
          obj[key] = formatFile(defaultDeepData)
        }
      }
      return obj
    })
  } else {
    responseData = normalizeStrapiObject(responseData)
  }
  response.data.data = responseData
  // if (process.client) {
  //   useCacheStore().data[url] = response
  // }
  return response
}

function normalizeStrapiObject (obj: any) {
  Object.assign(obj, obj.attributes)
  delete obj.attributes
  // loop over objects
  for (const key in obj) {
    if (!obj[key]) {
      continue
    }
    // if any key does not have data attribute then continue
    const defaultDeepData = obj[key].data
    if (!defaultDeepData) {
      continue
    }

    // create a copy of default data attribute to loop
    if (Array.isArray(defaultDeepData)) {
      const dataSet: any[] = []
      defaultDeepData.forEach(function (innerObj: any) {
        dataSet.push(formatFile(innerObj))
      })
      obj[key] = dataSet
    } else {
      obj[key] = formatFile(defaultDeepData)
    }
  }
  return obj
}

export const useStrapiFile = (path: string) => {
  if (!path) {
    return ''
  } else if (path.startsWith('http')) {
    return path
  } else {
    return useRuntimeConfig().API_BASE_URL + path
  }
}
