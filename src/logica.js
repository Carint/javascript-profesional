function MediaPlayer(config) {
    this.media = config.el;
  }

  MediaPlayer.prototype.play = function() {
    this.media.play();
  };

  MediaPlayer.prototype.pause = function() {
    this.media.pause();
  };

  MediaPlayer.prototype.togglePlay = function() {
    this.media.paused ? this.play() : this.pause();
  };

  const video = document.querySelector('video');
  const player = new MediaPlayer({ el: video });

  const button = document.querySelector('button');
  button.onclick = () => player.togglePlay();