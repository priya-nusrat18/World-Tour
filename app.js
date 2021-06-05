const loadData= () =>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        displayData(data)
    })
}
loadData();
const displayData =(data) =>{
    const countriesDiv = document.getElementById('single-div')
    data.forEach(country=>{
        const countryDiv = document.createElement('div')
        countryDiv.className = 'country';
        const countriesInfo = `
        <h3 class="text-primary">${country.name} </h3>
        <p> Capital : ${country.capital}</p>
        <button class="btn-primary" onClick="loadDetails('${country.name}')">show details</button>
        `
        countryDiv.innerHTML = countriesInfo;
        countriesDiv.appendChild(countryDiv);
    })
   
}

const loadDetails = (country) =>{
    // const countryDetails = `${country.flag}`
    url = `https://restcountries.eu/rest/v2/name/${country}`
    ;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        showDetails(data[0])
        
    })
}
const showDetails=(country)=>{
    const detailsInfo =document.getElementById('country-details')
    const info = `
    <img class=" w-25" src='${country.flag}'></img>
    <h3 class="text-primary">${country.name} </h3>
        <h4 class="text-primary"> Population : ${country.population}</h4>
        <p class="text-primary"> Region : ${country.region}</p>
    `;
    detailsInfo.innerHTML = info
}