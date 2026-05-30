import Lenis from 'lenis'

const lenis = new Lenis({
  duration: 1.2,
  smooth: true
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const videos = [
    "./src/assets/videos/Elaris-Interior Design Template For Framer (1).mp4",
    "./src/assets/videos/Elaris-Interior Design Template For Framer (2).mp4",
    "./src/assets/videos/Elaris-Interior Design Template For Framer (3).mp4"
];

const player = document.getElementById("videoplayer");
let current = 0;

player.src = videos[current];

player.addEventListener("ended", () => {
    current = (current + 1) % videos.length; // loops through array
    player.src = videos[current];
    player.play();
});