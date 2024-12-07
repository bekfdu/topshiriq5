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

function convertToQuaternary() {
    let value = document.getElementById("inputValue").value;
    if (value !== '') {
        let decimal = parseInt(value, 10);
        if (!isNaN(decimal)) {
            let quaternary = decimal.toString(4);
            document.getElementById("result").innerText = `To'rtlik: ${quaternary}`;
        } else {
            document.getElementById("result").innerText = "Iltimos, to'g'ri son kiriting.";
        }
    } else {
        document.getElementById("result").innerText = "Iltimos, son kiriting.";
    }
}

function convertFromQuaternary() {
    let value = document.getElementById("inputValue").value;
    if (value !== '') {
        let quaternary = parseInt(value, 4);
        if (!isNaN(quaternary)) {
            document.getElementById("result").innerText = `O'nlik: ${quaternary}`;
        } else {
            document.getElementById("result").innerText = "Iltimos, to'g'ri to'rtlik sonini kiriting.";
        }
    } else {
        document.getElementById("result").innerText = "Iltimos, son kiriting.";
    }
}

function convertToOctal() {
    let value = document.getElementById("inputValue").value;
    if (value !== '') {
        let decimal = parseInt(value, 10);
        if (!isNaN(decimal)) {
            let octal = decimal.toString(8);
            document.getElementById("result").innerText = `Sakkizlik: ${octal}`;
        } else {
            document.getElementById("result").innerText = "Iltimos, to'g'ri son kiriting.";
        }
    } else {
        document.getElementById("result").innerText = "Iltimos, son kiriting.";
    }
}

function convertFromOctal() {
    let value = document.getElementById("inputValue").value;
    if (value !== '') {
        let octal = parseInt(value, 8);
        if (!isNaN(octal)) {
            document.getElementById("result").innerText = `O'nlik: ${octal}`;
        } else {
            document.getElementById("result").innerText = "Iltimos, to'g'ri sakkizlik sonini kiriting.";
        }
    } else {
        document.getElementById("result").innerText = "Iltimos, son kiriting.";
    }
}

function convertToHexadecimal() {
    let value = document.getElementById("inputValue").value;
    if (value !== '') {
        let decimal = parseInt(value, 10);
        if (!isNaN(decimal)) {
            let hexadecimal = decimal.toString(16).toUpperCase();
            document.getElementById("result").innerText = `O'n oltilik: ${hexadecimal}`;
        } else {
            document.getElementById("result").innerText = "Iltimos, to'g'ri son kiriting.";
        }
    } else {
        document.getElementById("result").innerText = "Iltimos, son kiriting.";
    }
}

function convertFromHexadecimal() {
    let value = document.getElementById("inputValue").value;
    if (value !== '') {
        let hexadecimal = parseInt(value, 16);
        if (!isNaN(hexadecimal)) {
            document.getElementById("result").innerText = `O'nlik: ${hexadecimal}`;
        } else {
            document.getElementById("result").innerText = "Iltimos, to'g'ri o'n oltilik sonini kiriting.";
        }
    } else {
        document.getElementById("result").innerText = "Iltimos, son kiriting.";
    }
}
