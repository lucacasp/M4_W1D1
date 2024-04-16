/* crea una funzione che controlli due numeri interi. Ritorna "true" se uno dei due è 50 o se la somma dei due è 50. Altrimenti ritorna "false" */

let myFunction = (n1, n2) => {
    sum = n1 + n2;
    if (n1 === 50 || n2 === 50 || sum >= 50) {
        return true;
    } else {
        return false;
    }
};

console.log(myFunction(20, 30));


/* crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata */

let removeChar = (str, n) => {
    return str.slice(0, n) + str.slice(n + 1);
}

console.log(removeChar('hello', 3));

/* crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna "true" se rispecchiano queste condizioni, altrimenti ritorna "false" */

let myFunction2 = (n1, n2) => {
    if (n1 >= 40 && n1 <= 60 || n2 >= 40 && n2 <= 60 || n1 >= 70 && n1 <= 100 || n2 >= 70 && n2 <= 100) {
        return true;
    } else {
        return false;
    }   
}

console.log(myFunction2(45, 90));

/* crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "Los" o "New", altrimenti ritorni "false" */

let myFunction3 = (str) => {
    if (str.startsWith('Los') || str.startsWith('New')) {  //funzione .startsWith
        return str;
    } else {
        return false;
    }   
}

console.log(myFunction3('Los Naples'));

/* crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro */

let myFunction4 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(myFunction4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/* crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna "true", altrimenti ritorna "false" */

let myFunction5 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1 || arr[i] === 3) {
            return false;
        }
    }
    return true;
}
console.log(myFunction5([2, 4, 5, 6, 7, 8, 9, 10]));

/* crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
Angolo acuto: meno di 90° => ritorna "acuto"
Angolo ottuso: tra i 90° e i 180° => ritorna "ottuso
Angolo retto: 90° => ritorna "retto
Angolo piatto: 180° => ritorna "piatto */

var myFunction6 = (n) => {
    if(n > 0 && n < 90) {
        return 'acuto';
    } else if (n === 90) {
        return 'retto';
    } else if (n > 90 && n < 180) {
        return 'ottuso';
    } else if (n === 180) {
        return 'piatto';
    }
}
console.log(myFunction6(90));

/* crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino" deve ritornare "FIAT" */

var myFunction7 = (str) => {
    let arr = str.split(' ');
    let acronym = '';
    for (let i = 0; i < arr.length; i++) {
        acronym += arr[i][0];//.toUpperCase();
    }
    return acronym;
}

console.log(myFunction7('Gennaro Esposito Rivenditore di Calzini'));