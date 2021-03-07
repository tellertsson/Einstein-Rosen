let footnotes = {}

function footnote(n) {
    const footnote = document.getElementById("footnote" + n);
    footnote.style.display = footnotes[n] ? "none" : "block";
    footnotes[n] = footnotes[n] ? false : true;
}