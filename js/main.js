// !Loading
window.addEventListener("load", () => {
  let Loading = document.querySelector(".content_loading");

  if (Loading) {
    Loading.remove();
  }
});

//! Menu Hamburger
let burgerMenu = document.querySelector(".burger_menu");
let sidBar = document.querySelector("aside");
let bgCover = document.querySelector(".bg_cover");

burgerMenu.addEventListener("click", (e) => {
  console.log("click");
  sidBar.classList.add("d_block");
  bgCover.classList.add("d_block");
});

bgCover.addEventListener("click", (e) => {
  console.log("click");
  sidBar.classList.remove("d_block");
  bgCover.classList.remove("d_block");
});

//! Dropdown SunMenu Aside
let dropdownSidebarMenu = document.querySelectorAll(".dropdown_sidebar_menu");
dropdownSidebarMenu.forEach((item) => {
  console.log(item);
  item.addEventListener("click", (e) => {
    console.log(e.target);
    let menuTarget = e.target;
    if (menuTarget === menu) {
      let childSubMenu = menuTarget.querySelector(".sub_menu_sidebar");
      let arrowSvg = menuTarget.querySelector("div .arrow_sub_menu");
      console.log(arrowSvg);

      console.log(childSubMenu);
      childSubMenu.classList.toggle("show_sub_menu");
      arrowSvg.classList.toggle("arrow_top");
    }
  });
});

//! Chart
let dataSeries = [30, 40, 35, 50, 49, 60, 70, 91, 125, 67, 14, 15];
let dataCategories = [30, 40, 35, 50, 49, 60, 70, 91, 125, 67, 14, 15];

var options = {
  chart: {
    type: "area",
    fontfamily: "Raleway",
    height: "350px",
  },
  series: [
    {
      name: "sales",
      data: dataSeries,
    },
  ],
  xaxis: {
    categories: dataCategories,
    axisBorder: {
      show: true,
      color: "#3135f3",
      height: 1,
      width: "100%",
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#353e4d",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#353e4d",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#3a6ffb"],
  fill: {
    colors: ["#3a6ffb"],
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.9,
      stops: [0, 100],
    },
  },
};

let chartBitcoinBtc = document.querySelector("#chart_bitcoin_btc");
var chart = new ApexCharts(chartBitcoinBtc, options);
if (chartBitcoinBtc) {
  chart.render();
}

let oneBtn = document.querySelector("#one_btn");
let secondeBtn = document.querySelector("#seconde_btn");

oneBtn?.addEventListener("click", () => {
  chart.updateSeries([
    { name: "test", data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 67, 14, 15] },
  ]);
});

secondeBtn?.addEventListener("click", () => {
  chart.updateSeries([
    {
      name: "test",
      data: [300, 460, 135, 500, 91, 360, 710, 910, 125, 37, 104, 150],
    },
  ]);
});

//! Message list user
let listNotification = document.querySelector("#list_notification");
let btnNotification = document.querySelector("#btn_notification");

btnNotification.addEventListener("click", (e) => {
  //console.log("Before:", listNotification.classList);
  //console.log(listNotification.classList.contains("active_notify"));

  if (listNotification.classList.contains("active_notify")) {
    listNotification.classList.remove("active_notify");
  } else {
    listNotification.classList.add("active_notify");
  }

  //console.log("After:", listNotification.classList);
});

//! List Account User
let fullNameUser = document.querySelector(".full_name_user");
let ListAccountUser = document.querySelector(".list_account_user");

fullNameUser.addEventListener("click", (e) => {
  if (ListAccountUser.classList.contains("active_account_user")) {
    ListAccountUser.classList.remove("active_account_user");
  } else {
    ListAccountUser.classList.add("active_account_user");
  }
});

// ! Dark and Light
let lightModeBtn = document.querySelector("#lightModeBtn ");
let darkModeBtn = document.querySelector("#darkModeBtn ");

const setThemeMode = (themeMode) => {
  document.documentElement.setAttribute("data-theme", themeMode);
  lightModeBtn.classList.toggle("active_darked", themeMode === "light");
  darkModeBtn.classList.toggle("active_darked", themeMode === "dark");
  localStorage.setItem("themMode", themeMode);
  let labelsColor = themeMode === "dark" ? "#c6c6c6" : "#353e4d";
  if (chartBitcoinBtc) {
    chart.updateOptions({
      xaxis: {
        categories: dataCategories,
        labels: {
          style: {
            colors: "#353e4d",
          },
        },
      },

      yaxis: {
        labels: {
          style: {
            colors: "#353e4d",
          },
        },
      },
    });
  }
};

lightModeBtn.addEventListener("click", () => setThemeMode("light"));
darkModeBtn.addEventListener("click", () => setThemeMode("dark"));

let saveThemeMode = localStorage.getItem("themMode");
setThemeMode(saveThemeMode || "light");



// ! Chart Js
const ctx = document.getElementById("graph_1");
const ctx2 = document.getElementById("graph_2");
const ctx3 = document.getElementById("graph_3");
if (ctx || ctx2 || ctx3) {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["M", "T", "W", "T", "F", "S"],
      datasets: [
        {
          label: "# of Vote",
          data: [50, 20, 10, 20, 50, 40, 10],
          borderWidth: 0,
          borderRadius: 4,
          maxBarThickness: 6,
          backgroundColor: "#fff",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            // color: "rgba(255,255,255,0.8)",
            drawBorder: false,
            drawTicks: false,
            drawOnChartArea: true,
          },
          border: {
            dash: [5, 5],
          },
          ticks: {
            padding: 10,
            font: {
              size: 14,
              weight: 400,
            },
            color: "rgba(255,255,255,0.8)",
          },
        },
        x: {
          grid: {
            color: "rgba(255,255,255,0.8)",
            drawBorder: false,
            drawTicks: false,
            drawOnChartArea: true,
          },
          border: {
            dash: [5, 5],
          },
          ticks: {
            padding: 10,
            font: {
              size: 14,
              weight: 400,
            },
            color: "rgba(255,255,255,0.8)",
          },
        },
      },
    },
  });

  new Chart(ctx2, {
    type: "line",
    data: {
      labels: ["M", "T", "W", "T", "F", "S"],
      datasets: [
        {
          label: "# of Vote",
          data: [50, 20, 10, 20, 50, 40, 10],
          borderWidth: 5,
          pointRadius: 8,
          // pointWidth:12,
          borderColor: "rgba(255,255,255,1)",
          pointBackgroundColor: "rgba(255,255,255,1)",
          pointBorderColor: "transparent",
          fill: true,
          maxBarThickness: 1,
          backgroundColor: "transparent",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(255,255,255,0.8)",
            drawBorder: false,
            drawTicks: false,
            drawOnChartArea: true,
          },
          border: {
            dash: [5, 5],
          },
          ticks: {
            padding: 10,
            font: {
              size: 14,
              weight: 400,
            },
            color: "rgba(255,255,255,0.8)",
          },
        },
        x: {
          grid: {
            // color: "rgba(255,255,255,0.8)",
            drawBorder: false,
            drawTicks: false,
            drawOnChartArea: true,
            display: false,
          },
          border: {
            dash: [5, 5],
          },
          ticks: {
            padding: 10,
            font: {
              size: 14,
              weight: 400,
            },
            color: "rgba(255,255,255,0.8)",
          },
        },
      },
    },
  });
  new Chart(ctx3, {
    type: "line",
    data: {
      labels: ["M", "T", "W", "T", "F", "S"],
      datasets: [
        {
          label: "# of Vote",
          data: [50, 20, 10, 20, 50, 40, 10],
          borderWidth: 5,
          pointRadius: 8,
          // pointWidth:12,
          borderColor: "rgba(255,255,255,1)",
          pointBackgroundColor: "rgba(255,255,255,1)",
          pointBorderColor: "transparent",
          fill: true,
          maxBarThickness: 1,
          backgroundColor: "transparent",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(255,255,255,0.8)",
            drawBorder: false,
            drawTicks: false,
            drawOnChartArea: true,
          },
          border: {
            dash: [5, 5],
          },
          ticks: {
            padding: 10,
            font: {
              size: 14,
              weight: 400,
            },
            color: "rgba(255,255,255,0.8)",
          },
        },
        x: {
          grid: {
            // color: "rgba(255,255,255,0.8)",
            drawBorder: false,
            drawTicks: false,
            drawOnChartArea: true,
            display: false,
          },
          border: {
            dash: [5, 5],
          },
          ticks: {
            padding: 10,
            font: {
              size: 14,
              weight: 400,
            },
            color: "rgba(255,255,255,0.8)",
          },
        },
      },
    },
  });
}

// Filter User in messageChat Page
function FilterUser() {
  let usersInfoChat = document.querySelectorAll(".user_info_chat");
  let searchInput = input_search_chat.value.trim().toLowerCase();
  Array.from(usersInfoChat).forEach((chatItem) => {
    let userName = chatItem
      .querySelector(".name_user_info_chat h5")
      .textContent.trim()
      .toLowerCase();
    if (userName.includes(searchInput)) {
      chatItem.style.display = "flex";
    } else {
      chatItem.style.display = "none";
    }
  });
}

//! MessageChat
window.addEventListener("load", (e) => {
  let messageChatContent = document.querySelector(".message_chat_content");
  //console.log(messageChatContent.scrollHeight);
  messageChatContent?.scrollTo(0, messageChatContent.scrollHeight);
});



// !SweetAlert
if (typeof Swal !== "undefined") {
  const Tost = Swal.fire({
    icon: "success",
    title: "Singed in Successful 🙂",
  });
}

//! RTE
let editor1 = new RichTextEditor("#div_editor1");
editor1.setHTMLCode("<h1><b>Hello</b> World</h1><h3>Morsal Ashrafi</h3>");
let editor1_get_data = document.getElementById("editor1_get_data");
let show_text = document.getElementById("show_text");
editor1_get_data.addEventListener("click", () => {
  let value_text = editor1.getHTMLCode();
  show_text.innerHTML = value_text;
});
