let zoomed = false;
let clickCount = 0;



function zoomPhoto() {

  const photo = document.getElementById('photo');
  const button = document.getElementById('zoomButton');
  const counter = document.getElementById('counter');

  if (!zoomed) {
    clickCount += 0.5;
    button.textContent = 'два';
    zoomIn(photo);
    playSound('audio1');
  } else {
    clickCount += 0.5;
    button.textContent = 'рас';
    zoomOut(photo);
    playSound('audio2');
  }

  counter.textContent = clickCount;

}

function zoomIn(element) {
  let scale = 1;
  const step = 0.05;
  const targetScale = 1.5;

  const zoomInterval = setInterval(() => {
    if (scale < targetScale) {
      scale += step;
      element.style.transform = `scale(${scale})`;
    } else {
      clearInterval(zoomInterval);
      zoomed = true;
    }
  }, 10);
}

function zoomOut(element) {
  let scale = 1.5;
  const step = 0.05;
  const targetScale = 1;

  const zoomInterval = setInterval(() => {
    if (scale > targetScale) {
      scale -= step;
      element.style.transform = `scale(${scale})`;
    } else {
      clearInterval(zoomInterval);
      zoomed = false;
    }
  }, 10);
}


function playSound(id) {
  const audio = document.getElementById(id);
  audio.play();
}