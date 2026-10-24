const ajouter = document.getElementById("submit");
const section = document.getElementById("section");

ajouter.addEventListener("click", function (event) {
    event.preventDefault();

    const p = document.createElement("p");
    p.textContent = "Bonjour !";

    section.appendChild(p);
});
