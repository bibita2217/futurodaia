const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaperguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A IA no futuro terá papel importante em diagnósticos médicos",
        alternativas: [
            "a) Sim, auxiliando médicos na identificação precoce de doenças",
            "b) Não, será proibida de atuar em qualquer área da saúde",
        ]
    }
    {
        enunciado: "Em relação ao mercado de trabalho, a IA provavelmente vai",
        alternativas: [
            "a) Substituir algumas funções, mas também criar novas oportunidades",
            "b) Eliminar todos os empregos humanos sem exceção",
    ]

}
{
    enunciado: "No futuro, carros autônomos movidos por IA poderão",
    alternativas: [
        "a) Reduzir acidentes ao minimizar erros humanos",
        "b) Tornar o trânsito totalmente caótico e sem controle"
    ]
}
{
    enunciado: "Sobre a criatividade, a IA será capaz de",
    alternativas: [ 
        "a) Auxiliar artistas e escritores na criação de novas ideias",
        "b) Nunca gerar nada criativo ou útil nesse campo"
    ]
}
{
enunciado: "Quanto à ética, um dos maiores desafios do futuro da IA é",
    alternativas: [ 
        "a) Garantir que seja usada de forma justa e responsável",
        "b) Ignorar completamente regras ou preocupações éticas."
    ]
}
];

let atual = 0;
let perguntaAtual;
let histotiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaperguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas () {
  for (const alternativa of perguntaAtual.alternativa) {
      const botaoAlternativa =document.createElement("button");
      botaoAlternativas.textContent = alternativa;
      caixaAlternativas.appendChild(botaoAlternativas);

  }
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    histotiaFinal += afirmacoes + " ";
    atual++;
mostraPergunta();
}

function mostraResultado()  {
    caixaperguntas.textContent = "Em 2049...";
    textoResultado.textContent = histotiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();