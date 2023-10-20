<script setup>
import '../App.css'
import LocationsFooter from '../components/LocationsFooter.vue';
</script>

<template>
    <div class="main-container">
        <div class="destination-container">
        <img src="../assets/chevron_left.svg" alt="">

        <div class="destination-images-container">
            <div class="destination-image-1">
                <img src="../assets/Pexels Photo by Albert Koenig.svg" class="destination-image-1" alt="pexels image" >
            </div>

            <div class="destination-image-2">
                <img src="../assets/Pexels Photo by Barry Tan.svg" class="destination-image-2" alt="pexels image">
            </div>

            <div class="destination-image-3">
                <img src="../assets/Pexels Photo by Gerhard Lipold.svg" class="destination-image-3" alt="pexels image">
            </div>
            
            </div>

            <img src="../assets/chevron_right.svg" alt="">
        </div>

        <LocationsFooter />
    </div>

  <!-- pass a prop -->
  <!-- <HelloWorld msg="" /> -->
</template>

<style scoped>
 
</style>
