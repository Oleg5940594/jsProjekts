let minVal = document.getElementById("minVal");
let maxVal = document.getElementById("maxVal");
let amount = document.getElementById("amount");
let randomList = document.getElementById("randomList");
let btn = document.getElementById("btn");
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandom(min, max, amount) {
    let res = "";
    for (let index = 0; index < amount; index++) {
        res += getRandomInt(min, max) + ", ";
    }
    res = res.trim();
    return res.substring(0, res.length - 1);
}

function addRandomList() {
    let min = minVal.value;
    let max = maxVal.value;
    let am = amount.value;

    // Если значения не введены, выводит ошибку
    if (!min || !max || !am) {
        let liElem = document.createElement("li");
        liElem.className = "list-group-item";
        liElem.style = "font-size: 14px; color: red; padding: 7px 15px;";
        liElem.textContent = "No data entered";
        randomList.appendChild(liElem);
        return;
    }
    if (!repeat) {
        let maxAmount = Math.abs(maxVal - minVal) + 1;
        if (amount > maxAmount) {
            amount = maxAmount;
        }
    }

    let strResult = generateRandom(min, max, am);
    let liElem = document.createElement("li");
    liElem.className = "list-group-item";
    liElem.style = "font-size: 14px; padding: 7px 15px;";
    liElem.textContent = strResult;
    randomList.appendChild(liElem);
}

btn.addEventListener("click", addRandomList);















