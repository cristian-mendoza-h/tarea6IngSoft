function numeroARomano(num) {
    const valores = [
        { valor: 500, simbolo: "D" },
        { valor: 400, simbolo: "CD" },
        { valor: 100, simbolo: "C" },
        { valor: 90, simbolo: "XC" },
        { valor: 50, simbolo: "L" },
        { valor: 40, simbolo: "XL" },
        { valor: 10, simbolo: "X" },
        { valor: 9, simbolo: "IX" },
        { valor: 5, simbolo: "V" },
        { valor: 4, simbolo: "IV" },
        { valor: 1, simbolo: "I" }
    ];

    let resultado = "";
    let i = 0;

    while (num > 0) {
        if (num >= valores[i].valor) {
            resultado += valores[i].simbolo;
            num -= valores[i].valor;
        } else {
            i++;
        }
    }

    return resultado;
}

export default numeroARomano;

