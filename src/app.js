import axios from 'axios';

console.log('Hallo daar!');

// GET request https://restcountries.com/v2/all

// 1. Installeer de dependency axios (npm install axios)
// 2. Schrijf een asynchrone functie
// 3. Maak een GET request met axios (met await)
// 4. Try / catch blok om de errors af te vangen
// 5. Element in HTML maken, referentie opslaan vanuit de JS
// 6. De data injecteren (map-methode!)

// const countryList = document.getElementById('countries');
const errorMessage = document.getElementById('error');

async function fetchCountries() {
    try {
        // het request maken
        const response = await axios.get('https://restcountries.com/v2/all');
        console.log(response.data);

       const countries = response.data
   countriesAll(countries);



        // als we slechts één taal van het eerste land willen weergeven, doen we dat zo. Jullie gaan hier natuurlijk de map-methode voor gebruiken, want dit wil je iet 250 keer uitschrijven!


    //     countryList.innerHTML =  `
    //    <li>
    //    <img class="flag-img" src="${response.data[15].flags.png}">
    //    <span class=${fetchRegion(15)}>${response.data[15].name}</span>
    //    </br>Has a population of ${response.data[15].population} people</li>
    //
    // `;
    } catch (e) {
        // de errors afvangen in de console
        console.error(e);

        // errors communiceren in de UI
        if (e.response.status === 500) {
            errorMessage.textContent = "Er ging iets mis in de server";
        } else if (e.response.status === 404) {
            errorMessage.textContent = "Het verzoek is mislukt";
        }
    }
}

fetchCountries();



function countriesAll(countries) {
    const allCountries = document.getElementById('allCountries');
    allCountries.innerHTML = countries.map((country) =>{
        return `
            <li class="inner-item">
<img class="flag-img" src="${country.flag}">
<span class="${fetchRegion(country.region)}">${country.name}</span>
<p>Has a population of ${country.population} people</p>            
            </li>
            `
    });

}


function fetchRegion(currentRegion) {

    switch (currentRegion) {
        case 'Africa':
            return 'blue';


        case 'Americas':
            return 'green';


        case 'Asia':
            return 'red';


        case 'Europe':
            return 'yellow';


        case 'Oceania':
            return 'purple';

    }
}

function populationLowHigh(countries) {
    countries.sort((b, a) => b.population - a.population)
    console.log(countries)
}
populationLowHigh(countries);