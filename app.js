let min = 1,
    max = 10,
    menangAngka = randomAngkaBenar(min, max),
    batas = 3;


// Get UI element
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;


// coba lagi

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'coba-lagi'){
        window.location.reload();
    }
})

// Listen

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate
    if(guess === NaN || guess < min || guess > max){
        setMessage(`Masukan angka diantara ${min} sampai ${max}`, 'red');
    }
    if(guess === menangAngka){
        // // Disable input
        //  guessInput.disabled = true;
        // //  ubah border
        // guessInput.style.borderColor = 'green';

        // setMessage(`${menangAngka} benar!!`, 'green');

        gameOver(true, `${menangAngka} adalah angka benar!!`);

    } else {
        // salah
        batas -= 1;
        if(batas === 0){
        //     // lost
        //             // Disable input
        //  guessInput.disabled = true;
        //  //  ubah border
        //  guessInput.style.borderColor = 'red';
 
        //  setMessage(`Game over!!, angka yang benar adalah ${menangAngka}`, 'red');
        gameOver(false, `Game over!!, angka yang benar adalah ${menangAngka}`);

        
        } else{
            // continue
            guessInput.style.borderColor = 'red';

            // clear
            guessInput.value = '';
            setMessage(`Oopps bukan ${guess}, angka yang anda masukan salah, coba lagi!`);
        }
    }
});

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(kalahMenang, msg){
            let color;
            kalahMenang === true ? color = 'green' : color = 'red';
            // Disable input
            guessInput.disabled = true;
            //  ubah border
            guessInput.style.borderColor = color;

    
    
            setMessage(msg);

            // main lagi

            guessBtn.value = 'Coba Lagi';
            guessBtn.className += 'coba-lagi';
            guessInput.value = '';
}

function randomAngkaBenar(min, max){

    return Math.floor(Math.random()*(max-min+1) + min);

}