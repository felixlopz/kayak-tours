// CSS
import "../css/main.scss";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import pin from "../assets/pin.png";
import compass from "../assets/compass.png";
import tag from "../assets/tag.png";

// Main
const tours = [
  {
    id: 1,
    name: "Sea kayaking. Espiritu Santo islandv",
    place: "International, Mexico ",
    type: "Sea Kayaking",
    time: "7 days for",
    price: "1000$",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eanumquam similique maxime dolorem totam eligendiquam molestiae sit harum distinctio ipsum doloremque repellendus, exercitationem porro debitis, quos ratione",
    img:
      "https://images.pexels.com/photos/2847862/pexels-photo-2847862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 2,
    name: "Sea kayaking. Espiritu Santo islandv II",
    place: "Lake river, Canada ",
    type: "White Water Kayaking",
    time: "2 days for",
    price: "500$",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eanumquam similique maxime dolorem totam eligendiquam molestiae sit harum distinctio ipsum doloremque repellendus, exercitationem porro debitis, quos ratione",
    img:
      "https://images.pexels.com/photos/461595/pexels-photo-461595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 3,
    name: "Sea kayaking. Espiritu Santo islandv II",
    place: "Lake river, Canada ",
    type: "White Water Kayaking",
    time: "2 days for",
    price: "500$",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eanumquam similique maxime dolorem totam eligendiquam molestiae sit harum distinctio ipsum doloremque repellendus, exercitationem porro debitis, quos ratione",
    img:
      "https://images.pexels.com/photos/1655037/pexels-photo-1655037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
];
const toursListElement = document.querySelector(".tours__list");

function initTours(tours) {
  toursListElement.innerHTML = `${tours.reduce((html, tour, index) => {
    return html + getCardTemplate(tour);
  }, "")}`;
}

function initToursImages(tours) {
  const tourHeaderElements = document.querySelectorAll("[data-id]");
  tourHeaderElements.forEach(element => {
    const tour = tours.find(tour => element.dataset.id == tour.id);
    if (tour) {
      element.style.backgroundImage = `url(${tour.img})`;
    }
  });
}

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

initTours(tours);
initToursImages(tours);
