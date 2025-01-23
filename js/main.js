// Select Variables
let landingPage = document.querySelector(".landing-page");
/* List of all images */
let imgs = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "15.jpg",
  "16.jpg",
];

// Arrow Function to get random index of background images
let randomIndex = () => Math.floor(Math.random() * imgs.length);

// =======================================
// =========== Set Our Skills ============
// =======================================
let skillsContainer = document.querySelector(".skills .container");
let skills = [
  ["HTML", "80%"],
  ["CSS", "75%"],
  ["JavaScript", "90%"],
  ["Java", "85%"],
  ["C++", "70%"],
  ["Python", "95%"],
  ["MySQL", "25%"],
  ["Git & GitHub", "85%"],
];

skills.forEach(([skill, prog]) => {
  // Create Elements
  let skillBox = document.createElement("div");
  let skillName = document.createElement("div");
  let skillProg = document.createElement("div");
  let skillProgSpan = document.createElement("span");

  // Set Attributes and Classes name
  skillProg.className = "skill-progress";
  skillName.className = "skill-name";
  skillBox.className = "skill-box";
  skillProgSpan.setAttribute("data-progress", prog);

  // Append Childs
  skillProg.append(skillProgSpan);
  skillName.append(skill);
  skillBox.append(skillName, skillProg);
  skillsContainer.appendChild(skillBox);
});

// =======================================
// =========== Set Our Gallery ===========
// =======================================
let imageBox = document.querySelector(".gallery .images-box");
let images = [
  ["05.jpg", "Image One"],
  ["06.jpg", "Image Two"],
  ["07.jpg", "Image Three"],
  ["08.jpg", "Image Four"],
  ["09.jpg", "Image Five"],
  ["10.jpeg", "Image Six"],
  ["11.jpeg", ""],
  ["12.jpg", ""],
  ["13.png", ""],
  ["14.png", ""],
  ["15.jpg", ""],
  ["16.jpg", ""],
];
images.forEach(([src, alt]) => {
  let img = document.createElement("img");
  img.setAttribute("src", `files/${src}`);
  img.setAttribute("alt", alt);
  imageBox.appendChild(img);
});

let ourGallery = document.querySelectorAll(".gallery .images-box img");
ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Creat Overlay popup
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);

    // Create Popup Box
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    document.body.appendChild(popupBox);

    // Create Heading with alternate text & append it in the box
    if (img.alt) {
      let h3 = document.createElement("h3");
      h3.appendChild(document.createTextNode(img.alt));
      popupBox.appendChild(h3);
    }

    // Create Popup Image From img Click
    let popupImage = document.createElement("img");
    popupImage.src = img.src;
    popupBox.appendChild(popupImage);

    // Create Close Button
    let closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.appendChild(document.createTextNode("X"));
    // Close The OverLay And PoputBox When User Click On Close-btn
    closeBtn.onclick = function () {
      this.parentElement.style.display = "none";
      overlay.style.display = "none";
    };
    popupBox.appendChild(closeBtn);
  });
});

// =======================================
// =========== Set Nav Bullets ===========
// =======================================
let Bullets = document.querySelectorAll(".nav-bullets > .bullet");
Bullets.forEach((bullet) => {
  bullet.style.setProperty("--ref", `"${bullet.dataset.ref}"`);
  bullet.addEventListener("click", (e) => {
    document.querySelector(`${e.target.dataset.sec}`).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// =======================================
// =========== Set Header Links ==========
// =======================================
let linksContainer = document.querySelector(".links-container .links");
let toggleMenu = document.querySelector(".links-container .toggle-menu");

// Open & Close The Menu
addEventListener("click", (e) => {
  if (toggleMenu === e.target || e.target.parentElement === toggleMenu) {
    toggleMenu.classList.toggle("menu-active");
    linksContainer.classList.toggle("open");
  } else {
    toggleMenu.classList.remove("menu-active");
    linksContainer.classList.remove("open");
  }
});
