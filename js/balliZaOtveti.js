let professions = 
[
    ['Веб-дизайнер',0, 'prof5.html', 'pdfProfessions\\WEB-dizayner.pdf'],             //0
    ['Системный администратор',0, 'prof4.html','pdfProfessions\\Sistemny_administrator.pdf'],//1
    ['Cистемный программист',0, 'prof7.html','pdfProfessions\\Sistemny_programmist.pdf'],   //2
    ['Программист игр',0, 'prof1.html','pdfProfessions\\Programmist_igr.pdf'],          //3
    ['Тестировщик',0, 'prof2.html','pdfProfessions\\Testirovschik.pdf'],              //4
    ['Разработчик ПО для электроники',0, 'prof8.html','pdfProfessions\\Razrabotchik_programm_dlya_personalnoy_elektroniki.pdf'],//5
    ['Специалист по безопасности',0, 'prof3.html','pdfProfessions\\Spetsialist_po_bezopasnosti.pdf'], //6
    ['Системный менеджер',0, 'prof9.html','pdfProfessions\\Sistemny_menedzher.pdf'],          //7
    ['Сценарист игр',0, 'prof10.html','pdfProfessions\\Stsenarist_igr.pdf'],            //8
    ['Администратор БД',0, 'prof11.html', 'pdfProfessions\\Administrator_bazy_dannykh.pdf'],        //9
    ['Дата аналитик',0, 'prof6.html', 'pdfProfessions\\Data_Scientist.pdf'],           //10
    ['СЕО-специалист',0, 'prof12.html', 'pdfProfessions\\SEO-spetsialist.pdf']            //11
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
        [1,0,0,0,1,0,0,0,1,0,0,1],
        [1,0,1,0,0,1,0,0,1,0,0,0],
        [0,0,0,0,0,0,1,0,0,0,1,1],
        [1,0.5,0,0,0,1,0,0,1,0,0,0]
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
//  [
//      доработать
//      [0,0,0,0,0,0,0,0,0,0,0,0],
//      [0,0,0,0,0,0,0,0,0,0,0,0],
//      [0,0,0,0,0,0,0,0,0,0,0,0],
//      [0,0,0,0,0,0,0,0,0,0,0,0]
//  ],
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
        return;
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
    document.getElementById('lastButton1').classList.remove('hidden');
    document.getElementById('lastButton2').classList.remove('hidden');
    document.getElementById('lastButton1').href = professions[indexOfMax][2];
    document.getElementById('lastButton2').href = professions[indexOfMax][3];

}

function getCheckedRadioValue(name) {
    var elements = document.getElementsByName(name);
    for (var i=0, len=elements.length; i<len; ++i)
        if (elements[i].checked) 
            return elements[i].value;
}
