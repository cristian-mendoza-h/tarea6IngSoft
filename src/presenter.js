import numeroARomano from "./numerosRomanos.js";

const inputNumero = document.querySelector("#numero");
const form = document.querySelector("#romano-form");
const resultadoDiv = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const numero = Number.parseInt(inputNumero.value);

    if (isNaN(numero) || numero <= 0 || numero > 500) {
        resultadoDiv.innerHTML = "<p>Por favor, ingrese un número válido entre 1 y 500.</p>";
        return;
    }

    resultadoDiv.innerHTML = "<p>" + numeroARomano(numero) + "</p>";
});
