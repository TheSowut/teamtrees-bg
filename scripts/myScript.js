var btnScroll = document.getElementById("scrollToTop");
btnScroll.addEventListener("click", scrollToTop);
window.addEventListener("scroll", scrollFunction);

function scrollToTop() {
  document.documentElement.scrollTop = 0;
  // Функция предназначена да работи на Firefox, Chrome, Opera, IE
  document.body.scrollTop = 0;
  // Функция предназначена да работи на Safari
}

function scrollFunction() {
  if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
    btnScroll.style.display = "block";
    btnScroll.style.transition = "all 1s";
    var leftPanel = document.getElementById("leftPanel");
    leftPanel.style.transition = "all 1s";
    leftPanel.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    var main = document.getElementsByTagName("main")[0];
    main.style.transition = "all 1s";
    main.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    var rightPanel = document.getElementById("rightPanel");
    rightPanel.style.transition = "all 1s";
    rightPanel.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    btnScroll.style.display = "none";
    var leftPanel = document.getElementById("leftPanel");
    leftPanel.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    var main = document.getElementsByTagName("main")[0];
    main.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    var rightPanel = document.getElementById("rightPanel");
    rightPanel.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  }
}
