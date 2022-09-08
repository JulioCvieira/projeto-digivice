const digimonName = document.querySelector('.digimon-name')
const digimonLevel = document.querySelector('.digimon-level')
const digimonImagem = document.querySelector('.digimon-img')

const form = document.querySelector('.form');
const input = document.querySelector('.input-search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchDigimon = Greymon;



const fetchDigimon = async (digimon) => {

    const APIResponse = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderDigimon = async (digimon) => {

    digimonName.innerHTML = 'Loading...';
    digimonLevel.innerHTML = '';

    const data = await fetchDigimon(digimon);

    if (data) {
        digimonImagem.style.display = 'block';
        digimonName.innerHTML = data.name;
        digimonLevel.innerHTML = data.level;
        digimonImagem.src = data.img;

        input.value = '';
        searchDigimon = data.level;
    } else {
        digimonImagem.style.display = 'none';
        pokemonName.innerHTML = 'Not found :c'
        pokemonLevel.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderDigimon(input.value.toLowerCase());
});

buttonPrev.addEventListener('click', () => {
    if (searchDigimon > 1){
     searchDigimon -= 1;
     renderDigimon(searchDigimon);
    }
});

buttonNext.addEventListener('click', () => {
    searchDigimon += 1;
    renderDigimon(searchDigimon);
});


renderDigimon(searchDigimon);

