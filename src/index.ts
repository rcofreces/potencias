let base: number = Number(prompt("Ingrese la base"));
let exponente: number = Number(
  prompt("Ingrese el exponente (debe ser igual o mayor a cero")
);

function calcularPotencias(base: number, exponente: number): number {
  let resultado: number = 1;
  if (exponente === 0) {
    return 1;
  } else {
    for (let i: number = 1; i <= exponente; i++) {
      resultado *= base;
    }
  }
  return resultado;
}

if (exponente >= 0) {
  console.log("El resultado es:", calcularPotencias(base, exponente));
} else {
  console.log("ERROR: El exponente es menor a cero");
}
