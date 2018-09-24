function new_game(){
    generate_text();
    document.getElementById("input_value").disabled = false;
}


function check(){
if (document.getElementById("input_value").value == document.getElementById("Out_txt").textContent)
{document.getElementById("input_value").style.borderColor="green"}
else{
    document.getElementById("input_value").style.borderColor="red";
}
};

function checkin(){
    console.log(document.getElementById("input_value").value);
    if (document.getElementById("input_value").value == document.getElementById("Out_txt").textContent.substr(0,document.getElementById("input_value").value.length))
    {document.getElementById("input_value").style.borderColor="green"}
    else{
        document.getElementById("input_value").style.borderColor="red";
    }
};




document.onselectstart = test;
function test() {
    return false
    }

function generate_text() {
    var Txts = new Array(15, "Ежедневно делайте зарядку и различные физические упражнения. Развивайте своё тело и дух.",
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
    document.getElementById("Out_txt").textContent = Txts[RandomNumber];
}