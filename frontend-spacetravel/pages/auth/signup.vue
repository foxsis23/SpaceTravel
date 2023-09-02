<script setup lang="ts">
const client = useSupabaseClient()

const email = ref('')
const password = ref('')

const signUp = async() =>{
    const {data,error} = await client.auth.signUp({
        email:email.value,
        password:password.value
    })
    console.log(error,data) 
}
</script>


<template>
    <div>

    </div>
</template>