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
    let userInput = document.querySelector('#search').value;
    let svarai = userInput * 2.2046 + 'lb';
    let gramai = userInput / 0.001 + 'g';
    let uncijos = userInput * 35.274 + 'oz';
    let output = document.querySelector('#output');
    output.textContent = `${userInput}kg is: ${svarai}, ${gramai}, ${uncijos}`;
    document.querySelector('form').reset();
})
