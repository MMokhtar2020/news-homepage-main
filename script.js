document.querySelector(".menu-icon-bars").addEventListener("click", myFunction);
document.querySelector('.menu-icon-x').addEventListener("click", myFunction);
function myFunction() {
  document.getElementById("nav").classList.toggle('active');
  document.getElementById('overlay').classList.toggle('active');;
}