<template>
    <div>
        <div class="max-w-7xl px-3 mx-auto flex mb-4 text-base font-headings">
            <div class="border-2 border-graphite p-1 flex rounded-full gap-1">
                <button class="font-medium  text-black px-8 py-1 rounded-full transition-all duration-300" :class="{ 'text-graphite bg-bisonHide': activeTab === 1 }"
                    @click="activeTab = 1">
                    <slot name="cat1"></slot>

                </button>
                <button class="font-medium  text-black px-8 py-1 rounded-full transition-all duration-300" :class="{ 'text-graphite bg-bisonHide': activeTab === 2 }"
                    @click="activeTab = 2">
                    <slot name="cat2"></slot>

                </button>
            </div>
        </div>

        <div v-if="activeTab === 1">

            <slot name="category1"></slot>

        </div>

        <div v-if="activeTab === 2">
            <slot name="category2"></slot>

        </div>

    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const activeTab = ref(1);

        return {
            activeTab,
        };
    },
};
</script>
