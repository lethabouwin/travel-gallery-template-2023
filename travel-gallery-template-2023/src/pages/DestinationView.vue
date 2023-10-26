<!-- Change to Javascript and export to main html -->

<script setup>
    function fullView(imageSrc) {
        document.getElementById('fullImage').src = imageSrc;
        document.getElementById('fullImageView').style.display = 'block';
    }

    function closeView() {
        document.getElementById('fullImageView').style.display = 'none';
    }

</script>

<template>
    <div class="destination-main-container">
        <!-- carousel -->
            <div class="destination-images-container">
                <input type="radio" name="slide" id="destination-image-1">
                <input type="radio" name="slide" id="destination-image-2">
                <input type="radio" name="slide" id="destination-image-3">

                <img src="../assets/pexels-usa-1.svg" class="destination-image-1" alt="pexels image" @click="fullView('pexels-usa-1.svg')" >
                <img src="../assets/pexels-usa-2.svg" class="destination-image-2" alt="pexels image" @click="fullView('pexels-usa-2.svg')">
                <img src="../assets/pexels-usa-3.svg" class="destination-image-3" alt="pexels image" @click="fullView('pexels-usa-3.svg')">    
            </div>

            <div class="dots">
                <label for="destination-image-1"></label>
                <label for="destination-image-2"></label>
                <label for="destination-image-3"></label>
            </div>

            <div class="load-more-btn">
                <button>
                    Load More
                </button>
            </div>

            <div id="fullImageView" style="display: none;">
                <img id="fullImage" @click="closeView">
            </div>
    </div>

</template>

<style scoped>
/* DESTINATION VIEW styling */
html {
    height: 100%;
}

    .destination-main-container {
        align-items: center;
        width: 100vw;
        background-image: url(../assets/world-map-reduced.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        /* background-size:auto 100%; */
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 2rem;
        /* add no scroll to the background */
        /* background-attachment: fixed; */


    }
    .destination-container {
        display: flex;
        flex-direction: row;
        /* height: 70vh;  */
        width: 100%;
        flex-wrap: wrap;
    }

    .destination-images-container {
        display: flex;
        flex-direction: row;
        height: 100vh;
        justify-content: center;
        padding-left: 3rem;
        padding-right: 3rem;
        gap: 3rem;
        align-items: center;
        flex-wrap: wrap;
    } 

    .destination-images-container img {
        transition: all 0.15s ease;
        object-fit: cover;
        min-height: 25%;
        min-width: 20%;

    }

    .destination-images-container img:hover {
        cursor: pointer;
        transform: scale(1.01);
        box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.5);
    }

    .destination-images-container input {
        display: none;
    }

    .dots {
        display: flex;
        justify-content: center;
        /* margin: 5px; */
        /* gap: 10px; */
        /* cursor: pointer;
        transition: all 0.15s ease; */
    }

    .dots label {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        border: solid white 3px;
        cursor: pointer;
        transition: all 0.15s ease;
        margin: 5px;
    }

    .dots label:hover {
        background-color: white;
        scale: 1.2;
    }

    .dots label:checked {
        background-color: pink;
        scale: 1.4;
    }

    #destination-image-1:checked ~ .destination-image-1 {
        margin-left: 0;
        scale: 1.6;
        z-index: 1;
    }

    #destination-image-2:checked ~ .destination-image-2 {
        margin-left: 0%;
        scale: 1.6;
        z-index: 1;
    }

    #destination-image-3:checked ~ .destination-image-3 {
        margin-left: 0%;
        scale: 1.6;
        z-index: 1;
    }

    /* media queries */
    @media screen and (max-width: 643px) {
        /* .destination-main-container {
            background-color: grey;
            background-image: none;
          
        } */

        .dots {
            display: none;
        }
    }


</style>
