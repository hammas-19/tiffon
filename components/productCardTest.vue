<template>
  <NuxtLink to="/productDetail" class="block group">
    <img :src="$config.public.IMAGE_BASE_URL + props.image" alt="" class="h-[350px] w-full object-cover sm:h-[450px] md:rounded-2xl rounded-lg" />

    <div class="mt-1.5">
      <p class="text-xs text-gray-500">category: {{ props.category }}</p>

      <div class="flex justify-between mt-3 text-sm">
        <h3 class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
          {{ props.title }}
        </h3>

        <p class="text-black text-base">
          Rs: {{ props.price}}
        </p>
        <pre>
      <!-- {{ $config.public.IMAGE_BASE_URL + props.image }} -->

        </pre>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup>
const props = defineProps({
  image: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  price: {
    type: String,
    default: ""
  },
  category: {
    type: String,
    default: ""
  }  

})
</script>

