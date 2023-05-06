<template>
    <div class="bg-linen">

        <!-- Hero -->
        <section class="max-w-7xl mx-auto md:px-6 px-3 md:py-10 py-5">

            <Hero />

        </section>

        <!-- Slider! -->
        <section class="py-5">

            <div class="max-w-7xl mx-auto md:px-6 px-3 flex justify-between items-end border-b pb-5">

                <div class="flex flex-col text-black">
                    <span class="md:text-xl text-sm font-headings">Men's</span>
                    <h1 class="md:text-4xl text-xl font-titles">New Arrivals</h1>
                </div>
                <NuxtLink class="md:text-xl text-sm ">
                    View All
                </NuxtLink>

            </div>
            <ProductSlider1 class="cursor-pointer py-5" />

        </section>


        <section class="max-w-7xl mx-auto md:px-6 px-3 md:py-10 py-5">

            <Display1 />

        </section>

        <!-- Slider! -->
        <section class="py-5">


            <div class="max-w-7xl mx-auto md:px-6 px-3 flex justify-between items-end border-b pb-5">

                <div class="flex flex-col text-black">
                    <span class="md:text-xl text-sm font-headings">Ladiis</span>
                    <h1 class="md:text-4xl text-xl font-titles">New Arrivals</h1>
                </div>
                <NuxtLink class="md:text-xl text-sm ">
                    View All
                </NuxtLink>

            </div>
            <ProductSlider1 class="cursor-pointer py-5" />

        </section>
        <section class="max-w-7xl mx-auto md:px-6 px-3 md:py-10 py-5">


            <div class="max-w-7xl mx-auto md:px-6 px-3 flex justify-between items-end  pb-5">

                <div class="flex flex-col text-black">
                    <span class="md:text-xl text-sm font-headings">Men's</span>
                    <h1 class="md:text-4xl text-xl font-titles">New Arrivals</h1>
                </div>
                <NuxtLink class="md:text-xl text-sm ">
                    View All
                </NuxtLink>

            </div>
            <Display2 />

        </section>
    </div>
</template>