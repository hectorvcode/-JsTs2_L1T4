/**
 * Reescribe los bloques de código para usar async/await
 */
  
/** Ejercicio 02 */

const myPromise = new Promise<number>((resolve, reject) => {
    let random = Math.random()
    console.log("random number", random)
    setTimeout(() => {
        if (random >= 0.5) {
            resolve(1)
        } else {
            reject('An error has occurred')
        }
    }, 500)
})

export async function resultE2P2(){
    try{
        let result =  await myPromise
        console.log(result + 1)
    }
    catch(err){
        console.log(err)
    }
}
