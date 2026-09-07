let currentSlide = 1;

const dots = document.querySelectorAll(".dot");

const noButton =
    document.getElementById("noButton");

const smallText =
    document.getElementById("smallText");

let attempts = 0;


/* =========================
   NEXT SLIDE
========================= */

function nextSlide() {

    const current =
        document.getElementById(
            "slide" + currentSlide
        );

    current.classList.remove("active");

    currentSlide++;

    const next =
        document.getElementById(
            "slide" + currentSlide
        );

    next.classList.add("active");

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentSlide - 1
        );

    });

    createHearts(4);
}


/* =========================
   NO BUTTON MESSAGES
========================= */

const messages = [

    "Please don't press that one... 🥺",

    "Wait... think about it 😭",

    "Hey! Why are you chasing the NO button? 😂",

    "Okay okay... I'm really sorry 🥺",

    "The NO button is scared of you now 😭😂",

    "Please give me just one chance ❤️",

    "My heart can't handle this 💔",

    "You really want to say NO? 🥺",

    "I'm begging nicely now... 🥹",

    "Okay... I'll keep trying until you forgive me ❤️"

];


/* =========================
   MOVE NO BUTTON
========================= */

function moveNoButton() {

    attempts++;

    smallText.innerText =
        messages[
            Math.min(
                attempts,
                messages.length - 1
            )
        ];


    /* Make it escape anywhere */

    noButton.style.position = "fixed";


    const buttonWidth =
        noButton.offsetWidth;

    const buttonHeight =
        noButton.offsetHeight;


    const maxX =
        window.innerWidth -
        buttonWidth -
        15;


    const maxY =
        window.innerHeight -
        buttonHeight -
        15;


    const x =
        10 +
        Math.random() *
        Math.max(10, maxX - 10);


    const y =
        10 +
        Math.random() *
        Math.max(10, maxY - 10);


    noButton.style.left =
        x + "px";

    noButton.style.top =
        y + "px";


    noButton.style.transform =
        "rotate(" +
        (Math.random() * 20 - 10) +
        "deg)";


    createHearts(2);
}


/* =========================
   COMPUTER
========================= */

noButton.addEventListener(
    "mouseenter",
    moveNoButton
);


/* =========================
   PHONE
========================= */

noButton.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        moveNoButton();
    }
);


/* Also catch clicks */

noButton.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        moveNoButton();
    }
);


/* =========================
   YES / FORGIVE
========================= */

function forgive() {

    document
        .getElementById("slide4")
        .classList.remove("active");


    document
        .getElementById("final")
        .classList.add("active");


    dots.forEach(dot => {
        dot.classList.remove("active");
    });


    /* Big final heart effect */

    createHearts(25);
}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts(amount) {

    const emojis = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💓"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.className =
            "heart";


        heart.innerText =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        heart.style.left =
            Math.random() * 100 +
            "%";


        heart.style.fontSize =
            (14 +
            Math.random() * 20) +
            "px";


        heart.style.animationDuration =
            (5 +
            Math.random() * 5) +
            "s";


        heart.style.animationDelay =
            Math.random() * 1.5 +
            "s";


        document.body.appendChild(
            heart
        );


        setTimeout(
            () => {
                heart.remove();
            },
            11000
        );
    }
}


/* =========================
   START HEARTS
========================= */

createHearts(5);


setInterval(
    () => {
        createHearts(1);
    },
    1800
);
/* =========================
   WHATSAPP FORGIVENESS
========================= */

function sendForgiveness() {

    const message =
        "I forgive you ❤️ Don't do it again, okay? 🥺❤️";

    const whatsappURL =
        "https://wa.me/?text=" +
        encodeURIComponent(message);

    window.location.href = whatsappURL;
}
