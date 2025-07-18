//recupero elementi dal DOM
const emailList = document.getElementById('email-list');
const generaBtn = document.getElementById('genera-btn');

//creo una funzione dove vado a generare 10 email 
function generaEmail() {

//pulisco lista
  emailList.innerHTML = ''; 

//eseguo ciclo for per generare 10 email
for (i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
            const email = resp.data.response;
            emailList.innerHTML += `<li>${email}</li>`;
        })
    }
}

