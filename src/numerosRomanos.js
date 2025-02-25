function numeroARomano(num) {
    const valores = [
        { valor: 1, simbolo: "I" }
    ];

    let resultado = "";

    for (const item of valores) {
        while (num >= item.valor) {
            resultado += item.simbolo;
            num -= item.valor;
        }
    }

    return resultado;
}

export default numeroARomano;
