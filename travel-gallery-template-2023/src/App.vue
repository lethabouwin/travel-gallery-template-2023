<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <div class="location-pins-container"></div>


    <div class="locations-container">
      <div class="location">
        <div class="location-circle-container">
          <div class="location-circle-marker">
          </div>
        </div>
        

        <span class="location-name">Alaska, USA</span>
        <span class="location-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quibusdam blanditiis.</span>
      </div>

      <div class="location">
        <span class="location-name">Alaska, USA</span>
        <span class="location-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quibusdam blanditiis.</span>
      </div>

      <div class="location">
        <span class="location-name">Alaska, USA</span>
        <span class="location-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quibusdam blanditiis.</span>
      </div>

      <div class="location">
        <span class="location-name">Alaska, USA</span>
        <span class="location-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quibusdam blanditiis.</span>
      </div>

      <div class="location">
        <span class="location-name">Alaska, USA</span>
        <span class="location-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quibusdam blanditiis.</span>
      </div>
      
    </div>
  </div>

  <!-- pass a prop -->
  <!-- <HelloWorld msg="" /> -->
</template>

<style scoped>
  .location-pins-container {
    display: flex;
    height: 70vh;
  }

  .locations-container {
    border-top: 3px solid white;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 30px;
  }

  .location {
    display: flex;
    flex-direction: column;
    width: 30%;
    /* padding-left: 20px; */
    /* margin: 10px; */
  }

  .location-circle-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .location-circle-marker {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: white;
    
    
  }

  .location-name {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .location-description {
    font-size: 12px;
    font-weight: 300;
    color: #7E8F9A;
  }
</style>
