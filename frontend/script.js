
const ajouter = document.getElementById("click");
const text = document.getElementById("textarea");
const section = document.getElementById("section")

ajouter.addEventListener("click", function (event) {
    event.preventDefault();
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
                section.style.color = "#B91C1C";
                section.style.backgroundColor = "#FEE2E2";
                show = "<p>⚠️ Spam Detected! This message appears suspicious. Be cautious!</p>";
            }
            else {
                section.style.color = "#15803D";
                section.style.backgroundColor = "#ffffff";
                show = "<p>✅ No Spam Detected! This message appears to be safe.</p>";
            }

            section.innerHTML = show;
        });
});
