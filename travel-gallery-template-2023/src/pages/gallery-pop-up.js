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

// add styling to the modal with style tags
const modalStyle = document.createElement('style');
modalStyle.innerHTML = `
#gallery-pop-up {
    color: pink;
    display: block;
    border: 2px solid red;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: white;
    z-index: 999;
  }

`;
document.head.appendChild(modalStyle);



