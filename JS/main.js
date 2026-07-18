document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const toggler = document.querySelector("img.toogle");
  const nav = document.querySelector("ul.links");

  if (toggler && nav) {
    toggler.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }

  // Header Scroll Effect & Active Links
  const header = document.querySelector("header");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul.links li a");

  window.addEventListener("scroll", () => {
    // Header Glassmorphism
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }


  });

  // Hero Carousel Logic (Mock toggle)
  const heroNext = document.querySelector("#hero .next-and-prev span:last-child");
  const heroPrev = document.querySelector("#hero .next-and-prev span:first-child");
  const heroImg = document.querySelector("#hero .img img");
  
  const heroImages = [
    "./Images/img-1.png",
    "./Images/img-2.png",
    "./Images/img-3.png"
  ];
  let currentHeroIndex = 0;

  const updateHeroImage = (index) => {
    if (heroImg) {
      heroImg.style.transform = "scale(0.8) rotate(5deg)";
      heroImg.style.opacity = "0.5";
      setTimeout(() => {
        heroImg.src = heroImages[index];
        heroImg.style.transform = "scale(1) rotate(0deg)";
        heroImg.style.opacity = "1";
      }, 300);
    }
  };

  if (heroNext && heroPrev) {
    heroNext.addEventListener("click", () => {
      currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
      updateHeroImage(currentHeroIndex);
    });
    
    heroPrev.addEventListener("click", () => {
      currentHeroIndex = (currentHeroIndex - 1 + heroImages.length) % heroImages.length;
      updateHeroImage(currentHeroIndex);
    });
  }

  // Form Validation
  const form = document.querySelector("#contact form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = form.querySelectorAll("input, textarea");
      let valid = true;
      inputs.forEach(input => {
        if (!input.value.trim()) valid = false;
      });

      if (valid) {
        alert("Thank you! Your message has been sent successfully.");
        form.reset();
      } else {
        alert("Please fill in all required fields.");
      }
    });
  }
});
