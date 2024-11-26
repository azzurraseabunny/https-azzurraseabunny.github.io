---
title: 'Traditional'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 06 2022'
heroImage: '/portfolio/traditional/covering.png'
---

Here you can see my Traditional art I drew for school!<br>Hover over them and click to take a closer look!

<div class="gallery-container">
  <div class="image-container">
    <img
      src="/portfolio/traditional/dancingladies.jpg"
      alt="Dancing Ladies (Watercolor, Color Pencil, Pen and Ink)"
      class="clickable-image"
      data-title="Dancing Ladies"
      data-description="Watercolor, Color Pencil, Pen and Ink"
    />
    <div class="overlay">
      <h3>Dancing Ladies</h3>
      <p>Watercolor, Color Pencil, Pen and Ink</p>
    </div>
  </div>

  <div class="image-container">
    <img
      src="/portfolio/traditional/hause.jpg"
      alt="House (Pen and Ink)"
      class="clickable-image"
      data-title="House"
      data-description="Pen and Ink"
    />
    <div class="overlay">
      <h3>House</h3>
      <p>Pen and Ink</p>
    </div>
  </div>

  <div class="image-container">
    <img
      src="/portfolio/traditional/venus.png"
      alt="Venus (Graphite)"
      class="clickable-image"
      data-title="Venus"
      data-description="Graphite"
    />
    <div class="overlay">
      <h3>Venus</h3>
      <p>Graphite</p>
    </div>
  </div>

  <div class="image-container">
    <img
      src="/portfolio/traditional/bitsandbones.jpg"
      alt="Bits and Bones (Mixed Media)"
      class="clickable-image"
      data-title="Bits and Bones"
      data-description="Mixed Media"
    />
    <div class="overlay">
      <h3>Bits and Bones</h3>
      <p>Mixed Media</p>
    </div>
  </div>

  <div class="image-container">
    <img
      src="/portfolio/traditional/marg.jpg"
      alt="Markiplier (Charcoal)"
      class="clickable-image"
      data-title="Markiplier"
      data-description="Charcoal"
    />
    <div class="overlay">
      <h3>Markiplier</h3>
      <p>Charcoal</p>
    </div>
  </div>
</div>

<!-- Modal Structure -->
<div id="image-modal" class="modal">
  <span id="close-modal" class="close">&times;</span>
  <img id="modal-img" class="modal-content" alt="Modal Image" />
  <div class="modal-caption">
    <h2 id="modal-title"></h2>
    <p id="modal-description-text"></p>
  </div>
</div>

<hr class="custom-line">

<div class="button-container">
  <a href="/blog/layout" class="button left-button">To Layouts Page</a>
  <a href="/blog/3d-models" class="button right-button">To 3D Models Page</a>
</div>

<style>
/* Container to position buttons */
.button-container {
  top: 100%; /* Center vertically */
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none; /* Disable interference for non-interactive areas */
}

/* General button styles */
.button {
  pointer-events: auto; /* Enable interaction for buttons */
  padding: 10px 20px;
  background: #333;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* Position buttons */
.left-button {
  margin-left: 20px;
}

.right-button {
  margin-right: 20px;
}

/* Hover effect */
.button:hover {
  transform: scale(1.02); /* Grow on hover */
  background-color: #555; /* Change color on hover */
}

/* Custom Line Style */
.custom-line {
  border: 0;
  height: 6px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));
  margin: 40px;
}

/* Gallery Container for 2-Column Layout */
.gallery-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns layout */
  gap: 20px; /* Space between grid items */
  justify-items: center;
  align-items: start; /* Align items to the top */
  grid-auto-rows: minmax(200px, auto); /* Dynamic row height based on content */
  margin: 0 20px; /* Margin around the container */
}

@media (max-width: 768px) {
  .gallery-container {
    grid-template-columns: 1fr; /* Single column for smaller screens */
  }
}

.image-container {
  position: relative;
  width: 100%;
  max-width: 100%; /* Let the container resize freely */
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-out;
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover; /* Ensures the images scale without distortion */
  display: block;
  border-radius: 8px;
}

/* Overlay styling */
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 1em;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .overlay {
  opacity: 1;
}

.overlay h3 {
  margin: 0;
  font-size: 1.2em;
}

.overlay p {
  margin-top: 0.5em;
  font-size: 0.9em;
}

/* Modal Styling */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s ease;
    backdrop-filter: blur(10px); /* Apply blur effect to the background */
  -webkit-backdrop-filter: blur(10px); /* For Safari support */
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}

/* Modal Content */
.modal-content {
  max-width: 60%;
  max-height: 60%;
  margin: auto;
  display: block;
  transform: none; /* Removed translateX */
  position: relative; /* Ensures positioning relative to the parent container */
  display: flex; /* Enables flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 10px; /* Optional: adds padding around the content */
}

/* Modal Description */
.modal-caption {
  color: white;
  text-align: center;
  position: absolute;
  bottom: 20px; /* Adjust the distance from the bottom */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Offset by 50% of its width to perfectly center */
  width: 100%; /* Ensure description stays within the modal's width */
}

</style>

<script>
// Get the modal and image elements
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

// Get the modal title and description elements
const modalTitle = document.getElementById("modal-title");
const modalDescriptionText = document.getElementById("modal-description-text");

// Get all images with the class 'clickable-image'
const images = document.querySelectorAll(".clickable-image");

// Loop through each image and add an event listener
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    modal.style.display = "flex"; // Show the modal
    modal.style.opacity = 1; // Fade in the modal
    modalImg.src = e.target.src; // Set the modal image source to the clicked image

    // Get the title and description from the clicked image's data attributes
    modalTitle.textContent = e.target.getAttribute("data-title");
    modalDescriptionText.textContent = e.target.getAttribute("data-description");
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
