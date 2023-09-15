<template>
   <div class="bg-linen">

      <!-- Hero -->
      <section class="max-w-7xl mx-auto md:px-6 px-3 md:py-5 py-2">
         <Hero />
      </section>

      <!-- Slide1 -->
      <section class="py-5">

         <Desc&handle class="border-b-0" />
         <Tabs class="border-2 min-h-[400px]">
            <template #cat1>
               Men
            </template>
            <template #cat2>
               Ladiis
            </template>
            <template #category1>
               <ProductSlider1 />
            </template>
            <template #category2>
               <ProductSlider2 />
            </template>
         </Tabs>

      </section>

      <!--Display 01  -->
      <section class="max-w-7xl mx-auto md:px-6 px-3 md:py-10 py-5">

         <Display1 />

      </section>

      <!-- Slider 02 -->
      <section class="py-5">

         <Desc&handle class="border-b-0" />
         <Tabs>
            <template #cat1>
               Hood
            </template>
            <template #cat2>
               Wood
            </template>
            <template #category1>
               <ProductSlider1 />
            </template>
            <template #category2>
               <ProductSlider2 />
            </template>
         </Tabs>

      </section>

      <section class="max-w-7xl mx-auto md:px-6 px-3 md:py-10 py-5">

         <Desc&handle class="border-b-0" />
         <Display2 />

      </section>
      <section class="max-w-7xl mx-auto md:px-6 px-3 md:py-10 py-5">

         <div
            class="relative bg-moss rounded-3xl h-[calc(100vh-200px)] border w-full overflow-hidden opacity-90 hover:opacity-100 transition-all duration-300">

            <img
               src="https://blogger.googleusercontent.com/img/a/AVvXsEgoiDLwMPT4ev1sKXWoYL-Jbc_b75DLDRixMRfVdL7l4aQOQKl2aSCtkYL5X1t0tsPWpV94UN4qDZOTt-vmLyw9dKiw7GQOJTNc4z_PXN5gjSfBmcTjqQhMmpxtcSPuEXAA8Nw-4V8lNhKqIgjBgGRauq8mrIIPPBeRXZb4nsKKdLst8TPOsnyEgsr1"
               class="object-cover h-full w-full" alt="">
            <div
               class="absolute bottom-5 left-5 flex flex-col gap-2 max-w-[250px] bg-graphite p-5 rounded-2xl bg-opacity-40 backdrop-blur-md">

               <h1 class="text-6xl font-headings font-bold text-white">New Arrivals</h1>
               <span class="text-white text-lg">
                  Your State of Mind
               </span>
               <NuxtLink
                  class="text-graphite py-2 px-4 w-fit hover:w-auto opacity-10 hover:opacity-100 transition-all duration-500 text-left hover:text-center rounded-md bg-white text-xl font-semibold">
                  Shop Men
               </NuxtLink>
               <NuxtLink
                  class="text-graphite py-2 px-4 w-fit hover:w-auto opacity-10 hover:opacity-100 transition-all duration-500 text-left hover:text-center rounded-md bg-white text-xl font-semibold">
                  Shop Ladiis
               </NuxtLink>

            </div>

         </div>

      </section>

      <!-- Recommendation -->
      <section class="w-full mx-auto md:py-10 py-5 px-2">
         <div>

            <div class="max-w-7xl mx-auto  px-3 flex justify-between items-end border-b md:pb-5 pb-3">

               <div class="flex flex-col text-black">
                  <span class="md:text-xl text-sm font-headings">Men's</span>
                  <h1 class="md:text-2xl text-xl font-headings">You May Like</h1>
               </div>
               <NuxtLink to="/productsMen" class="md:text-xl text-sm">
                  View All
               </NuxtLink>

            </div>
            <RelatedProducts class="py-5" />

         </div>
      </section>

   </div>
</template>
<script setup>
const categories = ["Men", "Ladiis"];

</script>