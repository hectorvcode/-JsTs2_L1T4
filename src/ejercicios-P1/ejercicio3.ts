/**
 * Sigue las indicaciones de cada bloque de código.
 * - Agrega las porciones de código faltantes para que el código se ejecute sin errores. 
 * El código faltante esta indicado por `???`
 */

/**Ejercicio 3 */

const myPromise =  new Promise<number>((success, reject) => {
  setTimeout(() => {
    success(1)
  }, 1000)
})

export async function getResultE3() {
  const result = await myPromise
 
  const result2 = result + 2

  return result2
}

getResultE3().then((result) => {
  console.log('ResultE3:', result)
})