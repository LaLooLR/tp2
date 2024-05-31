const formulario = document.getElementById('formulario');
const pesoinput = document.getElementById('peso');
const estaturainput = document.getElementById('estatura');

formulario.onsubmit = (e) => {
   e.preventDefault();
   const peso = parseFloat(pesoinput.value);
   const estatura = parseFloat(estaturainput.value) / 100 ; // Convertir cm a metros

   const resultadoIMC = peso / (estatura * estatura);
   alert(`El IMC es: ${resultadoIMC.toFixed(2)}`);

   
};
   