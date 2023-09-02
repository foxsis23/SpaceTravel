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
        <planetDetailCard :price="planetName.getPlanetByName.price"
        :name="planetName.getPlanetByName.name" :second_image="planetName.getPlanetByName.second_image"
        :sub_description="planetName.getPlanetByName.sub_description"
         />
    </NuxtLayout>
</template>