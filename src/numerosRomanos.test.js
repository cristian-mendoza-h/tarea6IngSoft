import numeroARomano from "./numerosRomanos.js";

describe("Conversión de números a romanos", () => {
    it("convierte 1 en I", () => {
        expect(numeroARomano(1)).toBe("I");
    });
});
