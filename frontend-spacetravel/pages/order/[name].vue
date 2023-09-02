<script setup lang="ts">
import {storeToRefs} from 'pinia'
import {usePlanetStore} from '../../stores/planets'

const planetStore = usePlanetStore()
const route = useRoute()

planetStore.getPlanetByName(route.params.name)

const {planetName} = storeToRefs(planetStore)
</script>

<template>
    <NuxtLayout name="default">
        <div class="flex flex-row m-20">

            <div class="basis-[70%] flex flex-col items-center">
                <input type="text" placeholder="name" class="bg-transparent border-b border-slate-400
                py-2 px-5 mb-5 w-[400px] hover:border-white 
                ">
                <input type="text" placeholder="last name" class="bg-transparent border-b border-slate-400
                py-2 px-5 mb-5 w-[400px] hover:border-white 
                ">
                <input type="email" placeholder="email" class="bg-transparent border-b border-slate-400
                py-2 px-5 mb-5 w-[400px] hover:border-white 
                ">
                <input type="date" class="bg-slate-800 text-slate-400 py-2 px-5 mb-5
                w-[400px] hover:text-white
                ">

                <nuxt-link :to="`/`" class="text-left mt-10 border
                border-blue-500 w-fit px-10 py-2 bg-blue-500
                shadow-md shadow-blue-500">Order</nuxt-link>
            </div>

            <div class="basis-[30%] flex flex-col items-center">
                <img :src="planetName.getPlanetByName.image" class="w-[400px]">
                <h1 class="text-3xl font-bold mt-2">{{ planetName.getPlanetByName.name }}</h1>
                <p class="text-xl">Price: {{ planetName.getPlanetByName.price }}$</p>
            </div>
        </div>
    </NuxtLayout>
</template>