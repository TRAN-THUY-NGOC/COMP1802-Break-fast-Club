var bg = [
  './assets/images/bg1.png',
  './assets/images/bg2.jpg',
];
var audioSources = [
      './assets/Music/Nhạc tết.mp3',
      './assets/Music/Babysharkdododo.mp3',
    ];
      document.querySelector("#bg1").addEventListener("click", function () {
      document.querySelector("#background_image img").src = bg[0];
});
      document.querySelector("#bg2").addEventListener("click", function () {
      document.querySelector("#background_image img").src = bg[1];
});
      document.querySelector("#nhac1").addEventListener("click", function () {
      document.querySelector("#audio source").src = audioSources[0];
      document.querySelector("#audio").load();
      document.querySelector("#audio").play();
});
      document.querySelector("#nhac2").addEventListener("click", function () {
      document.querySelector("#audio source").src = audioSources[1];
      document.querySelector("#audio").load(); 
      document.querySelector("#audio").play();
});

