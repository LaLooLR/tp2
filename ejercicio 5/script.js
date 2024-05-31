const ladoA = $("ladoA");
const ladoB = $("ladoB");
const ladoC = $("ladoC");
const area = $("area");

area.onclick=()=>{

    const diferencia = ladoA.value - ladoC.value;
    
    const resultadotriangulo =  (diferencia * ladoC.value) / 2 ;
    
    const resultadorectangulo = +ladoB.value + +ladoC.value;
    
    resultadoarea = +resultadorectangulo + +resultadotriangulo;
    alert(`El resultado del Área es: ${resultadoarea}m`);
};
function $(elemento) {
        return document.getElementById(elemento);
    };