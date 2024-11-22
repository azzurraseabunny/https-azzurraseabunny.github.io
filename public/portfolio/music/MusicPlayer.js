export class MusicPlayer {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.audioSrc = options.audioSrc || '/portfolio/music/starstruck.mp3';
    this.discSrc = options.discSrc || '/portfolio/music/disc.png';
    this.title = options.title || 'Now Playing';
    this.init();
  }

  init() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.container.innerHTML = `
      <div class="player-container">
        <div class="disc-container">
          <img class="disc" src="${this.discSrc}" alt="Rotating Disc">
        </div>
        <div class="player">
          <div class="player-title">${this.title}</div>
          <audio id="audio" src="${this.audioSrc}" preload="auto"></audio>
          <div class="controls">
            <button id="play-pause" class="control-button">▶️</button>
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
    `;
  }

  setupEventListeners() {
    const audio = this.container.querySelector('#audio');
    const playPauseButton = this.container.querySelector('#play-pause');
    const disc = this.container.querySelector('.disc');
    const progressBar = this.container.querySelector('#progress-bar');
    const volumeControl = this.container.querySelector('#volume');
    const volumeIcon = this.container.querySelector('#volume-icon');

    const updateProgress = () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.value = progress || 0;
    };

    const updateVolume = () => {
      audio.volume = volumeControl.value / 100;
      if (audio.volume === 0) volumeIcon.textContent = '🔇';
      else if (audio.volume <= 0.5) volumeIcon.textContent = '🔈';
      else volumeIcon.textContent = '🔊';
    };

    playPauseButton.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playPauseButton.textContent = '⏸️';
        disc.classList.add('playing');
      } else {
        audio.pause();
        playPauseButton.textContent = '▶️';
        disc.classList.remove('playing');
      }
    });

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', () => {
      playPauseButton.textContent = '▶️';
      disc.classList.remove('playing');
    });

    progressBar.addEventListener('input', () => {
      const seekTime = (progressBar.value / 100) * audio.duration;
      audio.currentTime = seekTime;
    });

    volumeControl.addEventListener('input', updateVolume);
  }
}

// Usage Example
document.addEventListener('DOMContentLoaded', () => {
  new MusicPlayer('music-player-container', {
    audioSrc: '/portfolio/music/starstruck.mp3',
    discSrc: '/portfolio/music/disc.png',
    title: 'Starstruck',
  });
});
