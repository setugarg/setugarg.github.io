'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}



/**
 * contact form - LinkedIn message
 */

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = contactForm.querySelector("#name").value.trim();
  const email = contactForm.querySelector("#email").value.trim();
  const phone = contactForm.querySelector("#phone").value.trim();
  const message = contactForm.querySelector("#message").value.trim();

  const fullMessage = "Hi Setu,\n\n" + message + "\n\n— " + name + "\nEmail: " + email + "\nPhone: " + phone;

  navigator.clipboard.writeText(fullMessage).then(function () {
    window.open("https://www.linkedin.com/in/setugarg/", "_blank");
    alert("Your message has been copied to the clipboard.\n\nLinkedIn will open in a new tab — click \"Message\" on my profile and paste your message.");
  }).catch(function () {
    window.open("https://www.linkedin.com/in/setugarg/", "_blank");
    alert("LinkedIn will open in a new tab — click \"Message\" on my profile and send your message.\n\nYour message:\n" + fullMessage);
  });
});