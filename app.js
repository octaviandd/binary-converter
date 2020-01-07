const binaryInput = document.querySelector('#binary-input');
const decimalInput = document.querySelector('#decimal-input')
const binaryResetBtn = document.querySelector('#binary-reset-button')
const decimalResetBtn = document.querySelector('#decimal-reset-button')
const binaryConfirmBtn = document.querySelector('#binary-confirm-button')
const decimalConfirmBtn = document.querySelector('#decimal-confirm-button')
const decimalResult = document.querySelector('.decimal-result')
const binaryResult = document.querySelector('.binary-result')


binaryConfirmBtn.addEventListener('click', function(){
    var binary = /^[01]+$/
    if (binary.test(binaryInput.value) === false){
        alert('This is not binary')
    }else{
        binaryResult.innerHTML = toBinary(binaryInput.value)
    }  
})

decimalConfirmBtn.addEventListener('click', function(){
    decimalResult.innerHTML = toNatural(decimalInput.value)
})



binaryResetBtn.addEventListener('click', function(){
    binaryInput.value = ''
    binaryResult.innerHTML = ''
})

decimalResetBtn.addEventListener('click', function(){
    decimalInput.value = ''
    decimalResult.innerHTML = ''
})


function toNatural(number){
    let counter = '';
    while (number > 0){
    if(number % 2 === 0){
        number = number / 2
        counter = counter + '0'
        

    }else if(number % 2 !== 0){
        number = Math.trunc(number / 2)
        counter = counter + '1'
    }
   }  
   return counter.split('').reverse().join('')
}




function toBinary(number){
    let y = number.toString().split('');
    let finalString = 0
    let x = y.length
    let z = y.length

    for(i = 0 ; i < z; i++){
        finalString = finalString + (y[0] *( 2 ** (x-1)))
        x--
        y.shift();
    } 
    return finalString
}









