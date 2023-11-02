function checkInput(input) {
    const text = input.value;
    const textResult = document.getElementById('textResult');
    if (text.match(/(https?:\/\/.*\..*)/)) {
        textResult.textContent = "true";
        textResult.className = "valid";
    } else {
        textResult.textContent = "false";
        textResult.className = "invalid";
    }
}

function checkEmail(input) {
    const email = input.value;
    const emailResult = document.getElementById('emailResult');
    if (email.match(/.*@.*\..*/)) {
        emailResult.textContent = "true";
        emailResult.className = "valid";
    } else {
        emailResult.textContent = "false";
        emailResult.className = "invalid";
    }
}