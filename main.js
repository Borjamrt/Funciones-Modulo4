let contador = 0;
function aumentar(){
    contador += 1;
    document.getElementById("numero").innerText = contador;
}
function decrementar(){
  if   (contador >0){
    contador -=1;
  }
    document.getElementById("numero").innerText = contador;
}
function reset(){
    contador =0;
    document.getElementById("numero").innerText = contador;
}


function actualizarNumero() {
    // Formatear el número para que siempre tenga dos dígitos
    const numeroFormateado = contador.toString().padStart(2, "0");
    document.getElementById("numero").innerText = numeroFormateado;
}