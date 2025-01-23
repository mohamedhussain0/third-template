// =======================================
// ========== Global Functions ===========
// =======================================
// Swich Active Calss Between Yes/No
// And Append The Choice In LocalStorage
function switchYesNo(choice) {
  let grand = choice.parentElement.parentElement;
  let spans = grand.querySelectorAll(".choices span");

  // Switch Yes/No
  spans.forEach((span) => {
    span.classList.remove("active");
  });
  choice.classList.add("active");

  // Append Choice In LocalStorage
  // Get LocalStorage Name Form Code HTML
  window.localStorage.setItem(grand.dataset.local, choice.dataset.choice);
}

// In Click Handling
function handleOptionClick(elements, callback) {
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      const choice = e.target.dataset.choice === "yes" ? true : false;
      callback(choice);
      switchYesNo(element);
    });
  });
}

// Get From LocalStorage
function GetFromLocal(nameLocal, callback) {
  callback(localStorage.getItem(nameLocal) === "yes" ? true : false);
}
