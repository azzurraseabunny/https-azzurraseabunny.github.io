---
title: 'Animation'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 09 2022'
heroImage: '/portfolio/animation/duckass.gif'
---
<hr class="custom-line">

<div class="gallery-container">
  <div class="image-container">
    <img src="/portfolio/animation/so-much-scavs.gif" alt="Scavengers (Adobe Animate)" />
    <div class="overlay">
      <h3>Scavengers</h3>
      <p>Adobe Animate</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/animation/ball.gif" alt="Bouncing Ball (Toon Boom)" />
    <div class="overlay">
      <h3>Bouncing Ball</h3>
      <p>Toon Boom</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/animation/disney hopefully.gif" alt="Anticipation (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Anticipation</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/animation/duckass.gif" alt="Clean Up & Inbetweens (Toon Boom)" />
    <div class="overlay">
      <h3>Clean Up & Inbetweens</h3>
      <p>Toon Boom</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/animation/RUNNINGMAN.gif" alt="Run Cycle (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Run Cycle</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/animation/SACK.gif" alt="Sack Animation (Clip Studio Paint)" />
    <div class="overlay">
      <h3>Sack Animation</h3>
      <p>Clip Studio Paint</p>
    </div>
  </div>

  <div class="image-container">
    <img src="/portfolio/animation/slowinslowout.gif" alt="Slow In Slow Out (Toon Boom)" />
    <div class="overlay">
      <h3>Slow In Slow Out</h3>
      <p>Toon Boom</p>
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
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 20px; /* Space between grid items */
  justify-items: center;
 
/* Single-column layout for mobile */
@media (max-width: 768px) {
  .gallery-container {
    grid-template-columns: 1fr; /* Single column for screens smaller than 768px */
  }
}

.image-container {
  position: relative;
  width: 100%; /* Full width within the grid */
  max-width: 400px; /* Limit maximum width for better visuals */
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