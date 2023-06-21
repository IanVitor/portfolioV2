const $wrapper = document.querySelector(".projects_wrapper");

async function getData() {
  const resposta = await fetch('../data/project.json');
  const json = await resposta.json();
  return json;
}

const createProjects= async () => {
  const data = await getData();

  console.log(data)

  data.projects.map(function(e){
    $wrapper.innerHTML += 
    `
    <div class="project_card">
          <div class="project_img">
            <a href="${e.url}"><img src="${e.image}" alt="project image"></a>
          </div>
          <div class="project_content">
            <div>
              <h2>${e.title}</h2>
              <p>${e.description}</p>
            </div>
            <div class="project_icons">
              <i class="${e.icons[0]}"></i>
              <i class="${e.icons[1]}"></i>
              <i class="${e.icons[2]}"></i>
            </div>
            <a href="${e.url}" target="_blank">Visite o projeto</a>
          </div>
        </div>
    `
  });
}

window.onload(createProjects  ())