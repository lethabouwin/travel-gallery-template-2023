const imageSources = [
  "../assets/pexels-usa-1.svg",
  "../assets/pexels-usa-2.svg",
  "../assets/pexels-usa-3.svg",
  "../assets/pexels-usa-4.svg"
];

const imageAltTexts = [
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image"
]

document.addEventListener("DOMContentLoaded", function() {
  // Get the "location-1" element
  const location1 = document.getElementById("location-1");

  // Get the modal element
  const modal = document.getElementById("gallery-pop-up");
  modal.id = "gallery-pop-up";

  // Create a div to hold the images
  const imagesContainer = document.createElement("div");
  imagesContainer.className = "destination-images-container";

  // Populate the imagesContainer with images using imageSources
  imageSources.forEach((imageSource, index) => {
    const img = document.createElement("img");
    img.src = imageSource;
    img.alt = imageAltTexts[index];
    img.className = `destination-image-${index + 1}`;
    imagesContainer.appendChild(img);
  });

  // get html
  modal.innerHTML = `
    <div></div>
    <div class="modal-content">
      <img src="../assets/CloseBtn.svg" alt="close button" id="close-modal" width="20px">
    </div>
   
    <div class="destination-main-container">
      <div>
        <img src="../assets/images/UI - Logo-02.png" class="logo" alt="logo image">
      </div>
      ${imagesContainer.outerHTML}
    </div>
  `;

  // Append the modal to the body
  document.body.appendChild(modal);

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

  // When "location-1" is clicked, display the modal
  location1.addEventListener("click", function() {
    modal.style.display = "block";
    openModal();
  });

  // When the 'close' button is clicked, close the modal
  const closeButton = document.getElementById("close-modal");
  closeButton.addEventListener("click", function() {
    modal.style.display = "none";
    closeModal();
  });

  // to add an overlay to the modal with the name of the image that was clicked
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
    display: block;
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
  }

  #close-modal:hover {
    transform: scale(1.2);
  }

  .logo {
    width: 170px;
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
