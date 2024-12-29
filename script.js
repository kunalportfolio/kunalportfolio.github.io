document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById('loader').classList.add('hide');
  }, 5000);
});

const cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

});

VanillaTilt.init(document.querySelectorAll(".tile"),
  {
    max: 10,
    speed: 10
  });
VanillaTilt.init(document.querySelectorAll(".home_left"),
  {
    max: 20,
    speed: 100
  });

VanillaTilt.init(document.querySelectorAll(".pimg"),
  {
    max: 10,
    speed: 100
  });

document.querySelectorAll('.icon1').forEach(icon => {
  icon.addEventListener('mouseover', function () {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = this.alt;
    document.body.appendChild(tooltip);
    const rect = this.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;
  });

  icon.addEventListener('mouseout', function () {
    document.querySelectorAll('.tooltip').forEach(tooltip => tooltip.remove());
  });
});

ScrollReveal().reveal('.title_name', {
  duration: 3000,
  origin: 'bottom',
  distance: '100px',
  reset: false,
  delay: 300,
  opacity: 0
});

ScrollReveal().reveal('.title_shadow', {
  duration: 3000,
  origin: 'bottom',
  distance: '100px',
  reset: false,
  delay: 300,
  opacity: 0
});

ScrollReveal().reveal('.education', {
  duration: 3000,
  origin: 'bottom',
  distance: '100px',
  reset: false,
  delay: 300,
  opacity: 0
});

ScrollReveal().reveal('.about_text', {
  duration: 3000,
  origin: 'bottom',
  distance: '100px',
  reset: false,
  delay: 300,
  opacity: 0
});

ScrollReveal().reveal('.profiles', {
  duration: 3000,
  origin: 'bottom',
  distance: '100px',
  reset: false,
  delay: 300,
  opacity: 0
});

ScrollReveal().reveal('.foot', {
  duration: 3000,
  origin: 'bottom',
  distance: '100px',
  reset: false,
  delay: 300,
  opacity: 0
});

ScrollReveal().reveal('.skill_row1', {
  duration: 3000,
  origin: 'bottom',
  distance: '100px',
  reset: false,
  delay: 300,
  opacity: 0
});

ScrollReveal().reveal('.pcontainer', {
  duration: 3000,
  origin: 'bottom',
  distance: '100px',
  reset: false,
  delay: 300,
  opacity: 0
});