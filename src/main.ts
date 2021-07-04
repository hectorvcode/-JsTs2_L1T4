import { getResultE1 } from "./ejercicios-P1/ejercicio1";
import { getResultE2 } from "./ejercicios-P1/ejercicio2";
import { getResultE3 } from "./ejercicios-P1/ejercicio3";
import { getResultE4 } from "./ejercicios-P1/ejercicio4";
import { getResultE1P2 } from "./ejercicios-P2/ejercicio1";
import { getResultE2P2 } from "./ejercicios-P2/ejercicio2";

/**Ejercicios Parte 1 */

//ejercicio1
getResultE1();

//ejercicio2
getResultE2();

//ejercicio3
getResultE3().then((result) => {
    console.log('Result:', result)
  });

//ejercicio4
getResultE4();


/**Ejercicios Parte 2 */

const myPromise: any = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() >= 0.5) {
        resolve(1)
      } else {
        reject('An error has occurred')
      }
    }, 500)
  })

//ejercicio1
getResultE1P2();

//ejercicio2
getResultE2P2(myPromise);

