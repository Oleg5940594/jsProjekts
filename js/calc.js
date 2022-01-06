let out = document.getElementById('general');
let result = document.getElementById('result');
let cleanAll = document.getElementById('clean-all');
let cleanOne = document.getElementById('clean');
let buttons = document.querySelectorAll('.btn');
const history = document.getElementById('history');
history.oninput = e => {
    e.target.value = '';
}
document.oninput = function () {
    out.value = out.value.replace(/^[^0-9\-]/g, '');
    out.value = out.value.replace(/[A-Za-zA-Яа-яЁё]/g, '');
    out.value = out.value.replace(/\.+/g, '.');
    out.value = out.value.replace(/\++/g, '+');
    out.value = out.value.replace(/\-+/g, '-');
    out.value = out.value.replace(/\%+/g, '%');
    out.value = out.value.replace(/\/+/g, '/');
    out.value = out.value.replace(/\*+/g, '*');
    out.value = out.value.replace(/\=+/g, '=');
    out.value = out.value.replace(/\(+/g, '(');
    out.value = out.value.replace(/\)+/g, ')');
}

function clearAll() {
    out.value = '';
}

result.onclick = (event) => {
    history.textContent = out.value + ' =';
    out.value = eval(out.value);
}
cleanOne.onclick = (event) => {
    out.value = out.value.slice(0, -1);
}
cleanAll.onclick = (event) => {
    clearAll;
}
document.querySelector('.ac').onclick = clearAll;
for (let value of buttons) {
    value.onclick = (event) => {
        let key = event.target.textContent;
        out.value += key;
        out.value = out.value.replace(/^[^0-9\-]/g, '');
        out.value = out.value.replace(/\.+/g, '.');
        out.value = out.value.replace(/\++/g, '+');
        out.value = out.value.replace(/\-+/g, '-');
        out.value = out.value.replace(/\%+/g, '%');
        out.value = out.value.replace(/\/+/g, '/');
        out.value = out.value.replace(/e.*$/, '*');
    }
}

