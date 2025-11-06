function onToggle(event) {
  // Проверяем, что event существует
  if (!event || !event.target) {
    return;
  }

  if (event.target.open) {
    document.querySelectorAll(".questions__card > details[open]").forEach((el) => {
      if (el === event.target) {
        return;
      }
      el.open = false;
    });
  }
}

// Вешаем обработчики только на существующие элементы
const detailsElements = document.querySelectorAll(".questions__card > details");
if (detailsElements.length > 0) {
  detailsElements.forEach((el) => el.addEventListener("toggle", onToggle));
}

export default onToggle;