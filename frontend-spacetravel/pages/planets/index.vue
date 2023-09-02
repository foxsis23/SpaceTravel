<script lang="ts" setup>
import {usePlanetStore} from '../../stores/planets'
import { storeToRefs } from 'pinia';

const planetStore = usePlanetStore()

planetStore.getPlanets()

const {allPlanets} = storeToRefs(planetStore)
</script>


<template>
 <NuxtLayout name="default">
    <h1 class="text-center font-bold mt-20 text-4xl">Planets in our Solar System</h1>

    <div class="flex flex-row justify-center flex-wrap max-w-1/2">
        <planetCard v-for="{name,image,description} in allPlanets.getAllPlanets"
        :name="name" :image="image" :description="description"
         />
    </div>
 </NuxtLayout>
</template>

