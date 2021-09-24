const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const titles = document.querySelectorAll(".title");
const current = document.querySelectorAll(".current");
const previous = document.querySelectorAll(".previous");
const navLink = document.querySelectorAll(".nav-link");
init();
function init() {
  getData("weekly");
}
function getData(timeframe) {
  for (let i = 0; i < titles.length; i++) {
    titles[i].textContent = data[i].title;
    current[i].textContent = `${data[i].timeframes[timeframe].current}hrs`;
    previous[
      i
    ].textContent = `Last ${timeframe} - ${data[i].timeframes[timeframe].previous}hrs`;
  }
}
navLink.forEach((element) => {
  element.addEventListener("click", function () {
    navLink.forEach((item) => {
      console.log(element);
      console.log(item);
      element.classList.add("nav-link-active");
      item.classList.remove("nav-link-active");
    });
    if (element.textContent === "Daily") {
      getData("daily");
    } else if (element.textContent === "Monthly") {
      getData("monthly");
    } else {
      init();
    }
  });
});
