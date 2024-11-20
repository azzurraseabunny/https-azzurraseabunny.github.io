---
title: 'Layout'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 07 2022'
heroImage: '/portfolio/layout/covering.png'
---

<!-- Gallery Container -->
<hr class="custom-line">
<div class="gallery-container">

  <div class="image-container">
    <img src="/portfolio/layout/computa.jpg" class="clickable-image" />
    <div class="overlay">
      <h3>ICT for a change</h3>
      <p>Adobe Photoshop</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/layout/wator.jpg" class="clickable-image" />
    <div class="overlay">
      <h3>Drink Water</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/layout/hotmicrowave.jpg" class="clickable-image" />
    <div class="overlay">
      <h3>Caution! Hot!</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/layout/workimmersoin.jpg" class="clickable-image" />
    <div class="overlay">
      <h3>Work Immersion</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/layout/bizznezz.png" class="clickable-image" />
    <div class="overlay">
      <h3>Business Card</h3>
      <p>Adobe Photoshop</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/layout/intimateprins.png" class="clickable-image" />
    <div class="overlay">
      <h3>Intimate Prints</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/layout/awfdasfsdf.png" class="clickable-image" />
    <div class="overlay">
      <h3>Seaside Brew Bunny</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

</div>

<!-- Modal for pop-up images -->
<div id="image-modal" class="modal">
  <span class="close" id="close-modal">&times;</span>
  <img class="modal-content" id="modal-img" />
</div>

<style>
/* General Styling */
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

/* Custom line divider */
.custom-line {
  border: 0;
  height: 6px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));
  margin: 40px;
}

/* Gallery Layout */
.gallery-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns for desktop */
  gap: 20px;
  justify-items: center; /* Center individual items in each grid cell */
  padding: 20px;
  max-width: 1200px; /* Set a max width to keep the gallery layout neat */
  margin: 0 auto; /* Center the gallery container on the x-axis */
  transform: translateX(-17%);
}


.image-container {
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-out;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Overlay for hover effect */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  pointer-events: none;
}

.overlay h3 {
  font-size: 18px;
  margin: 5px 0;
}

.overlay p {
  font-size: 14px;
  margin: 0;
}

.image-container:hover .overlay {
  opacity: 1;
}

/* Modal Styling */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Dark background overlay */
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
  margin: auto;
  display: block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.close {
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  z-index: 2;
}

/* Responsive Layout for Mobile */
@media (max-width: 768px) {
  .gallery-container {
    grid-template-columns: 1fr; /* Single-column layout for mobile */
    gap: 15px;
    padding: 10px;
	transform: translateX(0%);
  }

  .image-container {
    width: 100%; /* Full width for mobile */
    height: auto;
  }

  /* Hide the modal for mobile */
  .modal {
    display: none;
  }
}

/* Smaller Mobile Devices */
@media (max-width: 480px) {
  .overlay h3 {
    font-size: 14px;
  }

  .overlay p {
    font-size: 10px;
  }
}


</style>

<script>
// Get the modal and image elements
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

// Get all images with the class 'clickable-image'
const images = document.querySelectorAll(".clickable-image");

// Loop through each image and add an event listener
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    modal.style.display = "flex"; // Show the modal
    modal.style.opacity = 1; // Fade in the modal
    modalImg.src = e.target.src; // Set the modal image source to the clicked image
  });
});

// Close the modal when clicking the 'X' button
closeModal.addEventListener("click", () => {
  modal.style.opacity = 0; // Fade out the modal
  setTimeout(() => {
    modal.style.display = "none"; // Hide the modal after the fade-out
  }, 500); // Match the fade-out time (0.5s)
});

// Close the modal when clicking anywhere outside the image
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.opacity = 0; // Fade out the modal
    setTimeout(() => {
      modal.style.display = "none"; // Hide the modal after the fade-out
    }, 500); // Match the fade-out time (0.5s)
  }
});
</script>
