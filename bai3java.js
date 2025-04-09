// Tạo số ngẫu nhiên từ 1 đến 10
var randomNumber = Math.floor(Math.random() * 10) + 1;
var userGuess;

do {
    userGuess = prompt("Hãy đoán một số từ 1 đến 10:");
    if (userGuess == null) {
        alert("Bạn đã huỷ đoán.");
        break;
    }

    if (parseInt(userGuess) !== randomNumber) {
        alert("Sai rồi! Hãy đoán lại.");
    }
} while (parseInt(userGuess) !== randomNumber);

if (parseInt(userGuess) === randomNumber) {
    alert("Chúc mừng! Bạn đã đoán đúng số " + randomNumber);
}
