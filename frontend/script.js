
const ajouter = document.getElementById("click");
const text = document.getElementById("textarea");
const section = document.getElementById("section")

ajouter.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(ajouter);

    fetch("http://127.0.0.1:5000/predict", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            message: text.value
        })
    })
        .then(response => response.json())
        .then(result => {
            let show;
            let col;
            if (result.prediction === "spam") {
                show = "<p>The text entered is spam pay attention</p>";
                col = "red"
            }
            else {
                show = "<p>The text entered is not spam feel free</p>";
                col = "green"
            }

            section.innerHTML = show;
            section.style.color = col;
        });
});
