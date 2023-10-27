// add html to the page
document.addEventListener("DOMContentLoaded", function() {
  // Get the "location-1" element
  const location1 = document.getElementById("location-1");

  // Get the modal element
  const modal = document.getElementById("gallery-pop-up");
  modal.id = "gallery-pop-up";


  // get html
  modal.innerHTML = ` 
    <div>POP UP</div>
    <button id="close-modal">Close</button>

    <div class="destination-main-container">

      <div class="destination-images-container">
        <input type="radio" name="slide" id="destination-image-1">
        <input type="radio" name="slide" id="destination-image-2">
        <input type="radio" name="slide" id="destination-image-3">

        <img src="../assets/pexels-usa-1.svg" class="destination-image-1" alt="pexels image" onClick="fullView('pexels-usa-1.svg')" >
        <img src="../assets/pexels-usa-2.svg" class="destination-image-2" alt="pexels image" onClick="fullView('pexels-usa-2.svg')">
        <img src="../assets/pexels-usa-3.svg" class="destination-image-3" alt="pexels image" onClick="fullView('pexels-usa-3.svg')">
      </div>

      <div class="dots">
        <label for="destination-image-1"></label>
        <label for="destination-image-2"></label>
        <label for="destination-image-3"></label>
      </div>
    
      <div id="fullImageView" style="display: none;">
        <img id="fullImage" onClick="closeView">
      </div>
    
    
    
    </div>
    
  
  `;

//   Append the modal to the body
  document.body.appendChild(modal);

  // Function to open the modal
  function openModal() {
    modal.style.display = "block";
    document.documentElement.style.overflow = 'hidden';  // Disable scrolling
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
    document.documentElement.style.overflow = 'auto';  // Enable scrolling
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
  })
});

  // FULL SCREEN FUNCTIONALITY
  function fullView(imageSrc) {
    document.getElementById('fullImage').src = imageSrc;
    document.getElementById('fullImageView').style.display = 'block';
}

function closeView() {
    document.getElementById('fullImageView').style.display = 'none';
}


// add styling to the modal with style tags
const modalStyle = document.createElement('style');
modalStyle.innerHTML = `
#gallery-pop-up {
    color: green;
    display: block;
    border: 2px solid red;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background:silver;
    z-index: 999; 
    text-align: center;
    font-family: 'Roboto', sans-serif;
    width: 90%;
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

`;

document.head.appendChild(modalStyle);



