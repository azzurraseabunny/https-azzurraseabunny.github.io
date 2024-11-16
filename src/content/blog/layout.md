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
.custom-line {
    border: 0;
    height: 6px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));
    margin: 40px ;
}

/* Gallery Layout */
.gallery-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px; /* Adjust the space between images */
  justify-items: center;
  transform: translateX(-15%);
}

.image-container {
  position: relative;
  width: 300px; /* Fixed width for each image */
  height: 200px; /* Fixed height for each image */
  overflow: hidden; /* Ensures the overlay stays within the image boundaries */
  cursor: pointer; /* Adds a pointer cursor to indicate it's clickable */
  transition: transform 0.3s ease-out; /* Smooth transition for hover effect */
}

.image-container img {
  width: 100%; /* Make the image fill the container */
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire container without distortion */
  border-radius: 8px; /* Optional: rounded corners */
}

/* Hover effect to enlarge the image slightly with backOut effect */
.image-container img:hover {
  transform: scale(1.02); /* Slight scaling effect */
}

/* The overlay with title and description */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8); /* Dark background for text */
  color: white;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease; /* Smooth transition for fade-in effect */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  pointer-events: none; /* Allow clicks to pass through the overlay */
}

.overlay h3 {
  font-size: 20px;
  margin: 10px 0;
}

.overlay p {
  font-size: 14px;
  margin: 0;
}

.image-container:hover .overlay {
  opacity: 1; /* Fade in overlay when hovering over the image */
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Background dark overlay */
  justify-content: center;
  align-items: center;
  opacity: 0; /* Start with zero opacity (hidden) */
  transition: opacity 0.2s ease; /* Fade in/out transition */
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
