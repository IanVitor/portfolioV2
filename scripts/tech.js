const $container = document.querySelector(".tech_wrapper");

async function getData() {
  const resposta = await fetch('../data/tech.json');
  const json = await resposta.json();
  return json;
}

const createElements= async () => {
  const data = await getData();

  data.techs.map(function(e){
    $container.innerHTML += 
    `
    <div class="card flex">
      <i class="tech_icon ${e.icon}"></i>
      <h2 class="tech_name">${e.name}</h2>
    </div>
    `
  });
}

window.onload(createElements())