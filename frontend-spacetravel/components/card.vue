<template>
    <div class="flex flex-col items-center m-10 h-fit w-[200px] p-2">
        <Icon :name="icon" size="50"  />
        <h1 class="font-bold uppercase text-xl">{{ name }}</h1>
        <p class="mt-5 text-lg mb-2">{{ description }}</p>
        <p class="text-sm">{{ subdescription }}</p>
    </div>
</template>

<script setup lang="ts">
interface Card{
    icon:string,
    name:string,
    description:string,
    subdescription:string
}

const props = defineProps<Card>()
</script>