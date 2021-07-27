/**
 * Sigue las indicaciones de cada bloque de código.
 * - Agrega las porciones de código faltantes para que el código se ejecute sin errores. 
 * El código faltante esta indicado por `???`
 */

/**Ejercicio 4 */
const myPromise =  new Promise<number>((success, reject) => {
    setTimeout(() => {
        reject('error!')
    }, 1000)
})

export async function getResultE4() {
    try {
            const result = await myPromise
            console.log(result)
    } catch(err) {
            console.error(err)
        }
    }