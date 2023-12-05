<template>
    <div class="relative bg-moss rounded-3xl h-[calc(100vh-200px)] border w-full overflow-hidden opacity-90 hover:opacity-100 transition-all duration-300">

        <img src="/hero/heroBg.gif" class="object-cover h-full w-full" alt="">
        <div class="absolute bottom-5 left-5 flex flex-col gap-2 max-w-[250px] bg-graphite p-5 rounded-2xl bg-opacity-40 backdrop-blur-md">

            <h1 class="text-5xl font-headings font-bold text-white">Hungryy?</h1>
            <span class="text-white text-lg">
                
            </span>
            <NuxtLink to="/desi" class="text-graphite py-2 px-4 w-fit hover:w-auto opacity-10 hover:opacity-100 transition-all duration-500 text-left hover:text-center rounded-md bg-white text-xl font-semibold">
               Shop Desi
            </NuxtLink>
            <NuxtLink to="/fastFood" class="text-graphite py-2 px-4 w-fit hover:w-auto opacity-10 hover:opacity-100 transition-all duration-500 text-left hover:text-center rounded-md bg-white text-xl font-semibold">
               Shop Fast-Food
            </NuxtLink>

        </div>

    </div>
</template>