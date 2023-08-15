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
        <planetDetailCard :price="planetName.price"
        :name="planetName.name" :second_image="planetName.second_image"
        :sub_description="planetName.sub_description"
         />
    </NuxtLayout>
</template>