function calculo_imc(){
    let n1 = parseFloat(document.getElementById("peso").value);
    let n2 = parseFloat(document.getElementById("estatura").value);
    let resultado_imc = document.getElementById("resultado");
    
    if(n1 <= 0 || n2 <= 0){
        resultado_imc.textContent = "Error: los valores deben ser mayores que cero"
    } else{
        let resultado = n1 / (n2 * n2);
        let imagenPeso = document.createElement("img");

        if(resultado <= 18.5){
            imagenPeso.src = "../imagenes/bajopeso.jpg";
            imagenPeso.classList.add("bajoPeso");
        }else if(resultado >= 18.6 && resultado <= 24.9 ){
            imagenPeso.src = "../imagenes/pesonormal.jpg";
            imagenPeso.classList.add("pesoNormal");            
        }else if(resultado >= 25 && resultado <= 29.9 ){
            imagenPeso.src = "../imagenes/sobrepeso.jpg";
            imagenPeso.classList.add("sobrePeso");
        }else if (resultado >= 30 && resultado <= 34.9){
            imagenPeso.src = "../imagenes/obesidad.jpg";
            imagenPeso.classList.add("obesidad");
        }else{
            imagenPeso.src = "../imagenes/obesidadextrema.jpg";
            imagenPeso.classList.add("obesidadExtrema");
        }

        resultado_imc.innerHTML = "IMC: " + resultado.toFixed(2);
        resultado_imc.appendChild(imagenPeso);
    }       
    
}

function recargarPagina() {
    location.reload();
}

