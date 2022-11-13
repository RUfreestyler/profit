let professions = 
[
    ['Веб-дизайнер',0],             //0
    ['Системный администратор',0],//1
    ['Cистемный программист',0],   //2
    ['Программист игр',0],          //3
    ['Тестировщик',0],              //4
    ['Разработчик ПО для электроники',0],//5
    ['Специалист по безопасности',0],//6
    ['Системный менеджер',0],          //7
    ['Сценарист игр',0],            //8
    ['Администратор БД',0],         //9
    ['Дата аналитик',0],           //10
    ['СЕО-специалист',0]            //11
]

let allQuestions = 
[
    [
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,0,0,1,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,1,0,0,0],
        [1,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,0,0,0,1,0,1,0,0,0],
        [1,0,0,0,0,0,0,0,1,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [0,0,1,1,1,0,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,0,1,1,0,1],
        [1,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,0,0,0,0,0.5,0,1,0,0,1]
    ],
    [
        [1,0,0,0,1,0,0,1,1,1,0,0],
        [0,1,1,0,0,1,1,0,0,1,1,1],
        [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1,0.5,0.5]
    ],
    [
        [1,0,0,0,0,0,0,0,0,0,0,0],
        [1,0,1,0,0,1,0,0,1,0,0,0],
        [0,0,0,0,1,0,1,1,0,1,1,1],
        [0,0,1,0,1,0,0,0,0,0,0,0]
    ],
    [
        [1,0,1,0,0,1,0,0,1,0,1,1],
        [0,0,0.5,1,0,0.5,1,1,0.5,1,0,0],
    ],
    [
        [0,1,1,1,1,1,1,1,0,1,0,0],
        [0,0,0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0.5,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,0,0]
    ],
    [
        [0,1,0,0,0,0,1,1,0,0,0,0],
        [1,0,1,1,1,1,0,0,1,1,1,1],
        [0,0,0,0,0,0,0,0,1,0,0,0],
    ],
    [
        //доработать
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,1,1,0,1,0,0,0,0,1,0],
        [1,0,0,0,0,0,0,0,1,0,0,0],
        [0,0,0,1,0,0,1,0,0,0,0,1],
        [0,0,1,0,0,1,0,0,0.5,0,1,0]
    ],
    [
        [1,0,0,0,0,0,0,1,0,0,0,0],
        [0,1,1,1,1,1,1,0,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1]
    ]
]


let button = document.getElementById('next');
let questions = document.getElementsByClassName('questionAll');
let i = 1;

button.onclick= function(){
    let exitCode = writeQuestion(i);
    if(exitCode == -1){
        return;
    }

    questions[i-1].classList.add('hidden');
    i++;
    if(i == questions.length + 1){
        showResults();
    }
    questions[i-1].classList.remove('hidden');
}

function writeQuestion(i){
    let qNumber = i;
    let answer = parseInt(getCheckedRadioValue('answer' + qNumber)) - 1;
    if(answer === NaN){
        return -1;
    }

    for (let j = 0; j < professions.length; j++) {
        professions[j][1] += allQuestions[qNumber - 1][answer][j]      
    }
    return 0;
}

function showResults(){
    button.classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    let max = 0;
    let indexOfMax = 0;
    for (let i = 0; i < professions.length; i++) {
        if(professions[i][1] > max){
            max = professions[i][1];
            indexOfMax = i;
        }
    }
    let profession = document.getElementById('profession');
    profession.insertAdjacentHTML('afterbegin', professions[indexOfMax][0]);
}

function getCheckedRadioValue(name) {
    var elements = document.getElementsByName(name);
    for (var i=0, len=elements.length; i<len; ++i)
        if (elements[i].checked) 
            return elements[i].value;
}