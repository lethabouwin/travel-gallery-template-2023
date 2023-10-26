// DestinationView.js

(function () {
    // style elements
    const style = document.createElement('style');
    style.textContent = `
    body { 
        font-family: 'Roboto', sans-serif;
    }

    .logo {
        border: 3px solid red;
        width: 100px;
    }

    .destination-main-container {
        align-items: center;
        width: 100vw;
        background-image: url(../assets/world-map-reduced.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
   
    .destination-images-container {
        display: flex;
        flex-direction: row;
        
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
        min-height: 15%;
        min-width: 10%;
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

    @media screen and (max-width: 643px) {
        .destination-main-container {
            background-image: none;
        }

        .dots {
            display: none;
        }
    }
    `;

    document.head.appendChild(style);

    // Create destination elements and append them to the destination container
    const destinationsContainer = document.querySelector('.destination-main-container');

    const destinationsData = [
        { image: 'pexels-usa-1.svg', alt: 'pexels image' },
        { image: 'pexels-usa-2.svg', alt: 'pexels image' },
        { image: 'pexels-usa-3.svg', alt: 'pexels image' },
    ];

    destinationsData.forEach((destination) => {
        const destinationElement = document.createElement('img');
        destinationElement.setAttribute('src', destination.image);
        destinationElement.setAttribute('alt', destination.alt);
        destinationsContainer.appendChild(destinationElement);

        destinationElement.style.height = '25%';
        destinationElement.style.width = '20%';
        destinationElement.style.objectFit = 'cover';

        destinationElement.addEventListener('click', function () {
            fullView(destination.image);
        })
    });

    // Function to open the full view
    function fullView(imageSrc) {
        const fullImageView = document.getElementById('fullImageView');
        const fullImage = document.getElementById('fullImage');

        fullImage.src = imageSrc;
        fullImageView.style.display = 'block';
    }

    // Function to close the full view
    function closeView() {
        const fullImageView = document.getElementById('fullImageView');
        fullImageView.style.display = 'none';
    }

    // Attach event listeners to the images to open the full view
    const images = document.querySelectorAll('.destination-images-container img');
    images.forEach((image) => {
        image.addEventListener('click', function () {
            fullView(image.getAttribute('src'));
        });


    });

    // Attach event listener to the full view to close it
    const fullImage = document.getElementById('fullImage');
    fullImage.addEventListener('click', closeView);


    // const container = document.querySelector('.destination-main-container');
    const container = document.createElement('div');
    // container.innerHTML = template;

    // append
    document.body.appendChild(container);

   
})

    

