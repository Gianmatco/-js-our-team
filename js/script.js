/*
Viene fornito un layout di base in cui è presente una card di esempio 
inserita staticamente nell’html. 
Questa card serve solo come timbro del markup 
necessario per ottenere il risultato finale 
e dovrà quindi essere rimossa dall’html.
Aggiungere un file js 
in cui definire un array di oggetti 
che rappresentano i membri del team. 
Ogni membro ha le informazioni 
necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Una volta definita la struttura dati, 
prendendo come riferimento la card di esempio 
presente nell'html, stampare dinamicamente una card per ogni membro del team.
*/


const team = [
    {
        image:'wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
    },
    {
        image:'wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
    },
];

/*
<div class="team-card">
    <div class="card-image">
        <img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett"/>
    </div>
    <div class="card-text">
        <h3>Wayne Barnett</h3>
        <p>Founder & CEO</p>
    </div>
</div>
*/ 
const teamContainer = document.querySelector('.team-container');
console.log(teamContainer)

function stampaTeam(){
    let item = '';
    for(let i = 0;i < team.length; i++){
        //console.log(team[i]);
        stampaMember(team[i]);
        
  
    }
    
}
stampaTeam();

function stampaMember(member){
    console.log(member);
    const card = document.createElement('div');
    card.setAttribute('class','team-card')
    const cardContainer =`
        <div class="card-image">
            <img src="img/${member.image}" alt="${member.name}"/>
        </div>
        <div class="card-text">
           <h3>${member.name}</h3>
           <p>${member.role}</p>
        </div>
   
    `
    card.innerHTML = cardContainer;
    teamContainer.appendChild(card)
}

const button = document.getElementById('addMemberButton');
button.addEventListener('click', addMember);

function addMember(){
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const image = document.getElementById('image').value;
    const newMember = {
        name: name,
        role: role,
        image: image
    }
    //console.log(newMember);
    team.push(newMember);
    //console.log(team);
    const memberCard = stampaMember(newMember);
    
}

