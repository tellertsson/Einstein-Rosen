let footnotes = {}
let expanded = false;

function footnote(n) {
    const footnote = document.getElementById("footnote" + n);
    footnote.style.display = footnotes[n] ? "none" : "block";
    footnotes[n] = footnotes[n] ? false : true;
}

function expandqr() {
    const small_element = document.getElementById("qr-code");
    const large_element = document.getElementById("qr-code-page");
    if (!expanded) {
        small_element.className = "expanded";
        large_element.style.height = "100vh";
    } else {
        small_element.className = "";
        large_element.style.height = "0";
    }
    expanded = !expanded;
}