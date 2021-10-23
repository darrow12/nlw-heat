const LinksSocialMedia = {
  github: "darrow12",
  youtube: "channel/UCSQCQkKcGQsj4U8NKjeny2A",
  instagram: "darrow12",
  linkedin: "darrou12",
  twitter: "darrou12"
}

function changeSocialMediaLinks() {
  // document.getElementById('userName').textContent = 'Kim';
  // userName.textContent = 'Kim'

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    // alert(li.children[0].href)
  }
}

changeSocialMediaLinks();


function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url).then(response => response.json()) // Quando só tme uma coisa pra fazer, nao precisa botar em chaves | { response.json() }
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userAvatar.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos();




// Arrow Function
// argumento => {}
// (argumento, argumento2) => {}
// () => {}

// Para chamar a função, tem que colocar ela aqui. Quando ele chega na linha de cima, ele tem que pegar a função que ele criou e guardou e executar

// camelCase
// PascalCase
// snake_case

// DOM = Document Object Model
// O navegador cria um documento com mapeamento dos objetos que existem no site, ou seja, tudo que é renderizado, ele mapeia os elementos do HTML.
// Através do JS, é possível acessar esse documento e ter acesso a esses elementos HTML, tipo pegar um texto

// Para o computador, não interessa a quantidade, e sim a posição, e a posição no computador começa em 0, por isso, enquanto seres humanos contariam 1234, o computador conta 0123