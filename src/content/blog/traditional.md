---
title: 'Traditional'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 06 2022'
heroImage: '/portfolio/traditional/covering.png'
---

<hr class="custom-line">

<div class="gallery-container">
  <div class="image-container">
    <img src="/portfolio/traditional/dancingladies.jpg" alt="Dancing Ladies (Watercolor, Color Pencil, Pen and Ink)" />
    <div class="overlay">
      <h3>Dancing Ladies</h3>
      <p>Watercolor, Color Pencil, Pen and Ink</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/traditional/hause.jpg" alt="House (Pen and Ink)" />
    <div class="overlay">
      <h3>House</h3>
      <p>Pen and Ink</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/traditional/venus.png" alt="Aggie (Adobe Fresco)" />
    <div class="overlay">
      <h3>Venus</h3>
      <p>Graphite</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/traditional/bitsandbones.jpg" alt="Persona (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Bits and Bones</h3>
      <p>Mixed Media</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/traditional/marg.jpg" alt="Bee Honeydew (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Markiplier</h3>
      <p>Charcoal</p>
    </div>
  </div>


<hr class="custom-line">


<style>
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

/* Single-column layout for mobile */
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

</style>