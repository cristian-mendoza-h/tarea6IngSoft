import numeroARomano from "./numerosRomanos.js";

describe("Conversión de números a romanos", () => {
    it("convierte 1 en I", () => {
        expect(numeroARomano(1)).toBe("I");
    });

    it("convierte 2 en II", () => {
        expect(numeroARomano(2)).toBe("II");
    });

    it("convierte 5 en V", () => {
        expect(numeroARomano(5)).toBe("V");
    });

    it("convierte 7 en VII", () => {
        expect(numeroARomano(7)).toBe("VII");
    });

    it("convierte 10 en X", () => {
        expect(numeroARomano(10)).toBe("X");
    });

    it("convierte 50 en L", () => {
        expect(numeroARomano(50)).toBe("L");
    });
});
