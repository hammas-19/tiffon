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

                    <img src="https://cdn.shopify.com/s/files/1/1752/8007/collections/w_terry.jpg?v=1676716713&width=1500"
                        class="object-cover h-full w-full" alt="">
                    <div
                        class="absolute bottom-5 left-5 flex flex-col gap-2 max-w-[250px] bg-graphite p-5 rounded-2xl bg-opacity-40 backdrop-blur-md">

                        <h1 class="text-6xl font-headings font-bold text-white">Women Hahaha</h1>
                        <span class="text-white text-lg">
                            Your State of Mind
                        </span>

                    </div>

                </div>
                <div v-for="items in products" class="max-h-fit max-w-xs flex flex-col gap-3 items-center">

                    <ProductCardTest :image="items" class="h-full w-full hover:opacity-70 transition-all duration-300" />

                </div>

            </div>
        </section>

    </div>
</template>
<script setup>
const products = [
    'https://cdn.shopify.com/s/files/1/1752/8007/collections/Last_Chance_Banner_Mens.jpg?v=1679154073&width=1500',
    'https://cdn.shopify.com/s/files/1/1752/8007/products/InfinityExplorerJacket_Men_25_d0425757-d350-441d-8c96-8980e186fd86_400x.jpg?v=1676669937',
    'https://cdn.shopify.com/s/files/1/1752/8007/products/IdentityProHoodieSeaShell2_400x.jpg?v=1678822010',
    'https://cdn.shopify.com/s/files/1/1752/8007/collections/m_tops_956f7439-b4c4-4d9b-821d-f275fd667f44.jpg?v=1679098760&width=1500',
    'https://cdn.shopify.com/s/files/1/1752/8007/products/AthleticJacketOysterGrey1_400x.jpg?v=1669670288',
    'https://cdn.shopify.com/s/files/1/1752/8007/collections/m_elements.jpg?v=1676716697&width=1500',
    'https://cdn.shopify.com/s/files/1/1752/8007/products/4U8A5112_49828896-2909-439f-bdf5-67c42b966a31_400x.jpg?v=1676669775',
    'https://cdn.shopify.com/s/files/1/1752/8007/collections/m_long_sleeve_9d95e316-70e5-4363-bbec-51c275537fb4.jpg?v=1679154071&width=1500',
    'https://cdn.shopify.com/s/files/1/1752/8007/products/OzoneMen_sTops5_400x.jpg?v=1657358904',
    'https://cdn.shopify.com/s/files/1/1752/8007/collections/BlendMensTanks_1400x600_55a8cdb1-d55f-4298-96bb-1bc0a83f93fa.jpg?v=1679154073&width=1500',
    'https://cdn.shopify.com/s/files/1/1752/8007/products/MoandIlon25_1_400x.jpg?v=1657358591',
    'https://cdn.shopify.com/s/files/1/1752/8007/products/MNSVelocitySleeveless_16_400x.jpg?v=1676670273',

]
</script>