window.addEventListener("DOMContentLoaded", init);

function init() {
  initDestinationsTabs();
}

function initDestinationsTabs() {
  const tabs = document.querySelectorAll("#destinations .tag-list .tag-item");
  const destinations = document.querySelector(
    "#destinations .destination-wrapper ul"
  );

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
  