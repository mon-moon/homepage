console.log("Hejka ");

let darkmode__button = document.querySelector(".darkmode__button");
let body = document.body;
let nav =document.nav;

darkmode__button.addEventListener("click", () => {
    const isDarkMode = body.classList.contains("nav--darkMode");
    
    if (isDarkMode) {
        body.classList.remove("nav--darkMode");
        nav.classList.remove("nav--darkMode");
        darkmode__button.querySelector("img").setAttribute("src", "https://seopuzle.pl/wp-content/uploads/2023/09/light_mode.png");
    } else {
        body.classList.add("nav--darkMode");
        nav.classList.add("nav--darkMode");
        darkmode__button.querySelector("img").setAttribute("src", "https://seopuzle.pl/wp-content/uploads/2023/09/dark_mode.png");
    }
});



let callme = document.querySelector(".article__callmebutton");
console.log(callme);

callme.addEventListener("click", () => {
    callme.innerHTML = "+48 000 000 000";
})

let emailme = document.querySelector(".article__emailmebutton");
console.log(emailme)

emailme.addEventListener("click", () => {
    emailme.innerHTML = "taktak@gmail.com";
})

