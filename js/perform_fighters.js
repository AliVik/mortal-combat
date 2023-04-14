const chosenFighterWrapper = document.querySelector('.fighters-perfomance-wrapper__left');
const chosenOpponentWrapper = document.querySelector('.fighters-perfomance-wrapper__right');
const chosenFighter = sessionStorage.getItem('chosenFighter');
const chosenOpponent = sessionStorage.getItem('chosenOpponent');
const characteristicsIcon = {
  combo: '../images/combo.png',
  fightstyle: '../images/fightstyle.png',
  health: '../images/health.png',
  protection: '../images/protection.png',
  speed: '../images/speed.png',
  stamina: '../images/stamina.png',
};

let index = 0;
let timeout;

document.addEventListener('DOMContentLoaded', function () {
  chosenFighterWrapper.innerHTML = `<img src="${chosenFighter}" class="fighters-perfomance-wrapper__item" alt="fighter">`;
  chosenOpponentWrapper.innerHTML = `<img src="${chosenOpponent}" class="fighters-perfomance-wrapper__item" alt="fighter">`;

  anime({
    targets: '.fighters-perfomance-wrapper__item',
    scale: 2,
    duration: 2000,
  });

  timeout = setTimeout(() => (window.location.href = '../end.html'), 4000);
});

document.addEventListener('keydown', onQwertyContoller);
document.addEventListener('keydown', resetTimer);

function onQwertyContoller(e) {
  const { src, capture } = onPictureChange();
  console.log(src, capture);
  console.log(e.keyCode);

  switch (e.keyCode) {
    case 81:
      document.getElementById(
        '1',
      ).innerHTML = `<img src="${src}" class="characteristics-panel__item__img" alt="characteristics">
                    <figcaption class="characteristics-panel__item__figcapture">${capture}</figcaption>`;
      break;
    case 87:
      document.getElementById(
        '2',
      ).innerHTML = `<img src="${src}" class="characteristics-panel__item__img" alt="characteristics">
                  <figcaption class="characteristics-panel__item__figcapture">${capture}</figcaption>`;
      break;
    case 69:
      document.getElementById(
        '3',
      ).innerHTML = `<img src="${src}" class="characteristics-panel__item__img" alt="characteristics">
                  <figcaption class="characteristics-panel__item__figcapture">${capture}</figcaption>`;
      break;
    case 82:
      document.getElementById(
        '4',
      ).innerHTML = `<img src="${src}" class="characteristics-panel__item__img" alt="characteristics">
                  <figcaption class="characteristics-panel__item__figcapture">${capture}</figcaption>`;
      break;
    case 84:
      document.getElementById(
        '5',
      ).innerHTML = `<img src="${src}" class="characteristics-panel__item__img" alt="characteristics">
                  <figcaption class="characteristics-panel__item__figcapture">${capture}</figcaption>`;
      break;
    case 89:
      document.getElementById(
        '6',
      ).innerHTML = `<img src="${src}" class="characteristics-panel__item__img" alt="characteristics">
                  <figcaption class="characteristics-panel__item__figcapture">${capture}</figcaption>`;
      break;
  }
}

function onPictureChange() {
  const pictureArr = Object.values(characteristicsIcon);

  index === pictureArr.length - 1 ? (index = 0) : (index += 1);

  let pictureCapture = pictureArr[index].replace(/^(\.\.\/images\/)|(\.png)$/g, '');

  switch (pictureCapture) {
    case 'fightstyle':
      pictureCapture = 'Боевой стиль';
      break;
    case 'health':
      pictureCapture = 'Здоровье';
      break;
    case 'protection':
      pictureCapture = 'Защита';
      break;
    case 'speed':
      pictureCapture = 'Скорость';
      break;
    case 'stamina':
      pictureCapture = 'Выносливость';
      break;
    case 'combo':
      pictureCapture = 'Комбо удары';
      break;
  }
  return { src: pictureArr[index], capture: pictureCapture };
}

function resetTimer() {
  clearTimeout(timeout);
  timeout = setTimeout(() => (window.location.href = '../end.html'), 4000);
}
