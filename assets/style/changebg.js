var bg = [
      './assets/images/bg1.png',
      './assets/images/bg2.jpg',
  ];
  
  let currentBgIndex = 0;
  
  function changeBackground(index) {
      currentBgIndex = index;
      document.getElementById('backgroundImage').src = bg[currentBgIndex];
  }
  
  function toggleSettings() {
      const backgroundOptions = document.getElementById('backgroundOptions');
      const displayStyle = getComputedStyle(backgroundOptions).display;
  
      if (displayStyle === "none") {
          backgroundOptions.style.display = "block";
      } else {
          backgroundOptions.style.display = "none";
      }
  }
  
  function changeMusic(src) {
      const audioSource = document.getElementById('audioSource');
      audioSource.src = src;
      document.getElementById('audio').load();
  }
  
