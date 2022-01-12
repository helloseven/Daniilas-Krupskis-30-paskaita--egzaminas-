/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';



document.querySelector('#btn').addEventListener('click', showUsers);

function showUsers(){
    const message = document.querySelector('#message');
    message.remove();
    fetch(ENDPOINT)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
            let userCard = document.createElement('div');
            // Create and assign userName
            let userName = document.createElement('h2');
            userName.textContent = `Name: ${element.login}`
            // Create and assing avatarUrl
            let avatarUrl = document.createElement('h4');
            avatarUrl.textContent = element.avatar_url;
            // Append userName and avatarUrl to userCard
            userCard.append(userName, avatarUrl);
            document.querySelector('#output').append(userCard);
        });
    });
}
