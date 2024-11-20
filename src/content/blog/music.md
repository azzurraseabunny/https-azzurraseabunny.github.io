---
title: 'Music'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 04 2022'
heroImage: '/blog-placeholder-3.jpg'
---


  <div class="player-container">
    <div class="player">
      <audio id="audio" src="/portfolio/music/starstruck.mp3" preload="auto"></audio>
      <div class="controls">
        <button id="prev" class="control-button">⏮️</button>
        <button id="play-pause" class="control-button">▶️</button>
        <button id="next" class="control-button">⏭️</button>
      </div>
      <div class="progress-bar-container">
        <input type="range" id="progress-bar" value="0" max="100" step="1">
      </div>
      <div class="volume-container">
        <input type="range" id="volume" value="100" max="100" step="1">
        <span id="volume-icon">🔊</span>
      </div>
    </div>
  </div>

  <script src="script.js"></script>

<style>

.player-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  text-align: center;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
}

.control-button {
  background-color: transparent;
  border: none;
  font-size: 24px;
  margin: 0 10px;
  cursor: pointer;
}

.control-button:hover {
  color: #007bff;
}

.progress-bar-container {
  margin-top: 15px;
}

#progress-bar {
  width: 100%;
  cursor: pointer;
}

.volume-container {
  margin-top: 10px;
}

#volume {
  width: 100%;
}

#volume-icon {
  font-size: 20px;
  margin-top: 5px;
}
</style>

<script>
const playPauseButton = document.getElementById('play-pause');
const audio = document.getElementById('audio');
const progressBar = document.getElementById('progress-bar');
const volumeControl = document.getElementById('volume');
const volumeIcon = document.getElementById('volume-icon');

const playPauseHandler = () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = '⏸️'; // Change button to pause
  } else {
    audio.pause();
    playPauseButton.textContent = '▶️'; // Change button to play
  }
};

// Update progress bar as the audio plays
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
});

// Skip to a different part of the audio when the progress bar is clicked
progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

// Change volume and update icon
volumeControl.addEventListener('input', () => {
  audio.volume = volumeControl.value / 100;
  if (audio.volume === 0) {
    volumeIcon.textContent = '🔇';
  } else if (audio.volume > 0 && audio.volume <= 0.5) {
    volumeIcon.textContent = '🔈';
  } else {
    volumeIcon.textContent = '🔊';
  }
});

// Previous and Next buttons (you can add a playlist later)
document.getElementById('prev').addEventListener('click', () => {
  // Add logic for previous track (e.g., update audio source)
  console.log('Previous track');
});

document.getElementById('next').addEventListener('click', () => {
  // Add logic for next track (e.g., update audio source)
  console.log('Next track');
});

// Initialize play/pause functionality
playPauseButton.addEventListener('click', playPauseHandler);
</script>