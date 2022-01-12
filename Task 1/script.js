/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.querySelector('#search').value;
    const svarai = userInput * 2.2046 + 'lb';
    const gramai = userInput / 0.001 + 'g';
    const uncijos = userInput * 35.274 + 'oz';
    let output = document.querySelector('#output');
    document.querySelector('form').reset();
    // add heading
    let myHeading = document.createElement('h1');
    myHeading.textContent = `${userInput}kg is:`
    // add pounds
    let pounds = document.createElement('h2');
    pounds.textContent = svarai;
    // add grams
    let grams = document.createElement('h2');
    grams.textContent = gramai;
    // add oz
    let oz = document.createElement('h2');
    oz.textContent = uncijos;
    // append
    output.append(myHeading, pounds, grams, oz);
   
})
