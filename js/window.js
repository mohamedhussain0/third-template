// Custom Some Vars to used
let ourSkills = document.querySelector(".skills .container");
let SkillsSpan = document.querySelectorAll(
  ".skills .skill-box .skill-progress span"
);

// =======================================
// =========== Window Property ===========
// =======================================
// Onscroll Window
window.onscroll = () => {
  /* ==================================== */
  /* ==== Show The Up Button In Page ==== */
  if (scrollY >= 750) {
    UPbtn.classList.add("open");
  } else {
    // UPbtn.style.display = "none";
    UPbtn.classList.remove("open");
  }
  /* ==================================== */
  /* ==== Show Progress Of All Skills === */
  // Skills offset top
  let SkillsOffSetTop = ourSkills.offsetTop;
  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;
  // Window Height
  let windowHeight = this.innerHeight;
  // Window Height
  let windowScrollTop = this.scrollY;

  if (
    windowScrollTop >
    (SkillsOffSetTop + skillsOuterHeight - windowHeight) * 0.8
  ) {
    SkillsSpan.forEach((skill) => {
      // Set Width Of Each Skill
      skill.style.width = skill.dataset.progress;
      // Set Progress In ::After
      skill.style.setProperty("--progress", `"${skill.dataset.progress}"`);
    });
  }
  /* ==================================== */
};

// Onload Window
window.onload = () => {
  landingPage.style.backgroundImage = `url(files/${imgs[randomIndex()]})`;
};

// Onrsize Window
window.onresize = () => {
  if (window.innerWidth > 991) {
    toggleMenu.classList.remove("menu-active");
    linksContainer.classList.remove("open");
  }
};
