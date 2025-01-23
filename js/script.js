const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


const teamContainer = document.querySelector('.container')

function uploadCard() {

  for (let i = 0; i < teamMembers.length; i++) {

    let element = teamMembers[i]

    teamContainer.innerHTML +=
     `
    <div class="card d-flex flex-row  bg-dark  text-light p-2 px-3 my-3">

      <img src='${element.img}' class="p-2 rounded" alt="imgProfilo">

      <div class="card-body d-flex flex-column lh-lg align-items-center">

        <h5 class="card-title my-2">${element.name}</h5>
        <span class="card-text my-2">${element.role}</span>
        <span class="card-text my-2">${element.email}</span>

      </div>

    </div>
    
    `

  }

}
uploadCard()

const btn = document.getElementsByClassName(".btn")

btn.addEventListener('clock', function (event) {
  
  event.preventDefault()
  const name= document.getElementById('name')
  const role= document.getElementById('role')
  const email= document.getElementById('email')
  const img= document.getElementById('img')

  teamMembers.push(
    {
      name,
      role,
      email,
      img

    }

  )

  teamContainer.innerHTML +=
    
  `
  <div class="card d-flex flex-row  bg-dark  text-light p-2 px-3 my-3">

    <img src='${img}' class="p-2 rounded" alt="imgProfilo">

    <div class="card-body d-flex flex-column lh-lg align-items-center">

     <h5 class="card-title my-2">${name}</h5>
     <span class="card-text my-2">${role}</span>
     <span class="card-text my-2">${email}</span>

    </div>

   </div>
 
 `




})


