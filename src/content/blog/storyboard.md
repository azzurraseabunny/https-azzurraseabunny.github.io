---
title: 'Storyboard'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 10 2022'
heroImage: '/portfolio/storyboarding/thebigfight.gif'
---

## Azure Wasteland Concept (Clip Studio Paint)

This is an animatic of one of my story, Azure Wasteland!
it was great experimenting with shots and angles for the first time!

Sound Design is also made by me!

<div class="video-container">
  <video controls>
    <source src="/portfolio/storyboarding/azurewasteland.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<hr class="custom-line">

## Whiplash (Clip Studio Paint)

Tried animating a move my dnd character has :0

<div class="image-container">
  <img src="/portfolio/storyboarding/thebigfight.gif" alt="Description of image" />
</div>

<hr class="custom-line">

## The Saint (Clip Studio Paint)
<div class="image-container">
  <img src="/portfolio/storyboarding/saint.png" alt="Description of image" />
</div>

<hr class="custom-line">

## Terror In The City (Blender)

This is an animatic of one of my stories, Seraphic Monolith!<br>
this particular sequence includes more fast-paced shots! I never really took the time to find reference videos for this but<br>
I'd say it turned out okay for someone that just started making animatics on blender! :0<br><br>
I'm still sure that i can do better with reference videos

<div class="video-container">
  <video controls>
    <source src="/portfolio/storyboarding/temp.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<hr class="custom-line">

<div class="button-container">
  <a href="/" class="button left-button">To About Page</a>
  <a href="/blog/animation" class="button right-button">To Animation Page</a>
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

.custom-line {
    border: 0;
    height: 6px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));
    margin: 40px ;
}

/* Slider container */
.slider-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 20px auto;
  background-color: #f5f5f5;
}

/* Slider itself, setting up horizontal scrolling */
.slider {
  display: flex;
  transition: transform 0.5s ease;
  scroll-snap-type: x mandatory; /* Enable snapping */
  scroll-padding: 0 10px; /* Optional padding for snapping effect */
  width: max-content;
  overflow-x: scroll; /* Allow horizontal scrolling */
  scrollbar-width: none; /* Hide the scrollbar in Firefox */
}

.slider::-webkit-scrollbar {
  display: none; /* Hide the scrollbar in Chrome/Safari */
}

/* Individual images in the slider */
.slider img {
  width: 2%; /* Adjust this to control the image size */
  height: auto;
  flex-shrink: 0; /* Prevent images from shrinking */
  scroll-snap-align: center; /* Snapping at the center of the image */
  object-fit: cover; /* Maintain aspect ratio of images */
}

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

<style/>

<script>
  const slider = document.querySelector('.slider');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  // Function to scroll to the next image
  nextButton.addEventListener('click', () => {
    slider.scrollBy({
      left: slider.offsetWidth, // Scroll by the width of the container
      behavior: 'smooth' // Smooth scroll
    });
  });

  // Function to scroll to the previous image
  prevButton.addEventListener('click', () => {
    slider.scrollBy({
      left: -slider.offsetWidth, // Scroll backward by the width of the container
      behavior: 'smooth' // Smooth scroll
    });
  });
</script>