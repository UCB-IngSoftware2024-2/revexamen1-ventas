import calcularTotal from "./descuento.js";
// 1 unidad: Precio normal (sin calcularTotal).

describe("La funcion calcularTotal debe descontar", () => {
  it("No hay calcularTotal para menos de 1 producto de compra", () => {
    const cantidad = 1;
    const precio = 10;
    const resultadoEsperado = cantidad * precio;
    expect(calcularTotal(cantidad, precio)).toEqual(resultadoEsperado);
  });
  it("No hay calcularTotal para mas de 1 producto de compra", () => {
    const cantidad = 2;
    const precio = 10;
    const resultadoEsperado = cantidad * precio * 0.95;
    expect(calcularTotal(cantidad, precio)).toEqual(resultadoEsperado);
  });
});
