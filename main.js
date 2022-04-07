/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

- document.querySelector() oppure getElementById()
- div nell'html
- var numbers = array 
- Math.random | copio da w3s la funzione

 */

//selzionare elemento della dom  dove inserire i numeri casuali

//inizializzo var dove salvare i numeri
let randomElement = document.querySelector('.popup')
//creare i numeri casuali 


function generateNumbers(total_numbers, numbers_limit) {
    let randomNumbers = []

    while (randomNumbers.length !== total_numbers) {
        const numbers = (Math.floor(Math.random() * numbers_limit))
        if (!randomNumbers.includes(numbers)){
            randomNumbers.push(numbers)
        }      
    }

     return randomNumbers
} 
//ora la funzione genererà 5 numeri random da 1 a 100
const randomNumber = generateNumbers(5,100)
randomElement.innerHTML = randomNumber

console.log(randomNumber);

randomElement.innerHTML = `memorizza questi numeri ${randomNumber}`
//imposto il timer a 30secondi
setTimeout(() => {
    //l'untente deve inserire uno alla volta i numeri che ha visto precedentemente a schermo tramite prompt
    //faccio un ciclo e chiedo all'utente di inserire i numeri
    const user_try =[]
    for (let i =0; i<5; i++){
        let userNumber = Number(prompt('inserisci uno dei numeri che hai visto prima'))
        console.log(userNumber);
        //inserisci nell'array di tentaitvi solo se i numeri inseriti combaciano con l'array popup e se non sono già dentro l'array dei tentativi
        if ((randomNumber.includes(userNumber)) && !user_try.includes(userNumber)){
            user_try.push(userNumber)
        }
    }
    console.log(user_try);
    /* Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */
   alert(`hai indovinato ${user_try.length} / ${randomNumber.length}`)
}, 30000)

setTimeout(() => {
    document.querySelector('.popup').style.display = "none"
}, 29500)
//  



