<script setup lang="ts">
interface Planet{
    name:string
    description:string
    image:string
}

const props = defineProps<Planet>()
</script>


<template>
    <nuxt-link :to="`/planets/${name}`">
        <div class="flex flex-row justify-center w-[500px] mt-10 mr-10
        hover:cursor-pointer back_ground pb-5
        ">
            <img :src="image" class="w-[150px] h-[150px] mr-5">
            <div class="flex flex-col p-2">
                <h1 class="font-bold text-2xl text-left">{{ name }}</h1>  
                <p>{{ description }}</p>  
            </div>
        </div>
    </nuxt-link>
    
</template>


<style>
.back_ground{
    background: rgba(186, 186, 186, 0.1);
}

.back_ground:hover{
    background:rgba(255, 255, 255, 0.1);
}
</style>