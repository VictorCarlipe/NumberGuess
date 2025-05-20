//declara o número aleatório
let randomNumber = Math.round(Math.random() * 100);

//elementos
const iGuess = document.getElementById("guess");
const dinfoContainer = document.getElementById("info-cont");
const pmessage = document.getElementById("message");
const sattempts = document.getElementById("attempts");
const dcontent = document.getElementById("content");
const bsend  = document.getElementById("send");

//variaveis internas
let attempts    = 0;

//validação com RegEx para permitir inserir apenas digitos
iGuess.addEventListener("keydown", function(evt) {
    if (!/^\d$/.test(evt.key) && !evt.key === "Backspace" && !evt.key === "Enter"){
        evt.preventDefault();
    }
});

document.getElementById("send").addEventListener("click", (event)=>{
    event.preventDefault();

    if (dinfoContainer.classList.contains("disappear")){
        dinfoContainer.classList.remove("disappear");
    }

    if (bsend.textContent === "De novo!"){
        attempts = 0;

        if (!dinfoContainer.classList.contains("disappear")){
           dinfoContainer.classList.add("disappear");
        }

        iGuess.focus();
        bsend.textContent ="Chutar";
        randomNumber = Math.round(Math.random() * 100);        
        dcontent.replaceChildren();


    }else{

        if (iGuess.value === "" || iGuess.value > 100 || iGuess.value <= 0){
            pmessage.textContent = "Insira um valor entre 1 e 100 para o seu Palpite"
            iGuess.focus();
            return;
        }

        attempts++

        if (iGuess.value > randomNumber){
            pmessage.textContent = "O número aleatório é";
            let messageAux = document.createElement("span");
            messageAux.textContent = "Menor que ";
            messageAux.classList.add("less");

            let messageGuess = document.createElement("strong");
            messageGuess.textContent = iGuess.value;

            let attempt = document.createElement("p");
            attempt.classList.add("less");
            attempt.textContent = iGuess.value;

            pmessage.appendChild(messageAux);
            pmessage.appendChild(messageGuess);
            dcontent.appendChild(attempt);

            iGuess.focus();
        }else if (iGuess.value < randomNumber){
            pmessage.textContent = "O número aleatório é";
            let messageAux = document.createElement("span");
            messageAux.textContent = "Maior que ";
            messageAux.classList.add("greater");

            let messageGuess = document.createElement("strong");
            messageGuess.textContent = iGuess.value;

            let attempt = document.createElement("p");
            attempt.classList.add("greater");
            attempt.textContent = iGuess.value;

            pmessage.appendChild(messageAux);
            pmessage.appendChild(messageGuess);
            dcontent.appendChild(attempt);

            iGuess.focus();

        }else if (iGuess.value == randomNumber.toString()){
            pmessage.textContent = "Sim, o número aleatório é " + randomNumber + ". Parabéns, Você acertou! ";

            bsend.textContent = "De novo!";
            bsend.focus();
        }

        sattempts.textContent = attempts;
        if (attempts === 10){
                pmessage.textContent = "Suas tentativas acabaram! O número aleatório era " + randomNumber;

            bsend.textContent = "De novo!";
            bsend.focus();
        }
    }

    iGuess.value = "";
});