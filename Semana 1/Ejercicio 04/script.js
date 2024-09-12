let form = document.querySelector("#form");
let labels = document.querySelectorAll("label");
let h2 = document.querySelector("h2");
let buttons = document.querySelectorAll("button");

function estiloNormal() {
    form.classList.remove("bg-form");
    labels.forEach(label => label.classList.remove("txt-white"));
    h2.classList.remove("txt-white");
    buttons.forEach(btn => {
        btn.classList.remove("bg-yellow");
        btn.classList.remove("txt-black");
    });
}

function estiloAltoContraste() {
    form.classList.toggle("bg-form");
    labels.forEach(btn => btn.classList.toggle("txt-white"));
    h2.classList.toggle("txt-white");
    buttons.forEach(btn => {
        btn.classList.remove("btn-primary");
        btn.classList.toggle("bg-yellow");
        btn.classList.toggle("txt-black");
    });
}