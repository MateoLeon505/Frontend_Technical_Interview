/*
 Dado un array de números enteros positivos, donde cada uno
 representa unidades de bloques apilados, debemos calcular cuantas unidades
 de agua quedarán atrapadas entre ellos.
 
 - Ejemplo: Dado el array [4, 0, 3, 6, 1, 3].
 
   💧💧💧🪣💧💧
   💧💧💧🪣💧💧
   🪣💧💧🪣💧💧
   🪣💧🪣🪣💧🪣
   🪣💧🪣🪣💧🪣
   🪣💧🪣🪣🪣🪣
  
   Representando bloque con 🪣︎ y agua con 💧, quedarán atrapadas 7 unidades
   de agua. Suponemos que existe un suelo impermeable en la parte inferior
   que retiene el agua.
 */

const waterBlocks = (value) => {
  const length = value.length;
  if (length < 3) return 0;
  let trappedWater = 0;
  const maxLeftBlock = new Array(length).fill(0);
  const maxRightBlock = new Array(length).fill(0);

  maxLeftBlock[0] = value[0];
  maxRightBlock[length - 1] = value[length - 1];

  for (let i = 1; i < length; i++) {
    maxLeftBlock[i] = Math.max(maxLeftBlock[i - 1], value[i]);
  }

  for (let i = length - 2; i >= 0; i--) {
    maxRightBlock[i] = Math.max(maxRightBlock[i + 1], value[i]);
  }

  for (let i = 0; i < length; i++) {
    trappedWater += Math.max(
      0,
      Math.min(maxLeftBlock[i], maxRightBlock[i]) - value[i]
    );
  }

  return trappedWater;
};

