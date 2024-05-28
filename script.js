// Getting elements from the DOM
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Event listener for the menu button
menuBtn.addEventListener("click", (e) => {
  // Toggling the "open" class for the navigation links
  navLinks.classList.toggle("open");

  // Checking if the navigation links are open
  const isOpen = navLinks.classList.contains("open");

  // Updating the menu button icon based on whether the navigation links are open or closed
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Event listener for the navigation links
navLinks.addEventListener("click", (e) => {
  // Closing the navigation links when a link is clicked
  navLinks.classList.remove("open");
  // Restoring the menu button icon to the default state
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Scroll reveal options
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Applying scroll reveal to header content elements
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// Applying scroll reveal to about section cards
ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
});

// Applying scroll reveal to trainer section cards
ScrollReveal().reveal(".trainer__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Applying scroll reveal to stats section cards
ScrollReveal().reveal(".stats__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Initializing Swiper for the carousel
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// Adding event listeners for logo tooltips when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Selecting all logo divs within the logo banner section
  const logoDivs = document.querySelectorAll(".logo__banner div");

  // Iterating over each logo div
  logoDivs.forEach(div => {
    // Retrieving the tooltip text from the data-tooltip attribute
    const tooltipText = div.getAttribute("data-tooltip");
    
    // Creating a tooltip element
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = tooltipText;
    
    // Appending the tooltip to the logo div
    div.appendChild(tooltip);

    // Adding event listener for mouseenter to show the tooltip
    div.addEventListener("mouseenter", () => {
      tooltip.style.visibility = "visible";
      tooltip.style.opacity = "1";
    });

    // Adding event listener for mouseleave to hide the tooltip
    div.addEventListener("mouseleave", () => {
      tooltip.style.visibility = "hidden";
      tooltip.style.opacity = "0";
    });
  });
});
