document.addEventListener('DOMContentLoaded', () => {
  const cardsContainer = document.querySelector('.cards');
  const copyButton = document.querySelector('.js-copy-button');
  const editButton = document.querySelector('.js-edit-button');
  const textButton = document.querySelector('.js-text-button');

  if (!copyButton || !cardsContainer || !editButton || !textButton) {
    return;
  }

  copyButton.addEventListener('click', () => {
    const cards = cardsContainer.querySelectorAll('.card-wrapper');
    const cardTemplate = cards[cards.length - 1].cloneNode(true);
    cardsContainer.append(cardTemplate);
  });

  editButton.addEventListener('click', () => {
    const editableElements = cardsContainer.querySelectorAll('.js-editable');
    editableElements.forEach((item) => {
      if (!item.hasAttribute("contenteditable")) {
        item.setAttribute("contenteditable", "true");
      } else {
        item.removeAttribute("contenteditable");
      }
    })

    if (editButton.value === 'edit') {
      editableElements[0].focus();
      editButton.innerHTML = "Закончить редактирование";
      editButton.value = 'editable';
    } else {
      editButton.innerHTML = "Редактировать карточки";
      editButton.value = 'edit';
    }
  });

  textButton.addEventListener('click', () => {
    const block = document.querySelector('.card__content');
    const descriptions = cardsContainer.querySelectorAll('.card__content-description');
    const heightBlock = block.offsetHeight;

    descriptions.forEach((text) => {
      let fontSize = 16; // Начальный размер шрифта

      while (text.offsetHeight > heightBlock && fontSize > 1) {
        fontSize--;
        text.style.fontSize = fontSize + 'px';
      }

      if (fontSize <= 1) {
        text.style.fontSize = '1px';
      }
    });
  });
});