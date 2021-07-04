/**
 * Sigue las indicaciones de cada bloque de código.
 * - Agrega las porciones de código faltantes para que el código se ejecute sin errores. 
 * El código faltante esta indicado por `???`
 */

/**Ejercicio 1 */

const myPromise =  new Promise((res, rej) => {
    setTimeout(() => {
      res('Success')
    }, 850)
  })
  
 export async function getResultE1() {
    const result = await myPromise
    
    console.log('Result:', result) // log: 'Result: Success'
  }
  

