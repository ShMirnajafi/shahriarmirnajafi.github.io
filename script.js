document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    let linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
