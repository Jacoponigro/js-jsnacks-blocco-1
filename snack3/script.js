// numero
var primoNumero = prompt("inserisci numero");
var numeroSuccessivo = (primoNumero + 1);
// verifica primo numero
if (primoNumero % 2 == 0) {
  document.getElementById("numero").innerHTML = primoNumero;
}
else {
  document.getElementById("numero").innerHTML = numeroSuccessivo;
}
