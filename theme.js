// ==========================================================
//     ; Title: Assignment 1.2
//     ; Author: Ngi Bujri
//     ; Date: 7 January, 2023
//     ; Description: Landing page for WEB 330 repository
// ==========================================================

function setDefaultTheme() {
  const theme = localStorage.getItem("mode") || "light-theme";
  const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
  const iconText = localStorage.getItem("iconText") || "Light Mode";

  document.body.classList.value = theme;
  document.getElementById("icon-mode").classList.add(iconMode);
  document.getElementById("icon-text").innerHTML = iconText;
}

function setSelectedTheme() {
  document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}
