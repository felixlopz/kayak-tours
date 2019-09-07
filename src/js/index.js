// CSS
import "../css/main.scss";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "../assets/favicon.png";

//Components
import ToursCard from "./components/TourCard";

// Observer
import "./observer";

// Main
const state = {
  tours: [
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
  ]
};

ToursCard.initTours(state.tours);
ToursCard.initToursImages(state.tours);
document.body.style.opacity = 1;
