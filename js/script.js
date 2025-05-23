const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100);
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navlist.classList.remove('open');

    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

// function sendEmail() {

//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "fakhrideen332@gmail.com",
//         Password: "jUstsmile3321*",
//         To: 'fakhrideen332@gmail.com',
//         From: document.getElementById("email").value,
//         Subject: "New Contact Enquary",
//         body: "hello"
//     }).then(
//         message => alert(message)
//     );
// }

// Highlight active nav link
const navLinks = document.querySelectorAll('ul a');
const currentPage = location.pathname.split("/").pop();

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});