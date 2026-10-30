const ajouter = document.getElementById("submit");
const section = document.getElementById("section");

ajouter.addEventListener("click", function (event) {
    event.preventDefault();
    let text = document.getElementById("textarea").value
    const p = document.createElement("p");
    p.textContent = text;
    section.appendChild(p);
});
