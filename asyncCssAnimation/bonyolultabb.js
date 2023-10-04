document.addEventListener("DOMContentLoaded", function () {
    const answerInput = document.getElementById("answer");
    const submitButton = document.getElementById("submitButton");
    const resultDiv = document.getElementById("result");

    submitButton.addEventListener("click", function () {
        const userAnswer = answerInput.value;

        if (userAnswer === "42") {
            resultDiv.style.backgroundColor = "#87cefa"; // Helyes válasz háttérszíne
            resultDiv.style.color = "#00008b"; // Helyes válasz szövegszíne
            resultDiv.style.fontSize = "24px"; // Helyes válasz betűmérete
            resultDiv.textContent = "Helyes válasz! 🎉";
        } else {
            resultDiv.style.backgroundColor = "#00008b"; // Rossz válasz háttérszíne (sötétkék)
            resultDiv.style.color = "#fff"; // Rossz válasz szövegszíne (fehér)
            resultDiv.style.fontSize = "18px"; // Rossz válasz betűmérete
            resultDiv.textContent = "Gondolkozz stopposként! 🤔";
        }

        resultDiv.classList.remove("hidden");
        setTimeout(function () {
            resultDiv.classList.add("hidden");
        }, 2000); // 2 másodperc után eltűnik
        
    });

});
