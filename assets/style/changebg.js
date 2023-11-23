var bg = [
      './assets/images/bg1.png',
      './assets/images/bg2.jpg',
    ];
    let currentBgIndex = 0;
    
    function changeBackground(index) {
      currentBgIndex = index;
      console.log('Changing background to index:', index);
      document.getElementById('backgroundImage').src = bg[currentBgIndex];
    }
    
    function toggleSettings() {
      const backgroundOptions = document.getElementById('backgroundOptions');
      const displayStyle = getComputedStyle(backgroundOptions).display;
      console.log('Toggle settings. Current display style:', displayStyle);
      if (displayStyle === 'none') {
        backgroundOptions.style.display = 'block';
      } else {
        backgroundOptions.style.display = 'none';
      }
    }
    function toggleMusic() {
      var musicOptions = document.getElementById("musicOptions");
      if (musicOptions.style.display === "none") {
          musicOptions.style.display = "block";
      } else {
          musicOptions.style.display = "none";
      }
  }

  function playMusic(source) {
      var audioSource = document.getElementById("audioSource");
      audioSource.src = source; 
      var audio = document.getElementById("audio");
      audio.load();
      audio.play();
  }
