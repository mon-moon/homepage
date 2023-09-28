console.log("Hejka ");

let darkmode__button = document.querySelector(".darkmode__button");
let body = document.body;

darkmode__button.addEventListener("click", () => {
    const isDarkMode = body.classList.contains("nav--darkMode");
    
    if (isDarkMode) {
        body.classList.remove("nav--darkMode");
        darkmode__button.querySelector("img").setAttribute("src", "https://seopuzle.pl/wp-content/uploads/2023/09/light_mode.png");
    } else {
        body.classList.add("nav--darkMode");
        darkmode__button.querySelector("img").setAttribute("src", "https://seopuzle.pl/wp-content/uploads/2023/09/dark_mode.png");
    }
});



let callme = document.querySelector(".button");
console.log(callme);

callme.addEventListener("click", () => {
    callme.innerHTML = "+48 000 000 000";
})

let emailme = document.querySelector(".button--sendemail");
console.log(emailme)

emailme.addEventListener("click", () => {
    emailme.innerHTML = "taktak@gmail.com";
})





let myNumber = 5;

let double = number => {
    console.log(`myNumber wynosi ${myNumber}`)
    return number * 2;
};







function nazwa(parametr1, parametr2) {
    // instrukcje
    return wartość; 
}