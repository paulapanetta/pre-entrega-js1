// funcion kilos a libras
function kilosALibras(kilos) {
    return kilos * 2.20462;
}

// funcion libras a kilos
    function librasAKilos(libras) {
    return libras / 2.20462;
}

    const formatearDecimal = numero => {
    return numero.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function convertir() {
    alert('Bienvenido, este es un conversor de kilos a libras y viceversa!');
    let opcion = prompt('¿Queres convertir 1- Kilos a Libras o 2- Libras a Kilos? \n Ingrese 1 o 2.');
    if (opcion === '1') {
    let kilos = parseFloat(prompt('Ingrese la cantidad de kilos a convertir en libras:'))
    if (isNaN(kilos) || kilos <= 0) {
        alert('Por favor ingrese un numero valido.');
    } else {
        let libras = kilosALibras(kilos);
        alert(`El equivalente en libras de ${formatearDecimal(kilos)} kg es ${formatearDecimal(libras)} lb`);
    }
    } else if (opcion === '2') {
    let libras = parseFloat(prompt('Ingrese la cantidad de libras a convertir en kilos:'))
    if (isNaN(libras) || libras <= 0) {
        alert('Por favor ingrese un numero valido.');
    } else {
        let kilos = librasAKilos(libras);
        alert(`El equivalente en kilos de ${formatearDecimal(libras)} lb es ${formatearDecimal(kilos)} kg`);
    }
    } else {
    alert('Opcion no valida, por favor ingrese 1 o 2 para avanzar.');
    }
    alert('¿Ya terminaste? gracias por usar nuestro conversor!');
}

convertir();