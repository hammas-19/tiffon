<template>
    <div class="bg-linen py-10">

        <!-- Gallery -->
        <section class="max-w-7xl mx-auto px-2">
            <div class="grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-3">

                <!-- The poster -->
                <div
                    class="relative bg-moss rounded-3xl h-[calc(100vh-350px)] w-full overflow-hidden opacity-90 hover:opacity-100 transition-all duration-300 col-span-2">

                    <img src="/gridImages/beveragesCover.gif" class="object-cover h-full w-full" alt="">
                    <div
                        class="absolute bottom-5 left-5 flex flex-col gap-2 max-w-[250px] bg-graphite p-5 rounded-2xl bg-opacity-40 backdrop-blur-md">

                        <h1 class="text-6xl font-headings font-bold text-white">Order Drinks</h1>
                        <span class="text-white text-lg">
                            Your State of Taste
                        </span>

                    </div>

                </div>
                <div v-for="(items, index) in apiData" :key="index"
                    class="max-h-fit max-w-xs flex flex-col gap-3 items-center">
                    <NuxtLink :to="`/beverages/` + items.id">
                        <ProductCardTest :image="items.views[0].url" :title="items.title" :price="items.price"
                            :category="items.type" class="h-full w-full hover:opacity-70 transition-all duration-300" />
                    </NuxtLink>
                </div>

            </div>
        </section>

    </div>
</template>
<script setup>
const apiData = ref()
useStrapi('beverages?populate=views').then((response) => {
    apiData.value = response.data.data;
})
</script>