'use strict';
(function () {
  const PIN_OFFSET_Y = 84;
  const PIN_OFFSET_X = 31;
  const announcementPins = document.querySelector(`.map__pins`);
  const advertTask = document.querySelector(`#pin`).content;
  const advertTemplate = advertTask.querySelector(`.map__pin`);
  const renderPin = (pins) => {
    const coordinateLeft = pins.location.x + PIN_OFFSET_X;
    const coordinateTop = pins.location.y + PIN_OFFSET_Y;
    let pinElement = advertTemplate.cloneNode(true);
    pinElement.style = `left: ${coordinateLeft}px; top: ${coordinateTop}px;`;
    pinElement.querySelector(`img`).src = pins.avatar;
    pinElement.querySelector(`img`).alt = pins.title;

    return pinElement;
  };

  const renderPins = (pins) => {
    const fragment = document.createElement(`div`);
    fragment.classList.add(`pins`);
    for (let i = 0; i < pins.length; i++) {
      fragment.appendChild(renderPin(pins[i]));
    }
    announcementPins.appendChild(fragment);
  };
  window.renderPins = renderPins;
})();