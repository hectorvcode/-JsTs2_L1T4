/**
 * Reescribe los bloques de código para usar async/await
 */

/** Ejercicio 01 */

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('success')
    }, 500)
})

export async function resultE1P2(){
    let result =  await myPromise
    console.log("This is a " + result)
}