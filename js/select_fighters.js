const fightersList = document.querySelector('.fighters-list');
const fightersItems = document.querySelectorAll('.fighters-list__item');

document.addEventListener('keydown', onFighterAction);

let index = 0;

function onFighterAction(e) {
  switch (e.keyCode) {
    case 9:
      fightersItems[index].classList.add('active');
      break;
    case 39:
      fightersItems[index].classList.remove('active');
      fightersItems[index].blur();
      index += 1;

      if (index === fightersItems.length) {
        index = 0;
      }
      break;
    case 37:
      fightersItems[index].classList.remove('active');
      index -= 1;

      if (index < 0) {
        index = fightersItems.length - 1;
      }
      break;
    case 38:
      fightersItems[index].classList.remove('active');
      fightersItems[index].blur();

      index <= 2 ? (index += 3) : (index -= 3);
      break;
    case 40:
      fightersItems[index].classList.remove('active');
      fightersItems[index].blur();

      index >= fightersItems.length - 3 ? (index -= 3) : (index += 3);
      break;
    case 13:
      fightersItems[index].style.border = '4px solid green';
      break;
  }

  fightersItems[index].classList.add('active');
}
