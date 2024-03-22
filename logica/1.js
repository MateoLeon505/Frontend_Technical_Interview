// Debes escribir un programa que encuentre la frecuencia con que aparecen los distintos caracteres
// (letras y números) dentro de una cadena de texto. El resultado se devuelve una matriz de objetos.
// Cada uno de estos objetos tiene 2 campos: carácter (caracter) y número de veces que aparece (veces).
// La matriz estará ordenada por el campo carácter. No se diferencia entre mayúsculas y minúsculas ni entre vocales acentuadas.

// Ejemplo:

// contarCar("Hoy ya es día 10")

// deberá devolver:

// {car: '0', veces: 1}
// {car: '1', veces: 1}
// {car: 'a', veces: 2}
// {car: 'd', veces: 1}
// {car: 'e', veces: 1}
// {car: 'h', veces: 1}
// {car: 'i', veces: 1}
// {car: 'o', veces: 1}
// {car: 's', veces: 1}
// {car: 'y', veces: 2}

const contarCar = (value) => {
  const frequency = [];

  const characters = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split("")
    .filter((character) => character !== " ");

  characters.map((character) => {
    const repeated = frequency.some((object) => object.car === character);
    const counter = characters.filter((char) => char === character).length;
    !repeated &&
      frequency.push({
        car: character,
        veces: counter,
      });
  });

  frequency.sort((a, b) => a.car.localeCompare(b.car));

  return frequency;
};

