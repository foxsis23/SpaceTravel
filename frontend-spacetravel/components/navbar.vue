<template>
    <div class="flex flex-row items-center p-5 justify-between">
        <div class="flex flex-row items-center">
            <Icon name="mdi:satellite-variant" class="text-white rotate-90" size="50" />
            <nuxt-link to="/" class="uppercase text-white ml-2 text-2xl font-bold">lightspeed</nuxt-link>
        </div>
        
        <div class="flex flex-row items-center">
            <div v-for="item in navbarItems" :key="item.name">  
                <nuxt-link :to="item.url"
                class="text-white mr-10 text-xl hover:text-blue-400">{{ item.name }}</nuxt-link>
            </div>
        </div>

        <div class="flex items-center">
            <h1 class="text-white text-xl border border-white px-10 py-2
            hover:border-blue-400 hover:text-blue-400
            ">Sign up</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
const navbarItems = ref([
    {
        name:'About',
        url:'/about'
    },
    {
        name:'Planets',
        url:'/planets'
    },
    {
        name:'How it works',
        url:'/how-it-works'
    },
    {
        name:'Contact',
        url:'/contact'
    }
])
</script>