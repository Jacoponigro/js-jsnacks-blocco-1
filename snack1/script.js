// primo numero
var primoNumero = prompt("inserisci primo numero");
// secondo numero
var secondoNumero = prompt("inserisci secondo numero");
// stampa maggiore
if (primoNumero > secondoNumero) {
  document.getElementById("maggiore").innerHTML = primoNumero;
}
else if (secondoNumero > primoNumero) {
  document.getElementById("maggiore").innerHTML = secondoNumero;
}
else {
  document.getElementById("maggiore").innerHTML = "I numeri sono uguali";
}
