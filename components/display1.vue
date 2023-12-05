<template>
    <div class="grid grid-cols-2 md:gap-5 gap-1 md:h-[calc(100vh-120px)] h-[calc(100vh-80px)]">

        <GridContainer image="/gridImages/collection2.webp" class="h-full min-w-full row-span-2">
            <template #title>
                Exclusive
            </template>
            <template #slogan>
                Grab Yours Now
            </template>
            <template #item1>
                <NuxtLink to="/desi"> Desi</NuxtLink>
            </template>`
        </GridContainer>

        <GridContainer :content-left="false" image="/gridImages/collection3.jpg" class="min-w-full h-full">

            <template #title>
                Exclusive
            </template>
            <template #slogan>
                Grab Yours Now
            </template>
            <template #item1>
                <NuxtLink to="/desi"> Desi</NuxtLink>
            </template>
        </GridContainer>


        <GridContainer :content-left="false" image="/gridImages/collection4.jpg" class="min-w-full h-full">

            <template #title>
                Exclusive
            </template>
            <template #slogan>
                Grab Yours Now
            </template>
            <template #item1>
                <NuxtLink to="/desi"> Desi</NuxtLink>
            </template>

        </GridContainer>

    </div>
</template>