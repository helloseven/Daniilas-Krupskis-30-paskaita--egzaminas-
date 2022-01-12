/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
.then(resp => resp.json())
.then(data => {
    data.forEach(element => {
        let output = document.querySelector('#output');
        let brand = document.createElement('h1');
        brand.textContent = element.brand;
        let models = document.createElement('h4');
        models.textContent = element.models;
        output.append(brand, models);
        
    });
})
