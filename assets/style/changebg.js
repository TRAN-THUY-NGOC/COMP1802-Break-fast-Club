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
    
    function changeMusic(src) {
      const audioSource = document.getElementById('audioSource');
      console.log('Changing music to:', src);
      audioSource.src = src;
      document.getElementById('audio').load();
    }
