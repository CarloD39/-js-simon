var numbersAllert = [];
var userNumbers = [];
var identicalNumbers =[];

var maxNumberLenght = 5;


while(numbersAllert.length < maxNumberLenght){
    var randoNumber = Math.floor(Math.random()*100);
    
    if(!numbersAllert.includes(randoNumber)){
        numbersAllert.push(randoNumber);
    }
   
}alert('RESULTS :' + ' ' + numbersAllert);



var seconds =3;
var finalResult = document.getElementById('same-numbers');

 var time = setTimeout(function() { //come far apparire il countdown a schermo?;

    while(userNumbers.length < 5) {
        var userNumber = parseInt(prompt('inserisci il numero che ricordi'));
        userNumbers.push(userNumber);

        if(isNaN(userNumber)){
            alert('questo non è un numero');
            // come faccio ad inserire il numero corretto, perche cosi mi da solo quattro prompt;
            var userNumber = parseInt(prompt('inserisci il numero che ricordi'));

        } else if(numbersAllert.includes(userNumber)) {
            identicalNumbers.push(userNumber);

            finalResult.innerHTML = 'Hai indovinato un totale di' + identicalNumbers.length + 'numeri.' + ' ' + 'e sono:' + identicalNumbers;

        } else if(!numbersAllert.includes(userNumber)){

            finalResult.innerHTML = 'Hai indovinato 0 numeri! La memoria non ti ha aiutato...';

        }else if(numbersAllert.every(i => userNumber.includes(i))){ //come controllare che ogni elemento si apresente?;
            finalResult.innerHTML = 'Bravo! Hai trova tutti e ' + identicalNumbers.length + 'i numeri' + '' + 'infatti son:' + identicalNumbers;
        }          

    }    

},seconds * 1000);



