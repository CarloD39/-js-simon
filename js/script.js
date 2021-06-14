// var boxNumbers = document.getElementsByClassName('numeri-randomici')[0];
var numbersAllert = [];
var userNumbers = [];
var identicalNumbers =[];


while(numbersAllert.length < 5){
    var randoNumber = Math.floor(Math.random()*100);
    
    if(!numbersAllert.includes(randoNumber)){
        numbersAllert.push(randoNumber);
    }
   
}alert('RESULTS :' + ' ' + numbersAllert);



var seconds = 5;
var finalResult = document.getElementsByClassName('same-numbers')[0];

setTimeout(function() {

    while(userNumbers.length < 5) {
        var userNumber = parseInt(prompt('inserisci il numero che ricordi'));
        userNumbers.push(userNumber);

        if(numbersAllert.includes(userNumber)) {
            identicalNumbers.push(userNumber);
        }
    }

    finalResult.innerHTML = 'Hai indovinato un totale di' + identicalNumber + 'numeri.' + ' ' + 'e sono:' + identicalNumbers;

  
},seconds * 1000);


// var seconds = 30;
// var outputCountdown2 = document.getElementsByClassName('output-timer')[0];

// var clock = setInterval(function() {

//     outputCountdown2.innerHTML = seconds;
//     seconds--;

//     while(userNumbers.length < 5) {
//         var userNumber = parseInt(prompt('inserisci il numero che ricordi'));
//         userNumbers.push(userNumber);

//         if(numbersAllert.includes(userNumber)) {
//             identicalNumbers.push(userNumber);
//         }
//     }

//     alert('Hai indovinato un totale di' + identicalNumber + 'numeri.' + ' ' + 'e sono:' + identicalNumbers);
  
// },1000);

