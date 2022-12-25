

let mybutton = document.getElementById("btn-back-to-top");
let body = document.getElementsByTagName("body")[0];
let navbar = document.querySelector(".navbar")
let social_icon_container=document.getElementsByClassName("social-icon-block");
let parallax=document.getElementsByClassName("parallax");
let all=document.querySelectorAll("*");


for (let i = 0; i < all.length; i++) {
    all[i].classList.add("item");
   
    
  
}




// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "flex";
    navbar.classList.add("navchange")
  } else {
    mybutton.style.display = "none";
    navbar.classList.remove("navchange")

  }
}
//  function updateNavbar () {
//   if (
//     document.body.scrollTop > 30 ||
//     document.documentElement.scrollTop > 30
//   ) {
//     navbar.style.backgroundColor = "var(--secondary-color)";

//   } else {
//     navbar.style.backgroundColor = "var(--secondary-color)"
//   }

// }
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  AOS.init({
   
    offset: 200,
 
  easing: 'ease-in',
  disable: 'mobile'
    
  });




