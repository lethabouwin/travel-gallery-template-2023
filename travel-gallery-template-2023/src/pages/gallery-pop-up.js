import { imagesDublin } from "../components/imagesDublin.js";
import { imagesMauritius } from "../components/imagesMauritius.js";


document.addEventListener("DOMContentLoaded", function() {
  // Get the "location-x" elements
  const location1 = document.getElementById("location-1");
  const location2 = document.getElementById("location-2");

  // Get the modal element
  const modal = document.getElementById("gallery-pop-up");

  // Create a div to hold the images
  const imagesContainer = document.createElement("div");
  imagesContainer.className = "destination-images-container";

  // Function to populate the modal with images
  function populateModal(locationImages, locationName) {
    imagesContainer.innerHTML = '';
    locationImages.forEach((image, index) => {
      const img = document.createElement("img");
      img.src = image;
      img.alt = 'destination image';
      img.className = `destination-image-${index + 1}`;
      imagesContainer.appendChild(img);
    });

    // Update the modal content
    modal.innerHTML = `
      <div class="modal-content">
        <img src="../assets/CloseBtn.svg" alt="close button" id="close-modal" width="20px">
      </div>

      <div class="destination-main-container">
        <div>
          <img src="../assets/images/UI - Logo-02.png" class="logo" alt="logo image">
        </div>

        <div class="location-name">
          <h2 style="color: #1091ce; letter-spacing: 5px">${locationName}</h2>
        </div>

        ${imagesContainer.outerHTML}
      </div>
    `;
  }

  // Function to open the modal
  function openModal() {
    modal.style.display = "block";
    document.documentElement.style.overflow = 'hidden';
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
    document.documentElement.style.overflow = 'auto';
  }

  // When the user clicks the "close-modal" img, the modal should close 
  modal.addEventListener("click", function() {
    if (event.target.id === "close-modal") {
      closeModal();
    }
  })


  // When "location-1" is clicked, display the modal with imagesMauritius
  location1.addEventListener("click", function() {
    openModal();
    populateModal(imagesMauritius, "Port Louis, Mauritius");
  });

  // When "location-2" is clicked, display the modal with imagesDublin
  location2.addEventListener("click", function() {
    openModal();
    populateModal(imagesDublin, "Dublin, Ireland");
  });


  // Add an overlay to the modal with the name of the image that was clicked
  const destinationImages = document.querySelectorAll(".destination-images-container img");
  destinationImages.forEach((destinationImage) => {
    destinationImage.addEventListener("click", function() {
      fullView(destinationImage.src);
    });
  });
});

// Add the modal styles
const modalStyle = document.createElement('style');
modalStyle.innerHTML = `
#gallery-pop-up {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: silver;
    z-index: 999; 
    text-align: center;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100vh;
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.5);
    overflow: auto;
  }

  .modal-content {
    justify-content: flex-end;
    display: flex;
    padding: 10px;
    
  }

  #close-modal {
    cursor: pointer;  
    position: absolute;
    z-index: 1;
  }

  #close-modal:hover {
    transform: scale(1.2);
  }

  .logo {
    width: 170px;
  }

  .location-name {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    padding-top: 10px;
    text-align: start;
    color: #7E8F9A;
}

  .destination-main-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .destination-images-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 3rem;
    gap: 2rem;
    align-items: center;
    flex-wrap: wrap;
  } 

  .destination-images-container img {
    transition: all 0.15s ease;
    object-fit: cover;
    height: 200px;
    width: 200px;
  }

  .destination-images-container img:hover {
    cursor: pointer;
    transform: scale(1.2);
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.5);
  }

  .destination-images-container input {
    display: none;
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
`;

document.head.appendChild(modalStyle);