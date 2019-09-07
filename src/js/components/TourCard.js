import pin from "../../assets/pin.png";
import compass from "../../assets/compass.png";
import tag from "../../assets/tag.png";

const toursListElement = document.querySelector(".tours__list");

const initTours = function(tours) {
  toursListElement.innerHTML = `${tours.reduce((html, tour) => {
    return html + getCardTemplate(tour);
  }, "")}`;
};
const initToursImages = function(tours) {
  const tourHeaderElements = document.querySelectorAll("[data-id]");
  tourHeaderElements.forEach(element => {
    const tour = tours.find(tour => element.dataset.id == tour.id);
    if (tour) {
      element.style.backgroundImage = `url(${tour.img})`;
    }
  });
};

function getCardTemplate(tour) {
  return `
  <div class="tour-card">
    <div class="tour-card__header" data-id="${tour.id}">
      <p class="tour-card__description">
        ${tour.desc}
      </p>
      <button class="btn btn--light tour-card__header-btn">
        more info
      </button>
    </div>
    <div class="tour-card__body">
      <h3 class="tour-card__name">
        ${tour.name}
      </h3>
      <ul class="tour-card__details">
        <li class="tour-card__item">
          <div class="tour-card__icon-box">
            <img src="${pin}" alt="pin" />
          </div>
          <p class="tour-card__item-description">
            ${tour.place}
          </p>
        </li>
        <li class="tour-card__item">
          <div class="tour-card__icon-box">
            <img src="${compass}" alt="pin" />
          </div>
          <p class="tour-card__item-description">
            ${tour.type}
          </p>
        </li>
        <li class="tour-card__item">
          <div class="tour-card__icon-box">
            <img src="${tag}" alt="pin" />
          </div>
          <p class="tour-card__item-description">
            ${tour.time} <span class="tour-card__price">${tour.price}</span>
          </p>
        </li>
      </ul>
      <button class="btn btn--dark tour-card__body-btn">
        more info
      </button>
    </div>
  </div>
`;
}

export default {
  initTours,
  initToursImages
};
