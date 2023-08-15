<template>
    <div>
        <div class="background_image">
            <navbar/>
            <slot/>
        </div>
    </div>
</template>


<style>
.background_image { 
  background: url(assets/image.png); 
  background-size: cover;
  height: 100vh; 
}
</style>
