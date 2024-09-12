let form = document.querySelector("#form");
let labels = document.querySelectorAll("label");
let h2 = document.querySelector("h2");
let buttons = document.querySelectorAll("button");

function estiloNormal() {
    form.classList.toggle("bg-form");
    labels.forEach(label => label.classList.toggle("txt-white"));
    h2.classList.toggle("txt-white");
    buttons.forEach(btn => {
        btn.classList.toggle("bg-yellow");
        btn.classList.toggle("txt-black");
        btn.classList.remove("btn-primary");
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