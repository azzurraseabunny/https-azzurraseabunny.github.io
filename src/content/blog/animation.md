---
title: 'Animation'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 09 2022'
heroImage: '/portfolio/animation/duckass.gif'
---

I can animate using a few programs including Adobe Animate, Clip Studio Paint and Toon Boom!<br>Click on them to take a closer look!

<hr class="custom-line">

## Videos

Puyat ( WIP ) || Blender
<div class="video-container">
  <video controls>
    <source src="/portfolio/animation/wips.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<hr class="custom-line">

## GIFS

<div class="gallery-container">
  <div class="image-container">
    <img
      src="/portfolio/animation/so-much-scavs.gif"
      alt="Scavengers (Adobe Animate)"
      class="clickable-image"
      data-title="Scavengers"
      data-description="Adobe Animate"
    />
    <div class="overlay">
      <h3>Scavengers</h3>
      <p>Adobe Animate</p>
    </div>
  </div>
  
  <div class="image-container">
    <img
      src="/portfolio/animation/pookiedeer.gif"
      alt="Rain Deer (Adobe Animate)"
      class="clickable-image"
      data-title="Rain Deer"
      data-description="Adobe Animate"
    />
    <div class="overlay">
      <h3>Rain Deer</h3>
      <p>Adobe Animate</p>
    </div>
  </div>
  
  <div class="image-container">
    <img
      src="/portfolio/animation/toffee.gif"
      alt="Toffee (Toon Boom)"
      class="clickable-image"
      data-title="Toffee"
      data-description="Toon Boom"
    />
    <div class="overlay">
      <h3>Toffee</h3>
      <p>Toon boom</p>
    </div>
  </div>

  <div class="image-container">
    <img
      src="/portfolio/animation/gato.gif"
      alt="gato (Adobe Animate)"
      class="clickable-image"
      data-title="gato"
      data-description="Adobe Animate"
    />
    <div class="overlay">
      <h3>gato</h3>
      <p>Adobe Animate</p>
    </div>
  </div>

  <div class="image-container">
    <img
      src="/portfolio/animation/ball.gif"
      alt="Bouncing Ball (Toon Boom)"
      class="clickable-image"
      data-title="Bouncing Ball"
      data-description="Toon Boom"
    />
    <div class="overlay">
      <h3>Bouncing Ball</h3>
      <p>Toon Boom</p>
    </div>
  </div>

  <div class="image-container">
    <img
      src="/portfolio/animation/disney hopefully.gif"
      alt="Anticipation (Clip Studio Paint)"
      class="clickable-image"
      data-title="Anticipation"
      data-description="Clip Studio Paint"
    />
    <div class="overlay">
      <h3>Anticipation</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>
  
  <div class="image-container">
    <img
      src="/portfolio/animation/duckass.gif"
      alt="Clean Up & Inbetweens (Toon Boom)"
      class="clickable-image"
      data-title="Clean Up & Inbetweens"
      data-description="Toon Boom"
    />
    <div class="overlay">
      <h3>Clean Up & Inbetweens</h3>
      <p>Toon Boom</p>
    </div>
  </div>
  
  <div class="image-container">
    <img
      src="/portfolio/animation/idi.gif"
      alt="Idiot Spider (Clip Studio Paint)"
      class="clickable-image"
      data-title="Idiot Spider"
      data-description="Clip Studio Paint"
    />
    <div class="overlay">
      <h3>Idiot Spider</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>
  
  <div class="image-container">
    <img
      src="/portfolio/animation/RUNNINGMAN.gif"
      alt="Run Cycle (Clip Studio Paint)"
      class="clickable-image"
      data-title="Anticipation"
      data-description="Clip Studio Paint"
    />
    <div class="overlay">
      <h3>Run Cycle</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>
  
  <div class="image-container">
    <img
      src="/portfolio/animation/SACK.gif"
      alt="Sack Animation (Clip Studio Paint)"
      class="clickable-image"
      data-title="Anticipation"
      data-description="Clip Studio Paint"
    />
    <div class="overlay">
      <h3>Sack Animation</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>
  
  <div class="image-container">
    <img
      src="/portfolio/animation/slowinslowout.gif"
      alt="Slow In & Slow Out (Toon Boom)"
      class="clickable-image"
      data-title="Anticipation"
      data-description="Clip Studio Paint"
    />
    <div class="overlay">
      <h3>Slow In & Slow Out</h3>
      <p>Toon Boom</p>
    </div>
  </div>

  <!-- Add other images in the same format -->
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
  <a href="/blog/storyboard" class="button left-button">To Storyboard Page</a>
  <a href="/blog/illustration" class="button right-button">To Illustrations Page</a>
</div>

<style>

/* Video container styling */
.video-container {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  background-color: #000; /* Optional: Adds background color */
  margin: 20px auto;
  border: 5px solid #333; /* Light border around the video */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Soft shadow for depth */
  overflow: hidden; /* Ensures rounded corners aren't cut off */
}

/* Video styling */
.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video fills the container */
  pointer-events: auto; /* Allow interaction with the video */
}

/* Prevent downloading the video */
video::-webkit-media-controls-download-button {
  display: none; /* Hides the download button in Chrome */
}

video::-moz-media-controls-download-button {
  display: none; /* Hides the download button in Firefox */
}

/* Optional: Add play button overlay */
.video-container::before {
  content: '\f04b'; /* Unicode for play icon */
  font-family: 'FontAwesome'; /* Use FontAwesome for icon */
  font-size: 50px;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none; /* Disable interaction with the overlay */
}

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
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;
}

@media (max-width: 768px) {
  .gallery-container {
    grid-template-columns: 1fr;
  }
}

.image-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-out;
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
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


/* Responsive Layout for Mobile */
@media (max-width: 768px) {
  /* Ensure modal content and description are centered */
  .modal-content {
    max-width: 90%; /* Ensure it doesn't overflow on mobile */
    max-height: 90%; /* Adjust the max height to fit better on small screens */
    transform: translateX(0); /* Remove horizontal translation */
  }

  .modal-caption {
    width: 100%; /* Ensure the description takes the full width */
    transform: translateY(20px); /* Adjust vertical position */
    margin-top: 20px; /* Adjust spacing between the image and description */
	transform: translateX(-50%);
  }
}

@media (max-width: 480px) {
  .modal-caption h3 {
    font-size: 18px; /* Smaller title size for small screens */
  }

  .modal-caption p {
    font-size: 14px; /* Smaller text for description */
  }
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
