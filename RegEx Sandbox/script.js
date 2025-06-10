let regexPattern = document.getElementById("pattern");
let stringToTest = document.getElementById("test-string");
let testButton = document.getElementById("test-btn");
let testResult = document.getElementById("result");
let caseInsensitiveFlag = document.getElementById("i");
let globalFlag = document.getElementById("g");

function getFlags(){
    let flags = "";
    if (caseInsensitiveFlag.checked) flags += "i";
    if (globalFlag.checked) flags += "g";
    return flags;
}

testButton.addEventListener("click",function(){
    let regex = new RegExp(regexPattern.value,getFlags());
    if (!regex) return;

    let testStr = stringToTest.textContent;

    if (regex.test(testStr))
        {
            let matches = testStr.match(regex);
            let highlighted = testStr.replace(regex, "<span class='highlight'>$&</span>");
            stringToTest.innerHTML = highlighted;
            testResult.textContent = matches.join(", ");
        }
        else{
            testResult.textContent ="no match";
        }

})