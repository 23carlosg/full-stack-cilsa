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
        btn.classList.add("btn-primary");
    });
}

function estiloAltoContraste() {
    form.classList.add("bg-form");
    labels.forEach(btn => btn.classList.add("txt-white"));
    h2.classList.add("txt-white");
    buttons.forEach(btn => {
        btn.classList.remove("btn-primary");
        btn.classList.add("bg-yellow");
        btn.classList.add("txt-black");
    });
}