---
title: '3D Models'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 05 2022'
heroImage: '/portfolio/3d/covering.png'
---

<hr class="custom-line">

<div class="gallery-container">
  <div class="image-container">
    <img src="/portfolio/3d/live.png" alt="Dancing Ladies (Watercolor, Color Pencil, Pen and Ink)" />
    <div class="overlay">
      <h3>Living Room</h3>
      <p>Blender</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/3d/squidcada.gif" alt="House (Pen and Ink)" />
    <div class="overlay">
      <h3>Squidcada</h3>
      <p>Blockbench</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/3d/sofanthiel2.gif" alt="Aggie (Adobe Fresco)" />
    <div class="overlay">
      <h3>Sofantheil</h3>
      <p>Blockbench</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/3d/spider.png" alt="Persona (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Spider</h3>
      <p>Blockbench</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/3d/snail.gif" alt="Bee Honeydew (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Snail</h3>
      <p>Blockbench</p>
    </div>
  </div>
  
  <div class="image-container">
    <img src="/portfolio/3d/worm.png" alt="Bee Honeydew (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Yearn the Worm</h3>
      <p>Blockbench</p>
    </div>
  </div>
  
  <div class="image-container">
    <img src="/portfolio/3d/metropolis3.png" alt="Bee Honeydew (Clip Studio Paint)" />
    <div class="overlay">
      <h3>TBH's Metropolis</h3>
      <p>Blender</p>
    </div>
  </div>
  
  <div class="image-container">
    <img src="/portfolio/3d/fakeleak.png" alt="Bee Honeydew (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Fallen Superstructure</h3>
      <p>Blender</p>
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

</style>