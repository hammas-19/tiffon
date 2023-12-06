<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.hiddenScroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hiddenScroll {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
<template>
  <div class="bg-linen">

    <section class="max-w-7xl mx-auto md:px-6 px-2 md:py-5 py-2">

      <div v-if="apiData" class="relative mx-auto py-8">

        <div v-for="(food, index) in apiData" :key="index" class="grid grid-cols-1 items-start gap-8 md:grid-cols-3">

          <!-- description -->
          <div class="sticky flex flex-col justify-center h-full px-4">
            <span></span>
            <div class=" mt-8 flex justify-between">
              <div class="max-w-[35ch] space-y-2">
                <h1 class="text-xl font-bold sm:text-2xl">
                  {{ food.title }}
                </h1>

                <p class="text-sm">Most loved Product</p>

                <div class="-ms-0.5 flex">
                  <svg v-for="(stars) in 3" :key="stars" class="h-5 w-5 text-tango" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg class="h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <p class="text-lg font-bold">Rs: {{ food.price }}/-</p>
            </div>

            <div class="mt-4">
              <div class="prose max-w-none">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  veniam dicta beatae eos ex error culpa delectus rem tenetur,
                  architecto quam nesciunt, dolor veritatis nisi minus inventore,
                  rerum at recusandae?
                </p>
              </div>

              <button class="mt-2 text-sm font-medium underline">Read More</button>
            </div>

          </div>

          <!-- Images -->
          <div
            class="hiddenScroll relative flex md:flex-col flex-row gap-4 max-h-screen md:overflow-y-scroll overflow-x-scroll">

            <!-- Swiper -->
            <span class="flex justify-center items-center w-full md:sticky absolute top-1">
              <strong class="rounded-full bg-gray-100 w-fit px-3 py-0.5 text-xs font-medium tracking-wide text-tango">
                <span class="hidden md:block">Swipe Down</span>
                <span class="block md:hidden">Swipe left</span>
              </strong>
            </span>

            <img v-for=" (images, no) in food.views" :key="no" alt="" :src="$config.public.IMAGE_BASE_URL + images.url"
              class="aspect-square w-full rounded-lg object-cover" />
          </div>

          <!-- Add to Cart -->
          <div class="sticky flex flex-col justify-center h-full px-4">
            <span></span>

            <form class="mt-8">
              <fieldset>
                <legend class="mb-1 text-sm font-medium">Sauces</legend>

                <div class="flex flex-wrap gap-1">
                  <label for="color_tt" class="cursor-pointer">
                    <input type="radio" name="color" id="color_tt" class="peer sr-only" />

                    <span
                      class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-[#bf2d00] peer-checked:text-white hover:text-white hover:bg-[#bf2d00] transition-all">
                      Chilli Garlic
                    </span>
                  </label>

                  <label for="color_fr" class="cursor-pointer">
                    <input type="radio" name="color" id="color_fr" class="peer sr-only" />

                    <span
                      class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-[#BF5700] peer-checked:text-white hover:text-white hover:bg-[#BF5700] transition-all">
                      BBQ Flames
                    </span>
                  </label>

                  <label for="color_cb" class="cursor-pointer">
                    <input type="radio" name="color" id="color_cb" class="peer sr-only" />

                    <span
                      class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-[#aeb4a4] peer-checked:text-white hover:text-white hover:bg-[#aeb4a4] transition-all">
                      Mayo Garlic
                    </span>
                  </label>
                </div>
              </fieldset>


              <div class="mt-8 flex gap-4">
                <div>
                  <label for="quantity" class="sr-only">Qty</label>

                  <input type="number" id="quantity" min="1" value="1" disabled
                    class="w-12 rounded border border-codGrey py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" />
                </div>
                {{ food.id }}
                <p @click="() => { addToCart(food.id), cursorAllowed = false }"
                  class="block rounded bg-tango px-5 py-3 text-xs font-medium text-white hover:bg-bisonHide transition-all duration-300"
                  :class="{ 'cursor-not-allowed': !cursorAllowed }">
                  Add to Cart
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script setup>
import { useCartStore } from '@/stores/cartStore';
const cursorAllowed = ref(true)
const apiData = ref()
const route = useRoute()
useStrapi(`beverages?populate=*&filters[id]=${route.params.id}`).then((response) => {
  apiData.value = response.data.data;
})


function addToCart(product) {
  useCartStore().products.push(product)
}
</script>