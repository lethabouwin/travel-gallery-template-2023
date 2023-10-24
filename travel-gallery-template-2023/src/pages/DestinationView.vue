<script setup>
import '../App.css'
import LocationsFooter from '../components/LocationsFooter.vue';
// import '../pages/DestinationView.css'
// import sliderControls from '../pages/sliderControls.js';
</script>

<template>
    <div class="main-container">
        <!-- carousel -->
        <div class="destination-container">
            <div class="destination-images-container">
                <input type="radio" name="slide" id="destination-image-1">
                <input type="radio" name="slide" id="destination-image-2">
                <input type="radio" name="slide" id="destination-image-3">

                <!-- images need to be accepted as props -->
                <img src="../assets/Pexels Photo by Albert Koenig.svg" class="destination-image-1" alt="pexels image" >
                <img src="../assets/Pexels Photo by Barry Tan.svg" class="destination-image-2" alt="pexels image">
                <img src="../assets/Pexels Photo by Gerhard Lipold.svg" class="destination-image-3" alt="pexels image">    
            </div>


            </div>

            <div class="dots">
                <label for="destination-image-1"></label>
                <label for="destination-image-2"></label>
                <label for="destination-image-3"></label>
            </div>
        <LocationsFooter />
    </div>

  <!-- pass a prop -->
  <!-- <HelloWorld msg="" /> -->
</template>

<style scoped>
 
</style>