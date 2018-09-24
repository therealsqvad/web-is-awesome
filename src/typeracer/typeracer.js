document.onselectstart = test;
function test() {return false;}
var c = 60;
function new_game(){
    setTimeout("document.getElementById('task').textContent='3...'",1000);
    setTimeout("document.getElementById('task').textContent='2...'",2000);
    setTimeout("document.getElementById('task').textContent='1...'",3000);
    setTimeout("generate_text(); document.getElementById('intext').disabled = false; c = 60; timedCount();",4000); 
    
}

function timedCount()
{
    if(c>=0){
document.getElementById('timer').textContent=c;
c--;
setTimeout("timedCount()",1000);}
else{
    if(confirm("Начать заново?")){
        new_game();
    }
}
}


function check(){
    console.log(document.getElementById("intext").value);
    if (document.getElementById("intext").value == document.getElementById("task").textContent)
{document.getElementById("intext").style.borderColor="green";} 
else{
    if (document.getElementById("intext").value == document.getElementById("task").textContent.substr(0,document.getElementById("intext").value.length))
    {document.getElementById("intext").style.borderColor="gray";
}
    else{
        document.getElementById("intext").style.borderColor="red";
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