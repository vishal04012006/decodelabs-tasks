/* ====================================
   AOS ANIMATION
==================================== */

AOS.init({
    duration: 1000,
    once: true
});

/* ====================================
   TYPING ANIMATION
==================================== */

var typed = new Typed(".typing", {

    strings: [
        "Cybersecurity Student",
        "AWS Cloud Learner",
        "CCNA Trained",
        "Networking Enthusiast",
    ],

    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true

});

/* ====================================
   DARK / LIGHT MODE
==================================== */

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");
    }

});

/* ====================================
   LOAD SAVED THEME
==================================== */

window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        themeBtn.querySelector("i")
            .classList.replace("fa-moon", "fa-sun");
    }

});

/* ====================================
   MOBILE MENU
==================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/* ====================================
   SCROLL PROGRESS BAR
==================================== */

window.addEventListener("scroll", () => {

    const winScroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled =
        (winScroll / height) * 100;

    document.getElementById("progress-bar")
        .style.width = scrolled + "%";

});

/* ====================================
   BACK TO TOP BUTTON
==================================== */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* ====================================
   MATRIX RAIN EFFECT
==================================== */

const canvas =
    document.getElementById("matrixCanvas");

const ctx =
    canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters =
    "01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fontSize = 14;

const columns =
    canvas.width / fontSize;

const drops = [];

for (let i = 0; i < columns; i++) {

    drops[i] = 1;

}

function drawMatrix() {

    ctx.fillStyle =
        "rgba(0,0,0,0.05)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "#00ff88";

    ctx.font =
        fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {

        const text =
            letters.charAt(
                Math.floor(
                    Math.random() *
                    letters.length
                )
            );

        ctx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
        );

        if (
            drops[i] * fontSize >
                canvas.height &&
            Math.random() > 0.975
        ) {

            drops[i] = 0;

        }

        drops[i]++;

    }

}

setInterval(drawMatrix, 35);

/* ====================================
   WINDOW RESIZE
==================================== */

window.addEventListener(
    "resize",
    () => {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }
);

/* ====================================
   CONTACT FORM
==================================== */

emailjs.init("0V8RrdqZ6nRCdNw3c");

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_vishal",
        "template_vishal",
        this
    )

    .then(() => {

        document.getElementById("successMessage").innerHTML =
        "✅ Thank you for contacting me! Your message has been received successfully. I will get back to you soon.";

        document.getElementById("successMessage").style.color =
        "#00ff88";

        contactForm.reset();

    })

    .catch((error) => {

        document.getElementById("successMessage").innerHTML =
        "❌ Failed to send message. Please try again.";

        document.getElementById("successMessage").style.color =
        "red";

        console.error(error);

    });

});
/* ====================================
   NAVBAR BACKGROUND ON SCROLL
==================================== */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(0,0,0,0.75)";

    } else {

        header.style.background =
            "rgba(0,0,0,0.25)";
    }

});

/* ====================================
   ACTIVE NAV LINK
==================================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            pageYOffset >= sectionTop
        ) {
            current =
                section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

/* ====================================
   HERO FLOAT EFFECT
==================================== */

const hero =
    document.querySelector(".hero-content");

window.addEventListener(
    "mousemove",
    (e) => {

        const x =
            (window.innerWidth / 2 -
                e.pageX) / 40;

        const y =
            (window.innerHeight / 2 -
                e.pageY) / 40;

        hero.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);  

