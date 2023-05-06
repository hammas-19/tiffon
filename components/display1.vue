<template>
    <div class="grid grid-cols-2 md:gap-5 gap-1 md:h-[calc(100vh-120px)] h-[calc(100vh-80px)]">

        <GridContainer image="/gridImages/collection2.webp" class="h-full min-w-full row-span-2">

            <template #title>
                hammas masood
            </template>
            <template #slogan>
                lets make it worth
            </template>
            <template #item1>
                Hood
            </template>
            <template #item2>
                <span refrence="/">Wood</span>
            </template>
        </GridContainer>

        <GridContainer :content-left="false" image="/gridImages/collection3.webp" class="min-w-full h-full">

            <template #title>
                hammas masood
            </template>
            <template #slogan>
                lets make it worth
            </template>
            <template #item1>
                Hood
            </template>
            <template #item2>
                <span refrence="/">Wood</span>
            </template>
        </GridContainer>


        <GridContainer :content-left="false" image="/gridImages/collection4.webp" class="min-w-full h-full">

            <template #title>
                hammas masood
            </template>
            <template #slogan>
                lets make it worth
            </template>
            <template #item1>
                Hood
            </template>
            <template #item2>
                <span refrence="/">Wood</span>
            </template>
        </GridContainer>

    </div>
</template>