var img1 = "img/Gabumon.gif";
var img2 = "img/Garurumon.gif";
var img3 = "img/WereGarurumon.gif";
var img4 = "img/Metalgarurumon.gif";
var img5 = "img/Gomamon.gif";
var img6 = "img/Ikkakumon.gif";
var img7 = "img/Zudomon.gif";
var img8 = "img/Tailmon.gif";
var img9 = "img/Angewomon.gif";
var img10 = "img/Patamon.gif";
var img11 = "img/Angemon.gif";
var img12 = "img/Holyangemon.gif";
var img13 = "img/Tentomon.gif";
var img14 = "img/Kabuterimon.gif";
var img15 = "img/Megakabuterimon.gif";
var img16 = "img/Piyomon.gif";
var img17 = "img/Garudamon.gif";
var img18 = "img/Palmon.gif";
var img19 = "img/Togemon.gif";
var img20 = "img/Metalgreymon.gif";
var img21 = "img/Wargreymon.gif";
var img22 = "img/WarGrowlmon.gif";


function next(){
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
    img22 = aux
}

function prev(){
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
    