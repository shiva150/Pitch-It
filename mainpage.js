var menuIcon = document.querySelector(".menu");
var sidebar = document.querySelector(".side-nav");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
}