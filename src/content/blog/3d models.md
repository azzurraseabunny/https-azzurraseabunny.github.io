---
title: '3D Models'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 05 2022'
heroImage: '/portfolio/3d/covering.png'
---

I can 3D Model scenes, objects and creatures on both Blender and Blockbench!<br>Click on them to take a closer look!

<div class="gallery-container">
  <div class="image-container">
    <img
      src="/portfolio/3d/live.png"
      alt="Living Room (Blender)"
      class="clickable-image"
      data-title="Living Room"
      data-description="Blender"
    />
    <div class="overlay">
      <h3>Living Room</h3>
      <p>Blender</p>
    </div>
  </div>
  
  <div class="image-container">
    <img
      src="/portfolio/3d/AI Mad.png"
      alt="Rainworld Iterator Room (Blender)"
      class="clickable-image"
      data-title="Rainworld Iterator Room"
      data-description="Blender"
    />
    <div class="overlay">
      <h3>Rainworld Iterator Room</h3>
      <p>Blender</p>
    </div>
  </div>

  <div class="image-container">
    <img
      src="/portfolio/3d/squidcada.gif"
      alt="Squidcada (Blockbench)"
      class="clickable-image"
      data-title="Squidcada"
      data-description="Blockbench"
    />
    <div class="overlay">
      <h3>Squidcada</h3>
      <p>Blockbench</p>
    </div>
  </div>

  <div class="image-container">
    <img
      src="/portfolio/3d/sofanthiel2.gif"
      alt="Sofantheil (Blockbench)"
      class="clickable-image"
      data-title="Sofantheil"
      data-description="Blockbench"
    />
    <div class="overlay">
      <h3>Sofantheil</h3>
      <p>Blockbench</p>
    </div>
  </div>

  <div class="image-container">
    <img
      src="/portfolio/3d/spider.png"
      alt="Spider (Blockbench)"
      class="clickable-image"
      data-title="Spider"
      data-description="Blockbench"
    />
    <div class="overlay">
      <h3>Spider</h3>
      <p>Blockbench</p>
    </div>
  </div>

  <div class="image-container">
    <img
      src="/portfolio/3d/snail.gif"
      alt="Snail (Blockbench)"
      class="clickable-image"
      data-title="Snail"
      data-description="Blockbench"
    />
    <div class="overlay">
      <h3>Snail</h3>
      <p>Blockbench</p>
    </div>
  </div>
  
  <div class="image-container">
    <img
      src="/portfolio/3d/worm.png"
      alt="Yearn the Worm (Blockbench)"
      class="clickable-image"
      data-title="Yearn the Worm"
      data-description="Blockbench"
    />
    <div class="overlay">
      <h3>Yearn the Worm</h3>
      <p>Blockbench</p>
    </div>
  </div>
  
  <div class="image-container">
    <img
      src="/portfolio/3d/metropolis3.png"
      alt="TBH's Metropolis (Blender)"
      class="clickable-image"
      data-title="TBH's Metropolis"
      data-description="Blender"
    />
    <div class="overlay">
      <h3>TBH's Metropolis</h3>
      <p>Blender</p>
    </div>
  </div>
  
  <div class="image-container">
    <img
      src="/portfolio/3d/fakeleak.png"
      alt="Fallen Superstructure (Blender)"
      class="clickable-image"
      data-title="Fallen Superstructure"
      data-description="Blender"
    />
    <div class="overlay">
      <h3>Fallen Superstructure</h3>
      <p>Blender</p>
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
  <a href="/blog/traditional" class="button left-button">To Traditional Page</a>
  <a href="/blog/music" class="button right-button">To Music Page</a>
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
  backdrop-filter: blur(10px);
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover; /* Ensures the images scale without distortion */
  display: block;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
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
