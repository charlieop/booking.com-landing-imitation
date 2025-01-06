window.addEventListener("DOMContentLoaded", init);

function init() {
  initDestinationsTabs();
  initScrollers();
  initDateSelect();

  if (!'loading' in HTMLImageElement.prototype) {
    console.log('Browser does not support lazy-loading for images.');
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.src = "";
    });
  }

  document.addEventListener("click", (e) => {
    const dateSelect = document.querySelector("#select-date");
    if (!dateSelect.contains(e.target)) {
      dateSelect.querySelector(".date-selector").style.display = "none";
    } else {
      dateSelect.querySelector(".date-selector").style.display = "block";
    }
  });
}

function initDateSelect() {
  const dateSelect = document.querySelector("#select-date");
  const monthYearDisplay = dateSelect.querySelector(".month-picker span");
  const datePicker = dateSelect.querySelector(".date-picker");
  const placeholders = datePicker.querySelectorAll(
    ".date-picker .date .placeholder"
  );
  const dates = datePicker.querySelectorAll(".date-picker .date .date-item");
  const dateDisplay = dateSelect.querySelector(".date-display");
  let date = new Date();
  let currentSelectedDate = new Date(date.getTime());

  monthYearDisplay.textContent = date.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });
  dates[currentSelectedDate.getDate() - 1].classList.add("selected");

  const numPlaceholderToShow = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  for (let i = 0; i < numPlaceholderToShow; i++) {
    placeholders[i].classList.remove("hide");
  }

  const numDaysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  for (let i = numDaysInMonth - 1; i < 31; i++) {
    dates[i].classList.add("hide");
  }

  // const input = dateSelect.querySelector("input");
  // input.value = date.toISOString().split("T")[0];

  dateSelect.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      if (e.target.classList.contains("prev")) {
        date.setMonth(date.getMonth() - 1);
      } else {
        date.setMonth(date.getMonth() + 1);
      }

      monthYearDisplay.textContent = date.toLocaleString("default", {
        month: "short",
        year: "numeric",
      });

      const numPlaceholderToShow = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
      ).getDay();
      placeholders.forEach((placeholder) => placeholder.classList.add("hide"));
      dates.forEach((date) => date.classList.remove("hide"));
      for (let i = 0; i < numPlaceholderToShow; i++) {
        placeholders[i].classList.remove("hide");
      }
      const numDaysInMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDate();
      for (let i = numDaysInMonth; i < 31; i++) {
        dates[i].classList.add("hide");
      }

      if (
        date.getMonth() === currentSelectedDate.getMonth() &&
        date.getFullYear() === currentSelectedDate.getFullYear()
      ) {
        dates[currentSelectedDate.getDate() - 1].classList.add("selected");
      } else {
        dates[currentSelectedDate.getDate() - 1].classList.remove("selected");
      }
    } else if (e.target.classList.contains("date-item")) {
      currentSelectedDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        e.target.textContent
      );
      dates.forEach((date) => date.classList.remove("selected"));
      e.target.classList.add("selected");
      dateDisplay.textContent = currentSelectedDate.toLocaleString("default", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }
  });
}

function initScrollers() {
  const scrollerWrappers = document.querySelectorAll(".scroller-wrapper");
  scrollerWrappers.forEach((scrollerWrapper) => {
    const prev = scrollerWrapper.querySelector(".scroll-left");
    const next = scrollerWrapper.querySelector(".scroll-right");
    prev.classList.add("hide");
    const scrollingContext = scrollerWrapper.querySelector("ul");
    const itemWidth = scrollingContext.querySelectorAll("li")[0].offsetWidth;

    prev.addEventListener("click", () => {
      const newScrollPosition = scrollingContext.scrollLeft - itemWidth;
      scrollingContext.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    });
    next.addEventListener("click", () => {
      const newScrollPosition = scrollingContext.scrollLeft + itemWidth;
      scrollingContext.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    });
    scrollingContext.addEventListener("scroll", () => {
      if (scrollingContext.scrollLeft <= 0) {
        prev.classList.add("hide");
      } else if (scrollingContext.scrollLeft > 0) {
        prev.classList.remove("hide");
      }
      if (
        scrollingContext.scrollLeft + scrollingContext.offsetWidth >=
        scrollingContext.scrollWidth
      ) {
        next.classList.add("hide");
      } else if (
        scrollingContext.scrollLeft + scrollingContext.offsetWidth <
        scrollingContext.scrollWidth
      ) {
        next.classList.remove("hide");
      }
    });
  });
}

function initDestinationsTabs() {
  const tabs = document.querySelectorAll("#destinations .tag-list .tag-item");
  const destinations = document.querySelector(
    "#destinations .destination-wrapper ul"
  );

  DESTINATIONS[0].forEach((destination) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = destination;
    li.appendChild(a);
    destinations.appendChild(li);
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("active")) return;
      tabs.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");

      destinations.innerHTML = "";

      DESTINATIONS[index].forEach((destination) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = destination;
        li.appendChild(a);
        destinations.appendChild(li);
      });
    });
  });
}

const DESTINATIONS = {
  0: [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "Fort Worth",
    "Columbus",
    "Charlotte",
    "San Francisco",
    "Indianapolis",
    "Seattle",
    "Denver",
    "Washington",
    "Boston",
    "El Paso",
    "Nashville",
    "Detroit",
    "Oklahoma City",
  ],
  1: [
    "Toronto",
    "Montreal",
    "Vancouver",
    "Calgary",
    "Edmonton",
    "Ottawa",
    "Winnipeg",
    "Quebec City",
    "Hamilton",
    "London",
    "Kitchener",
    "Victoria",
    "Halifax",
    "Oshawa",
    "Windsor",
    "Saskatoon",
    "Regina",
    "Barrie",
    "St. John's",
    "Kelowna",
    "Sherbrooke",
    "Trois-Rivières",
    "Kingston",
    "Thunder Bay",
    "Moncton",
    "Manchester",
    "Liverpool",
    "Bristol",
  ],
  2: [
    "London",
    "Birmingham",
    "Glasgow",
    "Sheffield",
    "Leeds",
    "Edinburgh",
    "Leicester",
    "Coventry",
    "Bradford",
    "Cardiff",
    "Belfast",
    "Nottingham",
    "Kingston upon Hull",
    "Newcastle upon Tyne",
    "Stoke-on-Trent",
    "Southampton",
    "Derby",
    "Portsmouth",
    "Plymouth",
    "Sunderland",
  ],
  3: [
    "Sydney",
    "Melbourne",
    "Brisbane",
    "Perth",
    "Adelaide",
    "Wollongong",
    "Sunshine Coast",
    "Hobart",
    "Bendigo",
    "Albury",
    "Launceston",
    "Rockhampton",
    "Mackay",
    "Bunbury",
    "Coffs Harbour",
    "Bundaberg",
  ],
  4: [
    "Paris",
    "Marseille",
    "Lyon",
    "Toulouse",
    "Nice",
    "Nantes",
    "Strasbourg",
    "Montpellier",
    "Bordeaux",
    "Lille",
    "Rennes",
    "Reims",
    "Le Havre",
    "Villeurbanne",
    "Saint-Denis",
    "Le Mans",
    "Aix-en-Provence",
    "Brest",
    "Tours",
  ],
};
