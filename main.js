/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

let pop_numbers 
let popArray = []

for (let i = 0; i < 5; i++) {
    pop_numbers = (Math.floor(Math.random() * 100))
    popArray.push(pop_numbers)
    document.querySelector('.popup').innerHTML = popArray
    console.log(popArray)
}

setTimeout(function(){
    document.querySelector('.popup').style.display = "none"  
}, 6000)


setTimeout(function(){
    let answers =[]

    for (let i = 0; i < popArray.length; i++) {
        answers.push(Number(prompt(`inserisci il ${i} numero`)))
        if (answers[i] === popArray[i]){
            console.log(`corretto ${i + 1}/5`);
        }     
    }

    if (answers != popArray){
        document.querySelector('.popup').innerHTML = 'complimenti, ottima memoria'
    }
}, 5000)


