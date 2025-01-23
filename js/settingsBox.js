// =======================================
// ====== Open & Close Settings Box ======
// =======================================
let settingsBox = document.querySelector(".settings-box");
// let gearBox = document.querySelector(".settings-box .toggle-settings");
// Open & Close Settings Box
document.querySelector(".settings-box .toggle-settings").onclick = function () {
  // Open & Close Settings Box
  settingsBox.classList.toggle("open");

  // If Box is open the gear is spin
  this.querySelector(".gear").classList.toggle("fa-spin");

  // Set open or close in sessionStorage
  sessionStorage.setItem(
    "openSettings",
    this.parentElement.classList.contains("open") ? "open" : "close"
  );
};

if (sessionStorage.getItem("openSettings") === "open") {
  // Open Settings Box
  settingsBox.classList.add("open");

  // If Box is open the gear is spin
  document
    .querySelector(".settings-box .toggle-settings .gear")
    .classList.add("fa-spin");
} else {
  // Open Settings Box
  settingsBox.classList.remove("open");

  // If Box is open the gear is spin
  document
    .querySelector(".settings-box .toggle-settings .gear")
    .classList.remove("fa-spin");
}

// =======================================
// ============ Set Up Button ============
// =======================================
let UPbtn = document.getElementById("up-button");

/* Window on Scroll to show the up button in js/main.js */

// up onclick button
UPbtn.onclick = function () {
  window.scrollTo(0, 0);
};

// =======================================
// ======= Select Color Of WebSite =======
// =======================================
/* List of all colors */
let colorOptions = ["#bc6c25", "#22c55e", "#03a9f4", "#ff9800", "#dda15e"];

function setColorBoxes() {
  let optionBoxColors = document.querySelector(
    ".settings-box .option-box .colors"
  );

  for (let i = 0; i < colorOptions.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("color", colorOptions[i]);
    li.style.backgroundColor = colorOptions[i];
    optionBoxColors.appendChild(li);
  }

  // Set active class on li Color
  if (localStorage.getItem("mainColor")) {
    document.documentElement.style.setProperty(
      "--main-color",
      localStorage.getItem("mainColor")
    );
    document.querySelector(
      `.settings-box .option-box .colors li[color="${localStorage.getItem(
        "mainColor"
      )}"]`
    ).className = "active";
  } else {
    document.querySelector(
      ".settings-box .option-box .colors li:first-child"
    ).className = "active";
    localStorage.setItem("mainColor", colorOptions[0]);
  }
}
setColorBoxes();

// OnClick color
const colorLi = document.querySelectorAll(
  ".settings-box .option-box .colors li"
);
colorLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Set a Color on root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.getAttribute("color")
    );
    // Set Color On Local Storage
    localStorage.setItem("mainColor", e.target.getAttribute("color"));

    // Remove active class from last li box
    e.target.parentElement.querySelectorAll(".active").forEach((l) => {
      if (l.classList.contains("active")) {
        l.classList.remove("active");
      }
    });

    // Set active class on new li box
    li.classList.add("active");
  });
});

// =======================================
// ========== Random BackGround ==========
// =======================================
let randomBackgroundSpan = document.querySelectorAll(
  ".random-background .choices span"
);

// Change The Background Image Every 5 Seconds
let backgroundInterval;
function randomBackground(option) {
  if (option) {
    // Set Interval And Save It In Variable
    backgroundInterval = setInterval(() => {
      landingPage.style.backgroundImage = `url(files/${imgs[randomIndex()]})`;
    }, 5000);
  } else if (!option) {
    clearInterval(backgroundInterval);
  }
  switchYesNo(
    document.querySelector(
      `.random-background span[data-choice=${option ? "yes" : "no"}`
    )
  );
}

// Set Random background
//  depend on localStorage
GetFromLocal("randBackground", randomBackground);

// Set Random background depend on user option
// On Click
handleOptionClick(randomBackgroundSpan, (choice) => randomBackground(choice));

// =======================================
// ============ Fixed Header =============
// =======================================
let fixedHeaderSpan = document.querySelectorAll(".fixed-header .choices span");
let header = document.querySelector("header");

function fixedHeader(option) {
  if (option) {
    header.classList.add("fixed");
    header.classList.remove("relative");
  } else if (!option) {
    header.classList.add("relative");
    header.classList.remove("fixed");
  }
  switchYesNo(
    document.querySelector(
      `.fixed-header span[data-choice=${option ? "yes" : "no"}`
    )
  );
}

// Set Fixed Or Relative Header
//  depend on localStorage
GetFromLocal("fixedHeader", fixedHeader);

// Set Fixed Or Relative Header
//  depend on user option
handleOptionClick(fixedHeaderSpan, (choice) => fixedHeader(choice));

// =======================================
// ============ Show Bullets =============
// =======================================
let bulletsSpan = document.querySelectorAll(".show-bullets .choices span");
let navBullets = document.querySelector(".nav-bullets");

function showBullets(option) {
  option
    ? navBullets.classList.remove("hidden")
    : navBullets.classList.add("hidden");
  switchYesNo(
    document.querySelector(
      `.show-bullets span[data-choice='${option ? "yes" : "no"}']`
    )
  );
}
if (!localStorage.getItem("showBullets")) showBullets(true);

// Show Navigation Bullets
//  depend on localStorage
GetFromLocal("showBullets", showBullets);

// Show Navigation Bullets
//  depend on user option
handleOptionClick(bulletsSpan, (choice) => showBullets(choice));

// =======================================
// ============ Show Bullets =============
// =======================================
let resetBtn = document.querySelector(".reset-options");
resetBtn.onclick = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload();
};
