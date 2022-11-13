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

let battonClick = document.getElementById('next')
battonClick.onclick= function(){
    
}

var rates = document.getElementById('answer1').value;
var rate_value;
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