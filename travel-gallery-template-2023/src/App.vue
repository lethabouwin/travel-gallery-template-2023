<script setup>
import HelloWorld from './components/HelloWorld.vue'
import './App.css'
</script>

<template>
  <div>
    <div class="location-pins-container">
      <div class="location-pin-1">
        <img src="./assets/location-pin-1.svg" class="location-pin-1" alt="Location pin 1">
      </div>

      <div class="location-pin-2">
        <img src="./assets/location-pin-2.svg" class="location-pin-2" alt="Location pin 2">
      </div>

      <div class="location-pin-3">
        <img src="./assets/location-pin-3.svg" class="location-pin-3" alt="Location pin 3">
      </div>

      <div class="location-pin-4">
        <img src="./assets/location-pin-4.svg" class="location-pin-4" alt="Location pin 4">
      </div>

      <div class="location-pin-5">
        <img src="./assets/location-pin-5.svg" class="location-pin-5" alt="Location pin 5">
      </div>

    </div>


    <div class="locations-container">
      <div class="location">
        <div class="location-circle-marker-1">
        </div>

        <span class="location-name">Alaska, USA</span>
        <span class="location-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quibusdam blanditiis.</span>
      </div>

      <div class="location">
        <div class="location-circle-marker-2">
        </div>

        <span class="location-name">Alaska, USA</span>
        <span class="location-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quibusdam blanditiis.</span>
      </div>

      <div class="location">
        <div class="location-circle-marker-3">
        </div>

        <span class="location-name">Alaska, USA</span>
        <span class="location-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quibusdam blanditiis.</span>
      </div>

      <div class="location">
        <div class="location-circle-marker-4">
        </div>

        <span class="location-name">Alaska, USA</span>
        <span class="location-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quibusdam blanditiis.</span>
      </div>

      <div class="location">
        <div class="location-circle-marker-5">
        </div>

        <span class="location-name">Alaska, USA</span>
        <span class="location-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quibusdam blanditiis.</span>
      </div>
      
    </div>
  </div>

  <!-- pass a prop -->
  <!-- <HelloWorld msg="" /> -->
</template>

<style scoped>
 
</style>
