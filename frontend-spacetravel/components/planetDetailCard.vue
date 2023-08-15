<script setup lang="ts">
interface PlanetDetail{
    name:string
    sub_description:string
    second_image:string
    price:string
}

const props = defineProps<PlanetDetail>()
</script>

<template>
    <div class="flex flex-row items-center m-20 relative">
        <div class="max-w-[500px] absolute">
            <h1 class="text-5xl font-bold z-20 mb-5">{{ name }}</h1>
            <p class="text-xl">{{ sub_description }}</p>    
        </div>
        
        <div class="flex justify-end">
            <img :src="second_image" class="">    
        </div>
        
    </div>
</template>

<style>

</style>