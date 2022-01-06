let close = document.getElementById('reservation-cancel');
let phoneFriend = document.getElementById('phone-friend');
let fifty = document.getElementById('fifty-fifty');
let win = document.getElementById('win');
let hide = document.getElementById('game-over-container');
let question = document.getElementById('question');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let answer4 = document.getElementById('answer4');
let prizes = [
    {price: document.getElementById("price1")},
    {price: document.getElementById("price2")},
    {price: document.getElementById("price3")},
    {price: document.getElementById("price4")},
    {price: document.getElementById("price5")},
    {price: document.getElementById("price6")},
    {price: document.getElementById("price7")},
    {price: document.getElementById("price8")},
    {price: document.getElementById("price9")},
    {price: document.getElementById("price10")},
    {price: document.getElementById("price11")},
    {price: document.getElementById("price12")},
    {price: document.getElementById("price13")},
    {price: document.getElementById("price14")},
    {price: document.getElementById("price15")},
];

let counterRightQuestion = 1;
let counterQuestions = 1;
let counter = 1;
let questions = [
    {
        question: 'Как заканчивается русская поговорка: «Раз на раз…»?',
        answer1: 'Не приходится',
        answer2: 'Не прибавляется',
        answer3: 'Не будет',
        answer4: 'Не меняется',
    },
    {
        question: 'Сколько материков на планете',
        answer1: '7',
        answer2: '6',
        answer3: '8',
        answer4: '12',
    },
    {
        question: 'Дом, где живут пчелы?',
        answer1: 'Крыша',
        answer2: 'Улей',
        answer3: 'Сарай',
        answer4: 'Чердак',
    },
    {
        question: 'Американский Дед Мороз?',
        answer1: 'Робинзон Крузо',
        answer2: 'Том Круз',
        answer3: 'Санта-Клаус',
        answer4: 'Снегурочка',
    },
    {
        question: 'Сушеный виноград?',
        answer1: 'Улитка',
        answer2: 'Смородина',
        answer3: 'Узвар',
        answer4: 'Изюм',
    },
    {
        question: 'Птичка, которую спасла Дюймовочка?',
        answer1: 'Сорока',
        answer2: 'Ласточка',
        answer3: 'Ворона',
        answer4: 'Орёл',
    },
    {
        question: 'Русский государь, в чье правление у нас появились салфетки за обеденным столом.',
        answer1: 'Иван I ',
        answer2: 'Петр I',
        answer3: 'Юрий Всеволодович',
        answer4: 'Василий Ярославич',
    },
    {
        question: 'Общее между Ш. Холмсом, И. Сталиным и Р. Хасбулатовым.',
        answer1: 'Рост',
        answer2: 'Трубка',
        answer3: 'Одежда',
        answer4: 'Лицо',
    },
    {
        question: ' Сплюснутый квадрат.',
        answer1: 'Ромб',
        answer2: 'Треугольник',
        answer3: 'Параллелограмм',
        answer4: 'Параллелепипед',
    },
    {
        question: 'Получеловек, полулошадь.',
        answer1: 'Химера',
        answer2: 'Минотавр',
        answer3: 'Кентвар',
        answer4: 'Оборотень',
    },
    {
        question: 'Ученый, увидевший насквозь все человечество.',
        answer1: 'Вильгельм Рентген',
        answer2: 'Исаак Ньютон',
        answer3: 'Никола Тесла',
        answer4: 'Альберт Инштейн',
    },
    {
        question: 'Как по-другому называется игра слов?',
        answer1: 'Летопись',
        answer2: 'Стих',
        answer3: 'Каламбур',
        answer4: 'Рифма',
    },
    {
        question: 'Что в немецком языке означает выражение «быть с обезьяной»?',
        answer1: 'Быть пьяным',
        answer2: 'Быть весёлым',
        answer3: 'Быть грустным',
        answer4: 'Быть сухим',
    },
    {
        question: 'Кто 1-м получил Нобелевскую премию по литературе?',
        answer1: 'Романист',
        answer2: 'Драматург',
        answer3: 'Поэт',
        answer4: 'Эссеист',
    },
    {
        question: 'Кто из перечисленных был пажом во времена Екатерины II?',
        answer1: 'Д.И. Фонвизин',
        answer2: 'Г.Р. Державин',
        answer3: 'А.Н. Радищев',
        answer4: 'Н.М. Карамзин',
    },
];
let rightAnswers = [answer1, answer2, answer2, answer3, answer4, answer2, answer2, answer2, answer1, answer3, answer1, answer3, answer1, answer3, answer3];

phoneFriend.addEventListener('click', function (e) {
    if (phoneFriend.classList.contains('disabled')) {
        return;
    }
    phoneFriend.classList.add('disabled');
    rightAnswers[counterQuestions - 1].style.border = '1px solid white';
});

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

fifty.addEventListener('click', function (e) {
    if (fifty.classList.contains('disabled')) {
        return;
    }
    fifty.classList.add('disabled');
    let temp = -1;
    for (i = 0; i < 2; i++) {
        let ans = randomInteger(1, 4);
        let answerId = 'answer' + ans;
        if (answerId == rightAnswers[counterQuestions - 1].id || temp == ans) {
            i--;
            continue;
        }
        temp = ans;
        document.getElementById(answerId).style.opacity = '0';
    }
});

close.addEventListener('click', function (e) {
    window.location.reload();
});
answer1.addEventListener('click', function (event) {
    if (event.target.id == rightAnswers[counterRightQuestion - 1].id) {
        answer1.style.opacity = '1';
        answer2.style.opacity = '1';
        answer3.style.opacity = '1';
        answer4.style.opacity = '1';
        rightAnswers[counterQuestions - 1].style.border = 'none'
        question.textContent = questions[counterQuestions].question;
        answer1.textContent = questions[counterQuestions].answer1;
        answer2.textContent = questions[counterQuestions].answer2;
        answer3.textContent = questions[counterQuestions].answer3;
        answer4.textContent = questions[counterQuestions].answer4;
        counterRightQuestion++;
        counterQuestions++;
        prizes[counter].price.style.background = 'antiquewhite';
        prizes[counter - 1].price.style.background = 'none';
        counter++;
    } else {
        if (counterQuestions % 5 != 0 && counterQuestions > 5) {
            while (counterQuestions % 5 != 0) {
                counterQuestions--;
            }
            let prize = prizes[counterQuestions].price.textContent;
            hide.style.display = 'block';
            win.textContent += prize;
        } else {
            let prize = 0;
            hide.style.display = 'block';
            win.textContent += prize;
        }
        hide.style.display = 'block';
    }
});
answer2.addEventListener('click', function (event) {
    if (event.target.id == rightAnswers[counterRightQuestion - 1].id) {
        answer1.style.opacity = '1';
        answer2.style.opacity = '1';
        answer3.style.opacity = '1';
        answer4.style.opacity = '1';
        rightAnswers[counterQuestions - 1].style.border = 'none'
        question.textContent = questions[counterQuestions].question;
        answer1.textContent = questions[counterQuestions].answer1;
        answer2.textContent = questions[counterQuestions].answer2;
        answer3.textContent = questions[counterQuestions].answer3;
        answer4.textContent = questions[counterQuestions].answer4;
        counterRightQuestion++;
        counterQuestions++;
        prizes[counter].price.style.background = 'antiquewhite';
        prizes[counter - 1].price.style.background = 'none';
        counter++;
    } else {
        if (counterQuestions % 5 != 0 && counterQuestions > 5) {
            while (counterQuestions % 5 != 0) {
                counterQuestions--;
            }
            let prize = prizes[counterQuestions].price.textContent;
            hide.style.display = 'block';
            win.textContent += prize;
        } else {
            let prize = 0;
            hide.style.display = 'block';
            win.textContent += prize;
        }
        hide.style.display = 'block';
    }
});
answer3.addEventListener('click', function (event) {
    if (event.target.id == rightAnswers[counterRightQuestion - 1].id) {
        answer1.style.opacity = '1';
        answer2.style.opacity = '1';
        answer3.style.opacity = '1';
        answer4.style.opacity = '1';
        rightAnswers[counterQuestions - 1].style.border = 'none'
        question.textContent = questions[counterQuestions].question;
        answer1.textContent = questions[counterQuestions].answer1;
        answer2.textContent = questions[counterQuestions].answer2;
        answer3.textContent = questions[counterQuestions].answer3;
        answer4.textContent = questions[counterQuestions].answer4;
        counterRightQuestion++;
        counterQuestions++;
        prizes[counter].price.style.background = 'antiquewhite';
        prizes[counter - 1].price.style.background = 'none';
        counter++;
    } else {
        if (counterQuestions % 5 != 0 && counterQuestions > 5) {
            while (counterQuestions % 5 != 0) {
                counterQuestions--;
            }
            let prize = prizes[counterQuestions].price.textContent;
            hide.style.display = 'block';
            win.textContent += prize;
        } else {
            let prize = 0;
            hide.style.display = 'block';
            win.textContent += prize;
        }
        hide.style.display = 'block';
    }
});

answer4.addEventListener('click', function (event) {
    if (event.target.id == rightAnswers[counterRightQuestion - 1].id) {
        answer1.style.opacity = '1';
        answer2.style.opacity = '1';
        answer3.style.opacity = '1';
        answer4.style.opacity = '1';
        rightAnswers[counterQuestions - 1].style.border = 'none'
        question.textContent = questions[counterQuestions].question;
        answer1.textContent = questions[counterQuestions].answer1;
        answer2.textContent = questions[counterQuestions].answer2;
        answer3.textContent = questions[counterQuestions].answer3;
        answer4.textContent = questions[counterQuestions].answer4;
        counterRightQuestion++;
        counterQuestions++;
        prizes[counter].price.style.background = 'antiquewhite';
        prizes[counter - 1].price.style.background = 'none';
        counter++;
    } else {
        if (counterQuestions % 5 != 0 && counterQuestions > 5) {
            while (counterQuestions % 5 != 0) {
                counterQuestions--;
            }
            let prize = prizes[counterQuestions].price.textContent;
            hide.style.display = 'block';
            win.textContent += prize;
        } else {
            let prize = 0;
            hide.style.display = 'block';
            win.textContent += prize;
        }
        hide.style.display = 'block';
    }
});
