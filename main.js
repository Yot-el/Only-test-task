const closeAnimationDuration = 1000;

const closeAllButtons = () => {
  const openedButtons = document.querySelectorAll('.button--opened');
  openedButtons.forEach((button) => {
    closeButton(button);
  })
}

const closeButton = (button) => {
  button.classList.remove('button--opened');
  playCloseAnimation(button);
}

const playCloseAnimation = (button) => {
  button.classList.add('button--closed');
  setTimeout(() => {
    button.classList.remove('button--closed');
  }, closeAnimationDuration)
}

const openButton = (button) => {
  button.classList.add('button--opened');
}

const documentClickHandler = (evt) => {
  const button = evt.target.closest('.map__button');

  if (!button) {
    closeAllButtons();
    return;
  }

  if (button.classList.contains('button--opened')) {
    closeButton(button);
    return;
  }

  openButton(button);
}

document.addEventListener('click', documentClickHandler);
