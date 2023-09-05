<script lang="ts" setup>

const cards = ref([
    {
        icon:"mdi:speedometer",
        name:"Amazing speed",
        description:'10 lightyear/hour',
        subdescription:'Travel speed'
    },
    {
        icon:'mdi:thumb-up-outline',
        name:'Approved',
        description:'4.9',
        subdescription:'Customers ratings'
    },
    {
        icon:'mdi:earth',
        name:'Coverage',
        description:'195',
        subdescription:'Travel in every country'
    }
])

const user = useSupabaseUser()

const check = ref(false)
const msg = ref('')

onMounted(() =>{
    watchEffect(() =>{
        if(user.value){
            check.value = true
        }
    })
})
</script>


<template>
    <NuxtLayout name="default">
        <div class="m-20 flex flex-col
        justify-end max-w-[300px]">
            <h1 class="uppercase text-5xl font-bold text-left
            
            ">Travel in Space</h1>
            <p class="text-left mt-5 text-gray-300">Lightspeed is developing innovative solutions to provide
                low-cost high-speed travels on another planets
            </p>
            <nuxt-link :to="!check ? '/login' : ''" 
            class="text-left mt-10 border border-blue-500 w-fit px-10 py-2 bg-blue-500
            shadow-md shadow-blue-500
            " @click="msg = 'You already in account!'">Get started</nuxt-link>
            <div v-if="check" class="mt-3 text-green-400" 
            >{{ msg }}</div>
        </div>

        

        <div class="mt-20 flex flex-row justify-center">
            <div v-for="{name,description,subdescription,icon} in cards" :key="name">
                <card :name="name" :description="description" 
                :icon="icon"
                :subdescription="subdescription" />
            </div>
        </div>
    </NuxtLayout>
</template>

