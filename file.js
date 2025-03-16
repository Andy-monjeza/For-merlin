function generateError() {
    let randomNumber = Math.random();
    let errorMessage = '';

    if (randomNumber < 0.14) {
        errorMessage = "Merlin, you're better than this 😂 Try again!";
    } else if (randomNumber < 0.28) {
        errorMessage = "I knew you were dumb. Keep trying.";
    } else if (randomNumber < 0.42) {
        errorMessage = "Come on 😂";
    } else if (randomNumber < 0.56) {
        errorMessage = "Are you even Merlin, or is this an imposter? 🕵️‍♂️";
    } else if (randomNumber < 0.7) {
        errorMessage = "See girl now 😂";
    } else if (randomNumber < 0.84) {
        errorMessage = "Incorrect! Did you forget your own magic spell? 🪄";
    } else {
        errorMessage = "Access denied! Try again before I report you to… yourself. 😂";
    }

    document.querySelector('.error').innerHTML = errorMessage;
}

function check() {
    let name = document.querySelector('.name').value;
    let password = document.querySelector('.password').value;

    if (name === 'Merlin' && password === 'penguin') {
        document.querySelector('.whole-container').style.display = "none";
        document.querySelector('.the-image').style.display = "none";
        document.querySelector('.inside-container').style.display = "block";
        document.body.style.backgroundImage = "url('info-img.jpg')";
    } else {
        generateError();
    }
}

document.querySelector('.enter').addEventListener("click", check);