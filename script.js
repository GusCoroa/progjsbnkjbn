function fazerPergunta() {
  let perguntaEscolhida =
    perguntas[Math.floor(Math.random() * perguntas.length)];

  return perguntaEscolhida;
}

function verificarResposta(resposta, perguntaEscolhida) {
  let vericacao = true;
  let respostaCerta;

  switch (resposta) {
    case "a":
      if (
        perguntaEscolhida == perguntas[0] ||
        perguntaEscolhida == perguntas[1]
      ) {
        vericacao = true;
      } else {
        vericacao = false;
      }
      break;
    case "b":
      if (
        perguntaEscolhida == perguntas[2] ||
        perguntaEscolhida == perguntas[3]
      ) {
        vericacao = true;
      } else {
        vericacao = false;
      }
      break;
    case "c":
      if (
        perguntaEscolhida == perguntas[4] ||
        perguntaEscolhida == perguntas[5]
      ) {
        vericacao = true;
      } else {
        vericacao = false;
      }
      break;
    case "d":
      if (
        perguntaEscolhida == perguntas[6] ||
        perguntaEscolhida == perguntas[7]
      ) {
        vericacao = true;
      } else {
        vericacao = false;
      }
      break;
    case "e":
      if (
        perguntaEscolhida == perguntas[8] ||
        perguntaEscolhida == perguntas[9]
      ) {
        vericacao = true;
      } else {
        vericacao = false;
      }
      break;
  }

  let retorno = "";

  if (vericacao) {
    retorno = "Voce acertou!";
  } else {
    for (let i = 0; i < perguntas.length; i++) {
      if (
        perguntaEscolhida == perguntas[0] ||
        perguntaEscolhida == perguntas[1]
      ) {
        respostaCerta = opcoes[0];
        break;
      }
      if (
        perguntaEscolhida == perguntas[2] ||
        perguntaEscolhida == perguntas[3]
      ) {
        respostaCerta = opcoes[1];
        break;
      }
      if (
        perguntaEscolhida == perguntas[4] ||
        perguntaEscolhida == perguntas[5]
      ) {
        respostaCerta = opcoes[2];
        break;
      }
      if (
        perguntaEscolhida == perguntas[6] ||
        perguntaEscolhida == perguntas[7]
      ) {
        respostaCerta = opcoes[3];
        break;
      }
      if (
        perguntaEscolhida == perguntas[8] ||
        perguntaEscolhida == perguntas[9]
      ) {
        respostaCerta = opcoes[4];
        break;
      }
    }
    retorno = `Voce errou! A resposta certa é : ${respostaCerta}`;
  }

  return retorno;
}

do {
  var perguntas = [
    "Quando duas chaves primarias são identicas?", //0

    "Quando duas linhas em uma tabela possuem o mesmo valor em uma coluna que deveria ser única?", //1

    "Quando uma chave primaria é nula(NULL)?", //2

    "Quando uma linha não possui um valor válido na coluna que deveria identificar unicamente essa linha?", //3

    "Quando em uma linha o tipo do dado é diferente do tipo de dado da coluna? EX: um numero numa coluna de nomes", //4

    "Quando uma coluna aceita valores fora do conjunto de valores permitidos para aquele tipo de dado?", //5

    "Quando uma tabela referencia outra, sua chave estrangeira é nula(NULL)?", //6
    "Quando uma linha de uma tabela depende de outra tabela, mas o valor referenciado não existe na tabela primária?", //7

    "Quando um empregado não pode ganhar mais que o seu supervisor?", //8

    "Quando o salário de um funcionário ultrapassa o limite permitido pela lógica do sistema de negócios?", //9
  ];
  var opcoes = [
    "\na)Restrição de Chave",
    "\nb)Restrição de Integridade de Entidade",
    "\nc)Restrição de Domínio",
    "\nd)Restrição de Integridade Referencial",
    "\ne)Restrição de Semântica",
  ];

  let pergunta = fazerPergunta();

  let resposta = prompt(
    pergunta + "\n\n" + opcoes + "\n\n" + "RESPONDA COM A LETRA DA OPÇÃO:"
  );
  resposta = resposta.toLowerCase();

  let verificacao = verificarResposta(resposta, pergunta);

  alert(verificacao);

  var continua = prompt("deseja continuar?(sim ou não)");

  continua = continua.toLowerCase();
} while (continua == "sim");
