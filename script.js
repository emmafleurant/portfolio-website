function openPanel(evt, panelName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-panel");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(panelName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Set the first tab as active on page load
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tab-button").click();
});



//HAMBUGER 
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});