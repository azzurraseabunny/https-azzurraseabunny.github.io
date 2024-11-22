---
title: 'Illustrations'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/portfolio/illustration/covering.png'
---


<hr class="custom-line">

<div class="gallery-container">
  <div class="image-container">
    <img src="/portfolio/illustration/pebblesempty.png" alt="Random Gods (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Random Gods</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/bgtyhiunhg.png" alt="Wreckage (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Wreckage</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/agggggg.jpg" alt="Aggie (Adobe Fresco)" />
    <div class="overlay">
      <h3>Aggie</h3>
      <p>Adobe Fresco</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/personas.png" alt="Persona (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Persona</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/bee_pfp.png" alt="Bee Honeydew (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Bee Honeydew</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/fluttrerbee.png" alt="Flutterbee (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Flutterbee</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/hopskotch.png" alt="Hopskotch (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Hopskotch</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/image.png" alt="Heavy (Adobe Fresco)" />
    <div class="overlay">
      <h3>Heavy</h3>
      <p>Adobe Fresco</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/Zurra The Sea Bunny Reference.png" alt="Zurra Reference (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Zurra Reference</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/illustration/zurstretch.png" alt="Zurra Stretch (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Zurra Stretch</h3>
      <p>Clip Studio Paint</p>
    </div>
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