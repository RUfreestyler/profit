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

let button = document.getElementById('next');
let questions = document.getElementsByClassName('questionAll');
let i = 0;

button.onclick= function(){
    if(i == 0){
        writeQuestion1();
    }
    else if(i == 1){
        writeQuestion2();
    }
    questions[i].classList.add('hidden');
    i++;
    if(i == 2){
        showResults();
    }
    questions[i].classList.remove('hidden');
}

function showResults(){
    button.classList.add('hidden');
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
    

function writeQuestion1(){
    var rates = getCheckedRadioValue('answer1');
    if(rates =='a1'){
        professions[0][1]+=1;
        professions[1][1]+=1;
        professions[2][1]+=1;
        professions[3][1]+=1;
        professions[4][1]+=1;   
        professions[5][1]+=1;
        professions[6][1]+=1;
        professions[7][1]+=1;
        professions[8][1]+=1;
        professions[9][1]+=1;
        professions[10][1]+=1;
    }
    else if(rates =='a2'){
        professions[0][1]+=1;
        professions[1][1]+=1;
        professions[2][1]+=1;
        professions[3][1]+=1;
        professions[4][1]+=1;   
        professions[5][1]+=1;
        professions[6][1]+=1;
        professions[7][1]+=1;
        professions[8][1]+=1;
        professions[9][1]+=1;
        professions[10][1]+=1;
    }
    else if(rates =='a3'){
        professions[1][1]+=1;
        professions[2][1]+=1;   
        professions[5][1]+=1;      
    }
    else if(rates =='a4'){
        professions[3][1]+=1;   
        professions[8][1]+=1;
    }
    else if(rates =='a5'){
        professions[0][1]+=1;
    }
    else if(rates =='a6'){
        professions[9][1]+=1;
        professions[2][1]+=1;
        professions[8][1]+=1;
        professions[6][1]+=1;
        professions[1][1]+=0.5;   
    }
    else if(rates =='a7'){
        professions[11][1]+=1;
        professions[0][1]+=1;
        professions[8][1]+=1;
        professions[6][1]+=0.5;
    }
    else if(rates =='a8'){
        professions[0][1]+=1;
        professions[1][1]+=1;
        professions[2][1]+=1;
        professions[3][1]+=1;
        professions[4][1]+=1;   
        professions[5][1]+=1;
        professions[6][1]+=1;
        professions[7][1]+=1;
        professions[8][1]+=1;
        professions[9][1]+=1;
        professions[10][1]+=1;
    } 
}

function writeQuestion2(){

}

function writeQuestion3(){

}

function writeQuestion4(){

}

function writeQuestion5(){

}

function writeQuestion6(){

}

function writeQuestion7(){

}

function writeQuestion8(){

}

function writeQuestion9(){

}

function writeQuestion10(){

}