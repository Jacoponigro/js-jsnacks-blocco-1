// prima parola
var primaParola = prompt("inserisci prima parola");
// seconda parola
var secondaParola = prompt("inserisci seconda parola");
// calcolo lunghezza parole e stampa
if (primaParola.length > secondaParola.length) {
  document.getElementById("lunga").innerHTML = primaParola;
  document.getElementById("corta").innerHTML = secondaParola;
}
else if (primaParola.length < secondaParola.length){
  document.getElementById("lunga").innerHTML = secondaParola;
  document.getElementById("corta").innerHTML = primaParola;
}
else {
document.getElementById("corta").innerHTML = "le parole hanno la stessa lunghezza";
}
