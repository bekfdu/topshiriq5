function clearResult() {
    document.getElementById("result").innerText = "";
}

function convert(type) {
    let value = document.getElementById("inputValue").value;
    let result = '';
    let decimal = parseInt(value, 10);

    if (!value) {
        document.getElementById("result").innerText = "Iltimos, son kiriting.";
        return;
    }

    switch (type) {
        case 'bin':
            if (!isNaN(decimal)) {
                result = decimal.toString(2);
                document.getElementById("result").innerText = `Ikilik: ${result}`;
            } else {
                document.getElementById("result").innerText = "Iltimos, to'g'ri son kiriting.";
            }
            break;

        case 'dec':
            let binary = parseInt(value, 2);
            if (!isNaN(binary)) {
                result = binary.toString(10);
                document.getElementById("result").innerText = `O'nlik: ${result}`;
            } else {
                document.getElementById("result").innerText = "Iltimos, to'g'ri ikilik sonini kiriting.";
            }
            break;

        case 'quaternary':
            if (!isNaN(decimal)) {
                result = decimal.toString(4);
                document.getElementById("result").innerText = `To'rtlik: ${result}`;
            } else {
                document.getElementById("result").innerText = "Iltimos, to'g'ri son kiriting.";
            }
            break;

        case 'decFromQuaternary':
            let quaternary = parseInt(value, 4);
            if (!isNaN(quaternary)) {
                result = quaternary.toString(10);
                document.getElementById("result").innerText = `O'nlik: ${result}`;
            } else {
                document.getElementById("result").innerText = "Iltimos, to'g'ri to'rtlik sonini kiriting.";
            }
            break;

        case 'octal':
            if (!isNaN(decimal)) {
                result = decimal.toString(8);
                document.getElementById("result").innerText = `Sakkizlik: ${result}`;
            } else {
                document.getElementById("result").innerText = "Iltimos, to'g'ri son kiriting.";
            }
            break;

        case 'decFromOctal':
            let octal = parseInt(value, 8);
            if (!isNaN(octal)) {
                result = octal.toString(10);
                document.getElementById("result").innerText = `O'nlik: ${result}`;
            } else {
                document.getElementById("result").innerText = "Iltimos, to'g'ri sakkizlik sonini kiriting.";
            }
            break;

        case 'hexadecimal':
            if (!isNaN(decimal)) {
                result = decimal.toString(16).toUpperCase();
                document.getElementById("result").innerText = `O'n oltilik: ${result}`;
            } else {
                document.getElementById("result").innerText = "Iltimos, to'g'ri son kiriting.";
            }
            break;

        case 'decFromHex':
            let hex = parseInt(value, 16);
            if (!isNaN(hex)) {
                result = hex.toString(10);
                document.getElementById("result").innerText = `O'nlik: ${result}`;
            } else {
                document.getElementById("result").innerText = "Iltimos, to'g'ri o'n oltilik sonini kiriting.";
            }
            break;
    }
}
