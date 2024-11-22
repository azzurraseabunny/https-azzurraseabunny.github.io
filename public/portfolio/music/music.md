---
title: 'Music'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 04 2022'
heroImage: '/portfolio/music/covering.png'
---
# this is a work in progress!!
you can find me on soundcloud with redacted!<br>
you dont know how hard it is making a custom music player...<br>
while waiting, you can listen to these tracks i made!

<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Music Player Example</title>
  <link rel="stylesheet" href="/src/components/MusicPlayer.css">
</head>
<body>

  <!-- Music Player Instances -->
  <div id="music-player-1"></div><br>
  <div id="music-player-2"></div><br>
  <div id="music-player-3"></div><br>
  <div id="music-player-4"></div><br>
  <div id="music-player-5"></div><br>
  <div id="music-player-6"></div><br>
  <div id="music-player-7"></div><br>
  

  <script type="module" src="/src/components/MusicPlayer.js"></script>
  <script type="module">
    import { MusicPlayer } from '/src/components/MusicPlayer.js';

    // Initialize multiple instances of the MusicPlayer
    document.addEventListener('DOMContentLoaded', () => {
      new MusicPlayer('music-player-1', {
        audioSrc: '../portfolio/music/1.mp3',
        discSrc: '../portfolio/music/disc.png',
        title: '1',
      });

      new MusicPlayer('music-player-2', {
        audioSrc: '../portfolio/music/2.ogg',
        discSrc: '../portfolio/music/disc.png',
        title: '2',
      });

      new MusicPlayer('music-player-3', {
        audioSrc: '../portfolio/music/3.ogg',
        discSrc: '../portfolio/music/disc.png',
        title: '3',
      });
	  
	  new MusicPlayer('music-player-4', {
        audioSrc: '../portfolio/music/4.mp3',
        discSrc: '../portfolio/music/disc.png',
        title: '4',
      });
	  
	  new MusicPlayer('music-player-5', {
        audioSrc: '../portfolio/music/5.mp3',
        discSrc: '../portfolio/music/disc.png',
        title: '5',
      });
	  
	  new MusicPlayer('music-player-6', {
        audioSrc: '../portfolio/music/6.mp3',
        discSrc: '../portfolio/music/disc.png',
        title: '6',
      });
	  
	  new MusicPlayer('music-player-7', {
        audioSrc: '../portfolio/music/7.ogg',
        discSrc: '../portfolio/music/disc.png',
        title: '7',
      });
    });
  </script>
</body>
</html>

<style>
    /* Center the music players horizontally */
    .player-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center; /* Centers horizontally */
      gap: 20px; /* Adds space between players */
      margin-top: 50px; /* Add top margin to center vertically */
    }
  </style>