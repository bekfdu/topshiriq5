function convertToBinary() {
    let value = document.getElementById("inputValue").value;
    if (value !== '') {
        let decimal = parseInt(value, 10);
        if (!isNaN(decimal)) {
            let binary = decimal.toString(2);
            document.getElementById("result").innerText = `Ikilik: ${binary}`;
        } else {
            document.getElementById("result").innerText = "Iltimos, to'g'ri son kiriting.";
        }
    } else {
        document.getElementById("result").innerText = "Iltimos, son kiriting.";
    }
}

function convertToDecimal() {
    let value = document.getElementById("inputValue").value;
    if (value !== '') {
        let binary = parseInt(value, 2);
        if (!isNaN(binary)) {
            document.getElementById("result").innerText = `O'nlik: ${binary}`;
        } else {
            document.getElementById("result").innerText = "Iltimos, to'g'ri ikilik sonini kiriting.";
        }
    } else {
        document.getElementById("result").innerText = "Iltimos, son kiriting.";
    }
}
