function smoothScroll() {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const navHash = document.querySelector(link.hash);
      navHash.scrollIntoView({ behavior: "smooth" });
    });
  });
}

smoothScroll();
