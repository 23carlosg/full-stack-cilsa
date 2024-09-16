function loadNavbar() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'navbar.html', true);
    xhr.onload = function() {
        if (this.status === 200) {
            document.getElementById('navbar').innerHTML = this.responseText;
        }
    };
    xhr.send();
}
window.onload = loadNavbar;