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
    <div class="hiddenScroll flex md:gap-5 gap-2 overflow-x-scroll">

        
            <img v-for="items in products" :key="index" :src="items"
                class="h-[350px] w-full object-cover sm:h-[450px] md:rounded-2xl rounded-lg" alt="">
        
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
    ''

]
</script>