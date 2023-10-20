<script setup>
import '../App.css' // import '../components/LocationsFooter.vue'
import LocationsFooter from '../components/LocationsFooter.vue';
</script>

<template>
  <div>
    <div class="location-pins-container">
      <div class="location-pin-1">
        <img src="../assets/location-pin-1.svg" class="location-pin-1" alt="Location pin 1">
      </div>

      <div class="location-pin-2">
        <img src="../assets/location-pin-2.svg" class="location-pin-2" alt="Location pin 2">
      </div>

      <div class="location-pin-3">
        <img src="../assets/location-pin-3.svg" class="location-pin-3" alt="Location pin 3">
      </div>

      <div class="location-pin-4">
        <img src="../assets/location-pin-4.svg" class="location-pin-4" alt="Location pin 4">
      </div>

      <div class="location-pin-5">
        <img src="../assets/location-pin-5.svg" class="location-pin-5" alt="Location pin 5">
      </div>

    </div>

    <LocationsFooter />
    
  </div>

  <!-- pass a prop -->
  <!-- <HelloWorld msg="" /> -->
</template>

<style scoped>
 
</style>
