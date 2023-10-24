<script setup>
import '../App.css'
import LocationsFooter from '../components/LocationsFooter.vue';

import image1 from '../assets/pexels-usa-1.svg';
import image2 from '../assets/pexels-usa-2.svg';
import image3 from '../assets/pexels-usa-3.svg';
import '../assets/pexels-usa-1.svg';

function fullView(imageSrc) {
    // window.open(imageSrc, '_blank');
    console.log('clicked')
    document.getElementById('fullImage').src = imageSrc;
    document.getElementById('fullImageView').style.display = 'block';
}

function closeView() {
    document.getElementById('fullImageView').style.display = 'none';
}

</script>

<template>
    <div class="main-container">
        <!-- carousel -->
        <div class="destination-container">
            <div class="destination-images-container">
                <input type="radio" name="slide" id="destination-image-1">
                <input type="radio" name="slide" id="destination-image-2">
                <input type="radio" name="slide" id="destination-image-3">

                <img :src="image1" src="../assets/pexels-usa-1.svg" class="destination-image-1" alt="pexels image" @click="fullView('pexels-usa-1.svg')" >
                <img :src="image2" src="../assets/pexels-usa-2.svg" class="destination-image-2" alt="pexels image" @click="fullView('pexels-usa-2.svg')">
                <img :src="image3" src="../assets/pexels-usa-3.svg" class="destination-image-3" alt="pexels image" @click="fullView('pexels-usa-3.svg')">    
            </div>
        </div>

            <div class="dots">
                <label for="destination-image-1"></label>
                <label for="destination-image-2"></label>
                <label for="destination-image-3"></label>
            </div>

            <div id="fullImageView" style="display: none;">
                <img id="fullImage" @click="closeView">
            </div>

        <LocationsFooter />
    </div>

</template>
