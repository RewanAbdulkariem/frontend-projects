const btnCheck = document.getElementById('check-btn');
const inputText = document.getElementById('text-input');
const resultDiv = document.getElementById('result');

function checkPalindrome(str) {
    let text = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (let i = 0; i < text.length / 2; i++){
        if (text[i] !== text[text.length - i - 1]){
            resultDiv.textContent = `${str} is not a palindrome`;
            return;
        }
        resultDiv.textContent = `${str} is a palindrome`;
    }
}
btnCheck.addEventListener('click', function(){
    let inputValue = inputText.value.trim();
    if (inputValue === '') {
        alert('Please input a value');
    } else if (inputValue === 'A') {
        resultDiv.textContent = 'A is a palindrome';
    } else {
        checkPalindrome(inputValue);
    }
    return;
})