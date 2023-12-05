<template>
    <div class="grid grid-cols-2 md:gap-5 gap-1 md:h-[calc(100vh-120px)] h-[calc(100vh-80px)]">

        <GridContainer image="/gridImages/collection1.webp" class="h-full min-w-full">
            <template #title>
                Exclusive
            </template>
            <template #slogan>
                Grab Yours Now
            </template>
            <template #item2>
                <NuxtLink to="/fastFood">
                    Fast Food
                </NuxtLink>
            </template>
        </GridContainer>

        <GridContainer :content-left="false" image="/gridImages/collection5.jpeg" class="min-w-full h-full">
            <template #title>
                Exclusive
            </template>
            <template #slogan>
                Grab Yours Now
            </template>
            <template #item2>
                <NuxtLink to="/fastFood">
                    Fast Food
                </NuxtLink>
            </template>
        </GridContainer>

    </div>
</template>