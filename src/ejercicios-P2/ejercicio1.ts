/**
 * Reescribe los bloques de código para usar async/await
 */
  
const myPromise = new Promise((resolve) => {
    setTimeout(() => {
    resolve('success')
    }, 500)
})
      
export async function getResultE1P2(){
    const result = await myPromise;
    console.log("This is a ", result);
}
