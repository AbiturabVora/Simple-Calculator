function appendToResult(value) {
    let result = document.getElementById('result').innerText;
    if (result === '0') {
        document.getElementById('result').innerText = value;
    } else {
        document.getElementById('result').innerText += value;
    }
}

function calculateResult() {
    const result = eval(document.getElementById('result').innerText);
    document.getElementById('result').innerText = result;
}

function clearResult() {
    document.getElementById('result').innerText = '0';
}

function deleteLast() {
    let result = document.getElementById('result').innerText;
    document.getElementById('result').innerText = result.slice(0, -1);
} /*game*/
