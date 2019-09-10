// Navbar on desktop change colors when is off header
const headerElement = document.querySelector(".header");
const heroTextElement = document.querySelector(".hero__text");
const footerNavElement = document.querySelector(".nav--footer");

const heroTextObserver = new IntersectionObserver(
  (entries, heroTextObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        // white header
        headerElement.classList.add("header--scrolled");
      } else {
        // transparent header
        headerElement.classList.remove("header--scrolled");
      }
    });
  },
  {
    rootMargin: "-200px 0px 0px 0px"
  }
);

const footerNavObserver = new IntersectionObserver(
  (entries, footerObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        headerElement.style.opacity = 1;
        headerElement.style.visibility = "visible";
      } else {
        headerElement.style.opacity = 0;
        headerElement.style.visibility = "hidden";
      }
    });
  },
  { rootMargin: "0px 0px -50px 0px" }
);

heroTextObserver.observe(heroTextElement);
footerNavObserver.observe(footerNavElement);
