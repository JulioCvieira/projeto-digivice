var digimonList = [

    {
        img: "img/Gabumon.gif",
        name: "Gabumon",
        level: "Rookie",
        id: "1"
    },

    {
        img: "img/Garurumon.gif",
        name: "Garurumon",
        level: "Champion",
        id: "2",
    },
    {
        img: "img/WereGarurumon.gif",
        name: "WereGarurumon",
        level: "Ultimate",
        id: "3",
    },
    {
        img: "img/Metalgarurumon.gif",
        name: "Metalgarurumon",
        level: "Mega",
        id: "4",
    },
    {
        img: "img/Gomamon.gif",
        name: "Gomamon",
        level: "Rookie",
        id: "5",
    },
    {
        img: "img/Ikkakumon.gif",
        name: "Ikkakumon",
        level: "Champion",
        id: "6",
    },
    {
        img: "img/Zudomon.gif",
        name: "Zudomon",
        level: "Ultimate",
        id: "7",
    },
    {
        img: "img/Tailmon.gif",
        name: "Tailmon",
        level: "Rookie",
        id: "8",
    },
    {
        img: "img/Angewomon.gif",
        name: "Angewomon",
        level: "Ultimate",
        id: "9",
    },
    {
        img: "img/Patamon.gif",
        name: "Patamon",
        level: "Rookie",
        id: "10",
    },
    {
        img: "img/Angemon.gif",
        name: "Angemon",
        level: "Ultimate",
        id: "11",
    },
    {
        img: "img/MagnaAngemon.gif",
        name: "MagnaAngemon",
        level: "Ultimate",
        id: "12",
    },
    {
        img: "img/Tentomon.gif",
        name: "Tentomon",
        level: "Rookie",
        id: "13",
    },
    {
        img: "img/Kabuterimon.gif",
        name: "Kabuterimon",
        level: "Champion",
        id: "14",
    },
    {
        img: "img/Megakabuterimon.gif",
        name: "Megakabuterimon",
        level: "Ultimate",
        id: "15",
    },
    {
        img: "img/Piyomon.gif",
        name: "Piyomon",
        level: "Rookie",
        id: "16",
    },
    {
        img: "img/Garudamon.gif",
        name: "Garudamon",
        level: "Ultimate",
        id: "17",
    },
    {
        img: "img/Palmon.gif",
        name: "Palmon",
        level: "Rookie",
        id: "18",
    },
    {
        img: "img/Togemon.gif",
        name: "Togemon",
        level: "Champion",
        id: "19",
    },
    {
        img: "img/Metalgreymon.gif",
        name: "Metalgreymon",
        level: "Ultimate",
        id: "20",
    },
    {
        img: "img/Wargreymon.gif",
        name: "Wargreymon",
        level: "Mega",
        id: "21",
    },
    {
        img: "img/WarGrowlmon.gif",
        name: "WarGrowlmon",
        level: "Mega",
        id: "22",
    }

];

var index = 1
function indexPLus() {
    return index++;
}
function indexLess() {
    return index--;
}

var click = document.getElementById('bit');


var onChange = function (evt) {
    // console.info(this.value);
    // or
    console.info(evt.target.value);
    let encontrei = digimonList.findIndex(index => index.name.toLowerCase() === evt.target.value);
    console.info(encontrei);
    index = encontrei
    document.getElementById("figura").src = digimonList[index].img
    document.getElementById("name").innerHTML = digimonList[index].name
    document.getElementById("level").innerHTML = digimonList[index].level

};
var input = document.getElementById('form1');
input.addEventListener('input', onChange, false);





function next() {


    document.getElementById("figura").src = digimonList[indexPLus()].img
    document.getElementById("name").innerHTML = digimonList[indexPLus()].name
    document.getElementById("level").innerHTML = digimonList[indexPLus()].level



    bit.play();
}

function prev() {
    document.getElementById("figura").src = digimonList[indexLess()].img
    document.getElementById("name").innerHTML = digimonList[indexLess()].name
    document.getElementById("level").innerHTML = digimonList[indexLess()].level

    bit.play();
}

