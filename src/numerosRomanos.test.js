import numeroARomano from "./numerosRomanos.js";

describe("Conversión de números a romanos", () => {
    it("convierte 1 en I", () => {
        expect(numeroARomano(1)).toBe("I");
    });

    it("convierte 2 en II", () => {
        expect(numeroARomano(2)).toBe("II");
    });
});
