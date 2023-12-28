
/***
 * Completare il codice seguente in modo che, ogni 2 secondi:
 * - Il valore di counter venga aumentato di uno
 * - Counter venga stampato in console
 * Ma solo fino a quando il valore di counter è inferiore a 10
 */

let counter = 0;

let interval = setInterval(() => {
    counter += 1,
    if (counter < 10) {
    console.log(counter);
    } else {
        clearInterval(interval);
    }
    }, 2000);