/**
 * Reescribe los bloques de código para usar async/await
 */
  
 const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() >= 0.5) {
        resolve(1)
      } else {
        reject('An error has occurred')
      }
    }, 500)
  })
  
export async function getResultE2P2(result:Function){
    try {
        const resultado = await result;
        console.log(resultado);
      }catch (error){
        console.log(error);
      }
}
