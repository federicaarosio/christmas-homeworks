

/***
 * Completare il codice JavaScript successivo in modo che il tag in pagina con id "contenitore"
 * finisca per contenere una griglia 20x20 di <div> celle, ciascuno con dentro uno <span>
 */

const element = document.querySelector("#contenitore");

for (let y = 0; y < 20; y++) {
    const row = document.createElement("div");
    row.classList.add("row")
    element.appendChild(row);
    
    for(let x = 0; x < 20 ; x++) {
        const cella = document.createElement("div");
        const span = document.createElement("span");
        span.innerHTML = (x)
        cella.appendChild(span);
        row.appendChild(cella);
       };
    
};