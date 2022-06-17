const elementoResposta = document.querySelector("#resposta")
const inputpergunta = document.querySelector("#inputpergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possivel prever agora.",
  "Perpectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

  function fazerPergunta(){

    if(inputpergunta.value == ""){
      alert("Faça a sua pergunta.")
      return
    }
    buttonPerguntar.setAttribute("disabled", true)
    elementoResposta.style.opacity = 1;
  const pergunta = "<div>"+inputpergunta.value+"</div>"
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta+respostas[numeroAleatorio]

  setTimeout(function(){
    elementoResposta.style.opacity = 0.1;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
  }