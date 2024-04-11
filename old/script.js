let zoomed = false;
let clickCount = 0;
let isButtonDisabled = false;
let lastClickTime = 0;

function zoomPhoto() {
  const currentTime = new Date().getTime();
  const elapsed = currentTime - lastClickTime;

  if (elapsed < 1000 / 6) { // Проверяем, прошло ли менее 1/6 секунды с предыдущего нажатия
    alert("Ты умер(ла) от разрыва перенапряженной жопы");
    location.reload(); // Обновляем страницу
    return;
  }

  lastClickTime = currentTime;

  const photo = document.getElementById('photo');
  const button = document.getElementById('zoomButton');
  const counter = document.getElementById('counter');

  if (!zoomed) {
    clickCount++;
    button.textContent = 'два';
    zoomIn(photo);
    playSound('audio1');
  } else {
    clickCount++;
    button.textContent = 'рас';
    zoomOut(photo);
    playSound('audio2');
  }

  counter.textContent = clickCount;

  // Запускаем таймер, чтобы блокировать кнопку на 1 секунду
  //button.disabled = true;
  setTimeout(() => {
    button.disabled = false;
  }, 1000);
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