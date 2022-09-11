var img1 = "img/Gabumon.gif";
var name1 = "Gabumon";
var level1 = "Rookie";
var id1 = "1";

var img2 = "img/Garurumon.gif";
var name2 = "Garurumon";
var level2 = "Champion";
var id2 = "2";

var img3 = "img/WereGarurumon.gif";
var name3 = "WereGarurumon";
var level3 = "Ultimate";
var id3 = "3";

var img4 = "img/Metalgarurumon.gif";
var name4 = "Metalgarurumon";
var level4 = "Mega";
var id4 = "4";

var img5 = "img/Gomamon.gif";
var name5 = "Gomamon";
var level5 = "Rookie";
var id5 = "5";

var img6 = "img/Ikkakumon.gif";
var name6 = "Ikkakumon";
var level6 = "Champion";
var id6 = "6";
                            
var img7 = "img/Zudomon.gif";
var name7 = "Zudomon";
var level7 = "Ultimate";
var id7 = "7";

var img8 = "img/Tailmon.gif";
var name8 = "Tailmon";
var level8 = "Rookie";
var id8 = "8";

var img9 = "img/Angewomon.gif";
var name9 = "Angewomon";
var level9 = "Ultimate";
var id9 = "9";

var img10 = "img/Patamon.gif";
var name10 = "Patamon";
var level10 = "Rookie";
var id10 = "10";

var img11 = "img/Angemon.gif";
var name11 = "Angemon";
var level11 = "Ultimate";
var id11 = "11";

var img12 = "img/MagnaAngemon.gif";
var name12 = "MagnaAngemon";
var level12 = "Ultimate";
var id12 = "12";

var img13 = "img/Tentomon.gif";
var name13 = "Tentomon";
var level13 = "Rookie";
var id13 = "13";

var img14 = "img/Kabuterimon.gif";
var name14 = "Kabuterimon";
var level14 = "Champion";
var id14 = "14";

var img15 = "img/Megakabuterimon.gif";
var name15 = "Megakabuterimon";
var level15 = "Ultimate";
var id15 = "15";

var img16 = "img/Piyomon.gif";
var name16 = "Piyomon";
var level16 = "Rookie";
var id16 = "16";

var img17 = "img/Garudamon.gif";
var name17 = "Garudamon";
var level17 = "Ultimate";
var id17 = "17";

var img18 = "img/Palmon.gif";
var name18 = "Palmon";
var level18 = "Rookie";
var id18 = "18";

var img19 = "img/Togemon.gif";
var name19 = "Togemon";
var level19 = "Champion";
var id19 = "19";

var img20 = "img/Metalgreymon.gif";
var name20 = "Metalgreymon";
var level20 = "Ultimate";
var id20 = "20";

var img21 = "img/Wargreymon.gif";
var name21 = "Wargreymon";
var level21 = "Mega";
var id21 = "21";

var img22 = "img/WarGrowlmon.gif";
var name22 = "WarGrowlmon";
var level22 = "Mega";
var id22 = "22";

var click = document.getElementById('bit');

function next(){{
        document.getElementById("figura").src = img1;
        let aux = img1;
        img1 = img2;
        img2 = img3;
        img3 = img4;
        img4 = img5;
        img5 = img6;
        img6 = img7;
        img7 = img8;
        img8 = img9;
        img9 = img10;
        img10 = img11;
        img11 = img12;
        img12 = img13;
        img13 = img14;
        img14 = img15;
        img15 = img16;
        img16 = img17;
        img17 = img18;
        img18 = img19;
        img19 = img20;
        img20 = img21;
        img21 = img22;
        img22 = aux;
    }
    {   
        document.getElementById("name").innerHTML = name1;
        let aux = name1;
        name1 = name2;
        name2 = name3;
        name3 = name4;
        name4 = name5;
        name5 = name6;
        name6 = name7;
        name7 = name8;
        name8 = name9;
        name9 = name10;
        name10 = name11;
        name11 = name12;
        name12 = name13;
        name13 = name14;
        name14 = name15;
        name15 = name16;
        name16 = name17;
        name17 = name18;
        name18 = name19;
        name19 = name20;
        name20 = name21;
        name21 = name22;
        name22 = aux;
    }
    {
        document.getElementById("level").innerHTML = level1;
        let aux = level1;
        level1 = level2;
        level2 = level3;
        level3 = level4;
        level4 = level5;
        level5 = level6;
        level6 = level7;
        level7 = level8;
        level8 = level9;
        level9 = level10;
        level10 = level11;
        level11 = level12;
        level12 = level13;
        level13 = level14;
        level14 = level15;
        level15 = level16;
        level16 = level17;
        level17 = level18;
        level18 = level19;
        level19 = level20;
        level20 = level21;
        level21 = level22;
        level22 = aux;
    }  
        
        bit.play();  
}

function prev(){{
        document.getElementById("figura").src = img22;
        let aux = img22;
        img22 = img21;
        img21 = img20;
        img20 = img19;
        img19 = img18;
        img18 = img17;
        img17 = img16;
        img16 = img15;
        img15 = img14;
        img14 = img13;
        img13 = img12;
        img12 = img11;
        img11 = img10;
        img10 = img9;
        img9 = img8;
        img8 = img7;
        img7 = img6;
        img6 = img5;
        img5 = img4;
        img4 = img3;
        img3 = img2;
        img2 = img1;
        img1 = aux
    }

    {   
        document.getElementById("name").innerHTML = name22;
        let aux = name22;
        name22 = name21;
        name21 = name20;
        name20 = name19;
        name19 = name18;
        name18 = name17;
        name17 = name16;
        name16 = name15;
        name15 = name14;
        name14 = name13;
        name13 = name12;
        name12 = name11;
        name11 = name10;
        name10 = name9;
        name9 = name8;
        name8 = name7;
        name7 = name6;
        name6 = name5;
        name5 = name4;
        name4 = name3;
        name3 = name2;
        name2 = name1;
        name1 = aux;
    }



    {
        document.getElementById("level").innerHTML = level22;
        let aux = level22;
        level22 = level21;
        level21 = level20;
        level20 = level19;
        level19 = level18;
        level18 = level17;
        level17 = level16;
        level16 = level15;
        level15 = level14;
        level14 = level13;
        level13 = level12;
        level12 = level11;
        level11 = level10;
        level10 = level9;
        level9 = level8;
        level8 = level7;
        level7 = level6;
        level6 = level5;
        level5 = level4;
        level4 = level3;
        level3 = level2;
        level2 = level1;
        level1 = aux
    }

    bit.play();
}

