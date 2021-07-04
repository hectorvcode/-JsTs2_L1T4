/**
 * Sigue las indicaciones de cada bloque de código.
 * - Agrega las porciones de código faltantes para que el código se ejecute sin errores. 
 * El código faltante esta indicado por `???`
 */

/**Ejercicio 2 */

const myPromise =  new Promise<number>((success, reject) => {
    setTimeout(() => {
      success(1)
    }, 1000)
  })
  
  export async function getResultE2() {
    const result = await myPromise
   
    const result2 = result + 2
  
    console.log('Result:', result2) // log: 'Result: 3'
  }
