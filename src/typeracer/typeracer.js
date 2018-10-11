document.onselectstart = test;
function test() {return false;}
let c = 12;
let sc =0;
let speed = 0;
let lifes;
let is_paused = false;
function new_game(){
    console.log(getComputedStyle(document.getElementById('timer')).fontSize); 
    setTimeout("document.getElementById('task').textContent='3...'",1000);
    setTimeout("document.getElementById('task').textContent='2...'",2000);
    setTimeout("document.getElementById('task').textContent='1...'",3000);
    setTimeout(start_game,4000);     
}

let input_count = 0;
function speedTimer()
{
speed = input_count/sc*60;
document.getElementById('speed_timer').value=speed.toFixed(2);
sc=sc+3;
t=setTimeout("speedTimer()",3000);
}

function timedCount()
{
    if(!is_paused){
    if(c>=0){
        if(c<10) {
            document.getElementById('timer').style.color = 'red';
            const fontsize = getComputedStyle(document.getElementById('timer')).fontSize;
            document.getElementById('timer').style.fontSize = (parseInt(fontsize)+1) + 'px';
        }
document.getElementById('timer').textContent=c;
c--;
document.getElementById('lifes').textContent = lifes;
setTimeout("timedCount()",1000);}
else{
    if(confirm("Начать заново?")){
        new_game();
    }
}
}
}

function start_game() {
    generate_text();
    current_length = 0;
    lifes = 3; 
    document.getElementById('timer_block').style.visibility = 'visible';
    document.getElementById('pause_Button').style.visibility = 'visible';
    document.getElementById('intext').value = '';
    document.getElementById('intext').disabled = false; 
    // c = document.getElementById('task').textContent.length; 
    с = 12;
input_count=0;
    timedCount(); 
    speedTimer();
}
function pause_game() {
is_paused=true;
}

function end_game() {

}

let current_length;
function check(){
    if (document.getElementById("intext").value.length > current_length) { 
    input_count++;
    }
    current_length = document.getElementById("intext").value.length;
    if (document.getElementById("intext").value == document.getElementById("task").textContent)
{document.getElementById("intext").style.borderColor="green";
end_game();} 
else{
    if (document.getElementById("intext").value == document.getElementById("task").textContent.substr(0,document.getElementById("intext").value.length))
    {document.getElementById("intext").style.borderColor="gray";
}
    else{
        document.getElementById("intext").style.borderColor="red";
        lifes--;
    }}
};


function generate_text() {
    var texts = new Array(15, "Ежедневно делайте зарядку и различные физические упражнения. Развивайте своё тело и дух.",
            "Будьте благодарны Вселенной за каждый прожитый день.",
            "Любите себя таким, какой вы есть, со всеми достоинствами и недостатками",
            "Верьте только в самое лучшее и тогда в вашей жизни станет ещё больше приятных сюрпризов и хорошего настроения",
            "Прочтите как можно больше биографий великих людей",
            "Планируйте предстоящий день. Выделяйте наиболее приоритетные задачи, которые необходимо выполнить в первую очередь",
            "Определите, что сейчас в жизни для вас наиболее важно и развивайтесь в этом направлении",
            "Откажитесь от употребления алкоголя", "Пейте чистую воду и натуральные соки. Ограничьте употребление газированной воды",
            "Пейте чистую воду и натуральные соки. Ограничьте употребление газированной воды", "Каждый день отмечайте для себя, насколько далеко вы продвинулись к своей цели. Помните, что каждый новый день - это шаг вперёд",
            "Найдите для себя наставника. Учитесь у того, кто уже находится там, куда вы только стремитесь",
            "Просыпайтесь в 6 утра. Утром можно успеть сделать гораздо больше дел, чем в течение дня, особенно, если вы творческий человек",
            "Забудьте о своих недостатках. Вместо этого сосредоточьтесь на своих достоинствах",
            "Ежемесячно откладывайте от 10 % от своего дохода. Инвестируйте в своё будущее",
            "Контролируйте свои эмоции. Старайтесь как можно чаще улыбаться и быть в отличном настроении");
    var RandomNumber = Math.round(Math.random() * (15) + 1);
    document.getElementById("task").textContent = texts[RandomNumber];
}