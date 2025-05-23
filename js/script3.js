// Highlight active nav link
const navLinks = document.querySelectorAll('nav a');
const currentPage = location.pathname.split("/").pop();

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});