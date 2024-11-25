function onMenuClick() {
  const menu = document.getElementById("menu");
  menu.style.display = "block";
}

function onCloseMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = "none";
}

function changeLanguage(lang) {
  localStorage.setItem("lang", lang);
  fetch("lang.json")
    .then((res) => res.json())
    .then((data) => {
      const textIds = Object.keys(data[lang]);
      for (const id of textIds) {
        const element = document.getElementById(id);
        if (element) {
          element.innerText = data[lang][id];
        }
      }
    });
}

function openLanguageModal() {
  const modal = document.getElementById("lmodal");
  modal.style.display = "flex";
}

function closeModal() {
  location.reload();
}

function init() {
  const lang = localStorage.getItem("lang");
  changeLanguage(Number(lang));
}

function navToMain() {
  location.href = "index.html";
}

function gotoproducts() {
  location.href = "index.html#products";
}

function gtpr() {
  location.href = "index.html#products";
  location.reload();
}

function openContact() {
  // scroll page to #62
  location.href = "index.html#62";
  location.reload();
}
function gotoabout() {
  location.href = "about.html";
}
