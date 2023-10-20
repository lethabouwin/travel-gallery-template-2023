<script setup>
import HelloWorld from './components/HelloWorld.vue'
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
  .location-pins-container {
    display: flex;
    height: 70vh;
  }

  .location-pin-1 {
    height: 60%;
    position: relative;
    top: 10%;
    left: 15%;
  }

  .location-pin-2 {
    height: 60%;
    position: relative;
    top: 30%;
    left: 22%;
  }

  .location-pin-3 {
    height: 60%;
    position: relative;
    top: 15%;
    left: 22%;
  }

  .location-pin-4 {
    height: 60%;
    position: relative;
    top: 5%;
    left: 30%;
  }

  .location-pin-5 {
    height: 60%;
    position: relative;
    top: 35%;
    left: 29%;
  }
  .locations-container {
    border-top: 3px solid white;

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

  .location-circle-marker-1 {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    /* background-color: white; */
    background-image: linear-gradient(to right, #FFA4AA, #FF406F);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20% ;
    /* background-image: linear gradient(135deg, #71b7e6, #9b59b6); */
  }

  .location-circle-marker-2 {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    /* background-color: white; */
    background-image: linear-gradient(to right, #FFC853, #FFA157);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20% ;
    /* background-image: linear gradient(135deg, #71b7e6, #9b59b6); */
  }

  .location-circle-marker-3 {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    /* background-color: white; */
    background-image: linear-gradient(to right, #7497F3, #856EF4);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20% ;
    /* background-image: linear gradient(135deg, #71b7e6, #9b59b6); */
  }

  

  .location-circle-marker-4 {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    /* background-color: white; */
    background-image: linear-gradient(to right, #E246F0, #8C46F0);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20% ;
    /* background-image: linear gradient(135deg, #71b7e6, #9b59b6); */
  }

  .location-circle-marker-5 {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    /* background-color: white; */
    background-image: linear-gradient(to right, #8CC6F0, #8C91F0);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20% ;
    /* background-image: linear gradient(135deg, #71b7e6, #9b59b6); */
  }

  .location-name {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    padding-top: 10px;
  }

  .location-description {
    font-size: 12px;
    font-weight: 300;
    color: #7E8F9A;
  }
</style>
