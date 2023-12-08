var listaQuestao = [
  `Qual é o componente de hardware responsável por executar instruções e processar dados em um computador?`,

  `É um circuito digital responsável pelas operações lógicas e aritméticas no processador de um computador.`,

  `Unidades de armazenamento de alta velocidade dentro da Unidade de Controle. Eles permitem que a UC armazene e manipule dados e instruções de forma rápida e eficiente durante o 
  processamento. E se localizam dentro da CPU.`,

  `Componente de memória em seu computador para armazenamento temporário de seus arquivos e aplicativos`,

  `Componente de memória não volátil em computadores, o que significa que as informações são armazenadas
  permanentemente no chip. A memória não depende de uma corrente elétrica para salvar dados`,

  `Memória de somente leitura cujo conteúdo pode ser apagado por luz ultravioleta ou outros meios e reprogramado usando uma voltagem pulsada`,

  `Chip de armazenamento não volátil e de longa duração amplamente utilizado em sistemas embarcados. Ele pode manter dados e informações armazenados mesmo quando a energia está desligada`,

  `Termo usado para armazenamento de grandes quantidades de dados de forma persistente e legível por máquina, como discos rígidos`,

  `Recurso fornecido por algumas arquiteturas de barramento de computador que permite que os dados sejam enviados diretamente de um dispositivo conectado (como uma unidade de disco) para a memória na placa-mãe
   do computador.`,

  `Nome de uma linha de controle em eletrônica digital usada para selecionar um dos circuitos integrados entre vários conectados ao mesmo barramento de computador.`,

  `Um barramento de computador usado para especificar um endereço físico na memória`,

  `Um barramento de computador usado para
          transmitir dados entre componentes`,

  `Família de processadores x86 de 64 bits de
          desempenho intermediário projetados pela Intel introduzida em 2009`,

  `Família de processadores x86-64 de 64 bits
          de alto desempenho projetados pela Intel foi lançada em 2008`,
  `Classe de processador com 2 núcleos`,
  `Classe de processador com 4 núcleos`,
  `Nome dado a um fluxo de execução dentro de um processo em um sistema operacional?`,
  `Nome dado a uma memória de alta velocidade que armazena dados frequentemente acessados pelo processador, a fim de reduzir o tempo de acesso à memória principal (RAM) e melhorar o desempenho do sistema?`,
];

var listaPosicao = [
  ["i248", "i265", "i282"], /* i248 C, i265 P, i282 U */
  ["i282", "i283", "i284"],/* i282 U i283 L i284 A */
  [
    "i73",
    "i74",
    "i75",
    "i76",
    "i77",
    "i78",
    "i79",
    "i80",
    "i81",
    "i82",
    "i83",
    "i84",
    "i85",
  ],
  ["i79", "i96", "i113"],
  ["i214", "i215", "i216"],
  ["i212", "i213", "i214", "i215", "i216"],
  ["i115", "i116", "i117", "i118", "i119"],
  ["i216", "i233", "i250", "i267", "i284"],
  ["i112", "i113", "i114"],
  ["i198", "i199"],
  ["i16", "i33", "i50", "i67", "i84", "i101", "i118", "i135", "i152", "i169"],
  ["i97", "i114", "i131", "i148", "i165", "i182", "i199"],
  ["i76", "i93"],
  ["i59", "i60"],
  ["i205", "i206", "i207", "i208", "i209", "i210", "i211", "i212"],
  ["i130", "i147", "i164", "i181", "i198", "i215", "i232", "i249"],
  ["i157", "i158", "i159", "i160", "i161", "i162", "i163"],
  ["i144", "i161", "i178", "i195", "i212"],
];
var palavras = [
  /* 1 */ "CPU",
  /* 2  */ "ULA",
  /* 3  */ "REGISTRADORES",
  /* 4 */ "RAM",
  /* 5 */ "ROM",
  /* 6 */ "EPROM",
  /* 7 */ "FLASH",
  /* 8 */ "MASSA",
  /* 9 */ "DMA",
  /* 10 */ "CS",
  /* 11 */ "ADDRESSBUS",
  /* 12 */ "DATABUS",
  /* 13 */ "I5",
  /* 14 */ "I7",
  /* 15 */ "DUALCORE",
  /* 16 */ "QUADCORE",
  /* 17 */ "THREADS",
  /* 18 */ "CACHE",
];

/* Primeiro For Gera a numeração da cruzada */
for (var i = 1; i <= 18; i++) {
  corpo.innerHTML += `<div id="inicio${i}">${i}</div>`;
}

/* For gera a pergunta e a numeração*/
for (var i = 1; i <= 18; i++) {
  perguntas.innerHTML += `<div id="pergunta${i}"><p><span id="qNum">${i}.</span>${listaQuestao[i-1]}</p></div>`;
}

/* For gera todos os quadrados vazios e desativados*/
for (var i = 1; i <= 289; i++) {
  linha.innerHTML += `<input onkeyup="veriClica()" style='border:none;background:none;' maxlength="1" type="text" id="i${i}" disabled="true">`;
}

/* For que desenha e habilita input */
for (var i = 16; i < 186; i += 17) {
  document.getElementById(`i${i}`).style.border = "1px solid black";
  document.getElementById(`i${i}`).disabled = false;
}
for (var i = 59; i <= 60; i++) {
  document.getElementById(`i${i}`).style.border = "1px solid black";
  document.getElementById(`i${i}`).disabled = false;
}
for (var i = 85; i > 72; i--) {
  document.getElementById(`i${i}`).style.border = "1px solid black";
  document.getElementById(`i${i}`).disabled = false;
}
for (var i = 76; i < 94; i += 17) {
  document.getElementById(`i${i}`).style.border = "1px solid black";
  document.getElementById(`i${i}`).disabled = false;
}
for (var i = 119; i > 111; i--) {
  document.getElementById(`i${i}`).style.border = "1px solid black";
  document.getElementById(`i${i}`).disabled = false;
}
for (var i = 79; i < 266; i += 17) {
  document.getElementById(`i${i}`).style.border = "1px solid black";
  document.getElementById(`i${i}`).disabled = false;
}
for (var i = 80; i < 301; i += 17) {
  document.getElementById(`i${i}`).style.border = "1px solid black";
  document.getElementById(`i${i}`).disabled = false;
}
for (var i = 165; i > 156; i--) {
  document.getElementById(`i${i}`).style.border = "1px solid black";
  document.getElementById(`i${i}`).disabled = false;
}
for (var i = 144; i < 229; i += 17) {
  document.getElementById(`i${i}`).style.border = "1px solid black";
  document.getElementById(`i${i}`).disabled = false;
}
for (var i = 205; i < 217; i++) {
  document.getElementById(`i${i}`).style.border = "1px solid black";
  document.getElementById(`i${i}`).disabled = false;
}
for (var i = 248; i < 299; i += 17) {
  document.getElementById(`i${i}`).style.border = "1px solid black";
  document.getElementById(`i${i}`).disabled = false;
}
for (var i = 282; i < 285; i++) {
  document.getElementById(`i${i}`).style.border = "1px solid black";
  document.getElementById(`i${i}`).disabled = false;
}

function veriClica() {
  for (var contador = 0; contador < palavras.length; contador++) {
    var palavraAtual = ""; 
    for (var contadorPosicao = 0; contadorPosicao < listaPosicao[contador].length; contadorPosicao++) {

      palavraAtual += document.getElementById(listaPosicao[contador][contadorPosicao]).value.toUpperCase();
      console.log(palavraAtual);
    }
    console.log(palavraAtual);
    if (palavraAtual == palavras[contador]) {
      document.getElementById(`pergunta${contador + 1}`).style.color = "#0F0";
    } else {
      document.getElementById(`pergunta${contador + 1}`).style.color = "#FFF";
    }
  }
}
/* Vericlica gera um loop enquanto o contador
não chegar na quantidade de palavras porque ele tem que verificar
todas as palavras */

/* Lista posicao
[0] [i282, i283, i284]
var palavraAtual soma o valor do input atual */

