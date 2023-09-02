<script  lang="ts" setup>

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
            <p class="text-xl mb-10">{{ sub_description }}</p> 
            <nuxt-link :to="`/order/${name}`" class="text-left mt-10 border
             border-blue-500 w-fit px-10 py-2 bg-blue-500
        shadow-md shadow-blue-500">Buy ticket</nuxt-link>
        </div>
        
        <div class="flex justify-end">
            <img :src="second_image" class="">    
        </div>
        
        
    </div>
</template>

<style>

</style>