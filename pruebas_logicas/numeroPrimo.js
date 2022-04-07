function esPrimo(numero) {
  for (let i = 2, raiz = Math.sqrt(numero); i <= raiz; i++)
    if (numero % i === 0) return false;
  return numero > 1;
}

for (let x = 0; x <= 100; x++) {
  if (esPrimo(x)) console.log(x);
}
