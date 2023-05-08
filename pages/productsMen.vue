<template>
    <div class="bg-linen">

        <section>
            <div class="md:py-10 py-2">
                <Tabs>
                    <template #cat1>
                        Hood
                    </template>
                    <template #cat2>
                        Wood
                    </template>
                    <template #category1>
                        <!-- <ProductSlider1 /> -->
                    </template>
                    <template #category2>
                        <!-- <ProductSlider2 /> -->
                    </template>
                </Tabs>
            </div>
        </section>

        <!-- Gallery -->
        <section class="max-w-7xl mx-auto px-2">
            <div class="grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-2">

                <!-- The poster -->
                <div
                    class="relative bg-moss rounded-3xl h-[calc(100vh-350px)] w-full overflow-hidden opacity-90 hover:opacity-100 transition-all duration-300 col-span-2">

                    <img src="https://cdn.shopify.com/s/files/1/1752/8007/collections/Mens_New_Arrivals_230314.jpg?v=1680971649&width=1500"
                        class="object-cover h-full w-full" alt="">
                    <div
                        class="absolute bottom-5 left-5 flex flex-col gap-2 max-w-[250px] bg-graphite p-5 rounded-2xl bg-opacity-40 backdrop-blur-md">

                        <h1 class="text-6xl font-headings font-bold text-white">Men in Mean</h1>
                        <span class="text-white text-lg">
                            Your State of Mind
                        </span>

                    </div>

                </div>
                <div v-for="items in 8" class="max-h-fit max-w-xs flex flex-col gap-3 items-center">

                <ProductCardTest class="h-full w-full"/>
                </div>

            </div>
    </section>

</div></template>