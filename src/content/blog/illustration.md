---
title: 'Illustrations'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/portfolio/illustration/covering.png'
---

<!-- Gallery Container -->
<div class="gallery-container">

  <div class="image-container">
    <img src="/portfolio/illustration/pebblesempty.png"  class="clickable-image" data-title="Random Gods" data-description="Clip Studio Paint" />
    <div class="overlay">
      <h3>Random Gods</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/bgtyhiunhg.png"  class="clickable-image" data-title="Wreckage" data-description="Clip Studio Paint" />
    <div class="overlay">
      <h3>Wreckage</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/agggggg.jpg"  class="clickable-image" data-title="Aggie" data-description="Adobe Fresco" />
    <div class="overlay">
      <h3>Aggie</h3>
      <p>Adobe Fresco</p>
    </div>
  </div>
  
  <div class="image-container">
    <img src="/portfolio/illustration/eepy.png"  class="clickable-image" data-title="Hibernate" data-description="Clip Studio Paint" />
    <div class="overlay">
      <h3>Hibernate</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/personas.png"  class="clickable-image" data-title="Persona" data-description="Clip Studio Paint" />
    <div class="overlay">
      <h3>Persona</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/bee_pfp.png"  class="clickable-image" data-title="Bee Honeydew" data-description="Clip Studio Paint" />
    <div class="overlay">
      <h3>Bee Honeydew</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>
  
  <div class="image-container">
    <img src="/portfolio/illustration/kura.png"  class="clickable-image" data-title="Bee Honeydew" data-description="Clip Studio Paint" />
    <div class="overlay">
      <h3>Kura the Shulk</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>
  
  <div class="image-container">
    <img src="/portfolio/illustration/ancientbg.png"  class="clickable-image" data-title="Ancient" data-description="Clip Studio Paint" />
    <div class="overlay">
      <h3>Ancient</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/fluttrerbee.png"  class="clickable-image" data-title="Flutterbee" data-description="Clip Studio Paint" />
    <div class="overlay">
      <h3>Flutterbee</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/hopskotch.png" class="clickable-image" data-title="Hopskotch" data-description="Clip Studio Paint" />
    <div class="overlay">
      <h3>Hopskotch</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/image.png"  class="clickable-image" data-title="Heavy" data-description="Adobe Fresco" />
    <div class="overlay">
      <h3>Heavy</h3>
      <p>Adobe Fresco</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/Zurra The Sea Bunny Reference.png"  class="clickable-image" data-title="Zurra Reference" data-description="Clip Studio Paint" />
    <div class="overlay">
      <h3>Zurra Reference</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/zurstretch.png"  class="clickable-image" data-title="Zurra Stretch" data-description="Clip Studio Paint" />
    <div class="overlay">
      <h3>Zurra Stretch</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>
</div>

<div id="image-modal" class="modal">
  <span class="close" id="close-modal">&times;</span>
  <img class="modal-content" id="modal-img" />
  <div class="modal-description">
    <h3 id="modal-title"></h3>
    <p id="modal-description-text"></p>
  </div>
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
  z-index: 100;
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
  max-width: 70%;
  max-height: 70%;
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

.modal-description {
  color: white;
  text-align: center;
  margin-top: 20px;
  transform: translateX(-80%);
}

.modal-description h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.modal-description p {
  font-size: 16px;
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

/* Modal Styling */
.modal {
  display: none;
  position: fixed;
  z-index: 10;
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

/* Modal Content */
.modal-content {
  max-width: 70%;
  max-height: 70%;
  margin: auto;
  display: block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transform: none; /* Removed translateX */
  position: relative; /* Ensures positioning relative to the parent container */
  display: flex; /* Enables flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 10px; /* Optional: adds padding around the content */
}

/* Modal Description */
.modal-description {
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

  .modal-description {
    width: 100%; /* Ensure the description takes the full width */
    transform: translateY(20px); /* Adjust vertical position */
    margin-top: 20px; /* Adjust spacing between the image and description */
	transform: translateX(-50%);
  }
}

@media (max-width: 480px) {
  .modal-description h3 {
    font-size: 18px; /* Smaller title size for small screens */
  }

  .modal-description p {
    font-size: 14px; /* Smaller text for description */
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