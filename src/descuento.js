function calcularTotal(cantidad, precio) {
  let descuento = 1;
  if (cantidad > 1) descuento = 0.95;
  return cantidad * precio * descuento;
}

export default calcularTotal;
