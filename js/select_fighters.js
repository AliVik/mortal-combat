const fightersItems = document.querySelectorAll('.fighters-list__item');
const spinner = document.querySelector('.lds-ellipsis');
const secondFighterWrapper = document.querySelector('.second-fighter');
const fightImages = {
  fightGimli: '../images/fight_gimli.jpg',
  fightAragorn: '../images/fight-aragorn.jpg',
  fightArwen: '../images/fight-arwen.jpg',
  fightGandalf: '../images/fight-gandalf.jpg',
  fightGollum: '../images/fight-gollum.jpg',
  fightLegolas: '../images/fight-legolas.jpg',
};

document.addEventListener('keydown', onFighterAction);

let index = 0;
let chosenHero = '';

function onFighterAction(e) {
  onFighterArrowContoller(e);

  Swal.fire({
    position: 'top-end',
    icon: 'info',
    title: 'Press Enter to choose your hero',
    showConfirmButton: false,
    timer: 2000,
    toast: true,
    background: 'gold',
    color: 'black',
    width: '300px',
  });

  if (e.key === 'Enter') {
    Swal.close();
    document.removeEventListener('keydown', onFighterAction);
    sessionStorage.setItem('chosenFighter', getChosenHeroSrc(chosenHero));
    spinner.style = 'display: block;';
    setTimeout(() => onOpponentChoice(), 1000);
    setTimeout(() => (window.location.href = '../perfomance.html'), 5000);
  }
}

function onFighterArrowContoller(e) {
  switch (e.key) {
    case 'Tab':
      fightersItems[index].classList.add('active');
      break;
    case 'ArrowRight':
      fightersItems[index].style.border = '';
      fightersItems[index].classList.remove('active');
      fightersItems[index].blur();
      index += 1;

      if (index === fightersItems.length) {
        index = 0;
      }
      break;
    case 'ArrowLeft':
      fightersItems[index].style.border = '';
      fightersItems[index].classList.remove('active');
      index -= 1;

      if (index < 0) {
        index = fightersItems.length - 1;
      }
      break;
    case 'ArrowDown':
      fightersItems[index].style.border = '';
      fightersItems[index].classList.remove('active');
      fightersItems[index].blur();

      index <= 2 ? (index += 3) : (index -= 3);
      break;
    case 'ArrowUp':
      fightersItems[index].style.border = '';
      fightersItems[index].classList.remove('active');
      fightersItems[index].blur();

      index >= fightersItems.length - 3 ? (index -= 3) : (index += 3);
      break;
    case 'Enter':
      fightersItems[index].style.border = '4px solid green';
      chosenHero = fightersItems[index].children[0].getAttribute('name');
      onFightHeroPresentation();
      break;
  }

  fightersItems[index].classList.add('active');
}

function onFightHeroPresentation() {
  const heroWrapper = document.querySelector('.fighters-presentation');

  heroWrapper.innerHTML = '';
  heroWrapper.innerHTML = `<img src="${getChosenHeroSrc(
    chosenHero,
  )}" class="fighters-presentation__img" alt="gandalf">`;
}

function onOpponentChoice() {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  const fightImagesArr = Object.values(fightImages);

  secondFighterWrapper.innerHTML = `<img src="${fightImagesArr[randomNum]}" class="fighters-presentation__img" alt="second fighter">`;
  sessionStorage.setItem('chosenOpponent', fightImagesArr[randomNum]);
  spinner.style = 'display: none;';
}

function getChosenHeroSrc(chosenHero) {
  let src = '';
  switch (chosenHero) {
    case 'gandalf':
      src = `${fightImages.fightGandalf}`;
      break;
    case 'aragorn':
      src = `${fightImages.fightAragorn}`;
      break;
    case 'arwen':
      src = `${fightImages.fightArwen}`;
      break;
    case 'gimli':
      src = `${fightImages.fightGimli}`;
      break;
    case 'legolas':
      src = `${fightImages.fightLegolas}`;
      break;
    case 'gollum':
      src = `${fightImages.fightGollum}`;
      break;
  }
  return src;
}
