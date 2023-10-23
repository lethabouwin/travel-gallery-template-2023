<script setup>
import '../App.css'
import LocationsFooter from '../components/LocationsFooter.vue';
// import sliderControls from '../pages/sliderControls.js';
</script>

<template>
    <div class="main-container">
        <!-- carousel -->
        <div class="destination-container">
            <img src="../assets/chevron_left.svg" class="prev-arrow" alt="">

            <div class="destination-images-container">
                <div class="destination-slide">
                    <img src="../assets/Pexels Photo by Albert Koenig.svg" class="destination-image-1" alt="pexels image" >
                </div>

                <div class="destination-slide">
                    <img src="../assets/Pexels Photo by Barry Tan.svg" class="destination-image-2" alt="pexels image">
                </div>

                <div class="destination-slide">
                    <img src="../assets/Pexels Photo by Gerhard Lipold.svg" class="destination-image-3" alt="pexels image">
                </div>
            </div>

            <img src="../assets/chevron_right.svg" class="next-arrow" alt="">
        </div>

        <LocationsFooter />
    </div>

  <!-- pass a prop -->
  <!-- <HelloWorld msg="" /> -->
</template>

<style scoped>
 
</style>