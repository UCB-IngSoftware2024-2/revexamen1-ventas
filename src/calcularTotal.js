function calcularTotal(cantidad, precio) {
  let descuento = 1;
  if (cantidad > 1 && cantidad < 5) descuento = 0.95;
  if (cantidad > 4) descuento = 0.9;
  return cantidad * precio * descuento;
}

export default calcularTotal;
