const imageSources = [
  "../assets/imagesMauritiusBMW/BMW_030.JPG",
  "../assets/imagesMauritiusBMW/BMW_033.JPG",
  "../assets/imagesMauritiusBMW/BMW_034.JPG",
  "../assets/imagesMauritiusBMW/BMW_037.JPG",
  "../assets/imagesMauritiusBMW/BMW_038.JPG",
  "../assets/imagesMauritiusBMW/BMW_045.JPG",
  "../assets/imagesMauritiusBMW/BMW_046 (1).JPG",
  "../assets/imagesMauritiusBMW/BMW_060.JPG",
  "../assets/imagesMauritiusBMW/BMW_071.JPG",
  "../assets/imagesMauritiusBMW/BMW_072.JPG",
  "../assets/imagesMauritiusBMW/BMW_073.JPG",
  "../assets/imagesMauritiusBMW/BMW_083.JPG",
  "../assets/imagesMauritiusBMW/BMW_086.JPG",
  "../assets/imagesMauritiusBMW/BMW_094.JPG",
  "../assets/imagesMauritiusBMW/BMW_106.JPG",
  "../assets/imagesMauritiusBMW/BMW_107.JPG",
  "../assets/imagesMauritiusBMW/BMW_109.JPG",
  "../assets/imagesMauritiusBMW/BMW_110.JPG",
  "../assets/imagesMauritiusBMW/BMW_126.JPG",
  "../assets/imagesMauritiusBMW/BMW_137.JPG",
  "../assets/imagesMauritiusBMW/BMW_149.JPG",
  "../assets/imagesMauritiusBMW/BMW_158.JPG",
  "../assets/imagesMauritiusBMW/BMW_160.JPG",
  "../assets/imagesMauritiusBMW/BMW_173.JPG",
  "../assets/imagesMauritiusBMW/GC2_2802.jpg",
  "../assets/imagesMauritiusBMW/GDC_3892.jpg",
  "../assets/imagesMauritiusBMW/GDC_3906.jpg",
  "../assets/imagesMauritiusBMW/GDC_3920.jpg",
  "../assets/imagesMauritiusBMW/GDC_3956.jpg",
  "../assets/imagesMauritiusBMW/GDC_3986.jpg",
  "../assets/imagesMauritiusBMW/GDC_4063.jpg",
  "../assets/imagesMauritiusBMW/GDC_4133.jpg",
  "../assets/imagesMauritiusBMW/GDC_4144.jpg",
  "../assets/imagesMauritiusBMW/GDC_4158.jpg",
  "../assets/imagesMauritiusBMW/Photo-34.jpg",
  "../assets/imagesMauritiusBMW/Photo-36.jpg",
  "../assets/imagesMauritiusBMW/Photo-82.jpg",
  "../assets/imagesMauritiusBMW/Photo-89.jpg",
  "../assets/imagesMauritiusBMW/Photo-100.jpg",
  "../assets/imagesMauritiusBMW/Photo-148.jpg",
  "../assets/imagesMauritiusBMW/Photo-149.jpg",
  "../assets/imagesMauritiusBMW/Photo-151.jpg",
  "../assets/imagesMauritiusBMW/Photo-162.jpg",
  "../assets/imagesMauritiusBMW/Photo-163.jpg",
  
];

const imageAltTexts = [
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
  "pexels image",
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
      
      <div class="location-name">
        <p>Mauritius - BMW</p>
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
