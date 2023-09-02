<script setup lang="ts">
const email = ref('')
const password = ref('')

const client = useSupabaseClient()

const user = useSupabaseUser()

const login = async() =>{
    const {data,error} = await client.auth.signInWithPassword({
        email:email.value,
        password:password.value
    })
    console.log(error,data) 
}

onMounted(() =>{
    watchEffect(() =>{
        if(user.value){
            navigateTo('/planets')
            console.log(user.value)
        }
    })
})
</script>


<template>
    <div class="flex flex-col items-center m-20">
        <h1 class="text-4xl font-bold mb-5">Login</h1>
        <input type="email" placeholder="email" class="bg-transparent mb-5" v-model="email">
        <input type="password" placeholder="password" class="bg-transparent" v-model="password">
        <button @click="login"
        class="mt-10 text-white text-xl border border-white px-10 py-2
        hover:border-blue-400 hover:text-blue-400"
        >Sign in</button>

        <div class="mt-5">Don't have an account?
            <nuxt-link to="/auth/signup" class="underline">
                Register
            </nuxt-link>
        </div>
    </div>
</template>