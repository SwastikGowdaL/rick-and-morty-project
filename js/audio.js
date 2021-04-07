
this.sound = new Audio();
this.sound.src = 'theme-song.mp3';
this.sound.load();
this.sound.autoplay = true;
this.sound.play()
  .then(() => {
    // Audio is playing.
  })
  .catch(error => {
    console.log(error);
  });



setTimeout(() => {
  document.getElementById('levitate').style.animation =
    'do-levitation 1.2s alternate ease-in-out infinite';
}, 5000);
