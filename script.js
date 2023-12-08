var listaQuestao = [
  `Um componente eletrônico responsável pelo processamento de tarefas`,

  `um circuito combinatório responsável pela execução de somas, subtrações e funções lógicas, em um sistema digital`,

  `um dispositivo usado para armazenar dados.`,

  `Um componente volátil que armazena informação`,

  `Um componente não volátil de armazenamento que é incapaz de sobrescrever as informações gravadas`,

  `Um componente não volátil que armazena informação`,

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
  ["i171", "i172", "i173"], /* i248 C, i265 P, i282 U */
  ["i173", "i190", "i207"],/* i282 U, i283 L, i284 A */
  ["i73", "i74", "i75", "i76", "i77", "i78", "i79", "i80",  "i81", "i82", "i83", "i84", "i85"], // i73 R, i74 E, i75 G, i76 I, i77 S, i78 T, i79 R, i80 A, i81 D, i82 O, i83 R, i84 E, i85 S
  ["i79", "i96", "i113"], // i79 R, i96 A, i113 M
  ["i211", "i228", "i245"], // i211 R, i228 O, i245 M
  ["i212", "i213", "i214", "i215", "i216"], // i212 E, i213 P, i214 R, i215 O, i216 M
  ["i166", "i167", "i168", "i169", "i170"], // i166 F, i167 L, i168 A, i169 S, i170 H
  ["i216", "i233", "i250", "i267", "i284"], // i216 M, i233 A, i250 S, i267 S, i284 A
  ["i14", "i15", "i16"], // i14 D, i15 M, i16 A
  ["i124", "i125"], // i124 C, i125 S
  ["i16", "i33", "i50", "i67", "i84", "i101", "i118", "i135", "i152", "i169"], 
  ["i181", "i182", "i183", "i184", "i185", "i186", "i187"],
  ["i76", "i59"],
  ["i76", "i93"],
  ["i205", "i206", "i207", "i208", "i209", "i210", "i211", "i212"],
  ["i130", "i147", "i164", "i181", "i198", "i215", "i232", "i249"],
  ["i23", "i40", "i57", "i74", "i91", "i108", "i125"],
  ["i124", "i141", "i158", "i175", "i192"],
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
for (var NumQuestao = 1; NumQuestao <= 18; NumQuestao+=1) {
  corpo.innerHTML += `<div id="inicio${NumQuestao}">${NumQuestao}</div>`;
}

/* For gera a pergunta e a numeração*/
for (var questao = 1; questao <= 18; questao+=1) {
  perguntas.innerHTML += `<div id="pergunta${questao}"><p><span id="qNum">${questao}.</span>${listaQuestao[questao - 1]}</p></div>`;
}

/* For gera todos os quadrados vazios e desativados*/
for (var posicao = 1; posicao <= 289; posicao+=1) {
  linha.innerHTML += `<input onkeyup="VerificarResposta()" style='border:none;background:none;' maxlength="1" type="text" id="i${posicao}" disabled="true">`;
}

/* For que desenha e habilita input */
for(var box = 171; box < 174; box += 1){ // CPU
  document.getElementById(`i${box}`).style.border = "1px solid black";
  document.getElementById(`i${box}`).disabled = false;
}
for(var box = 173; box < 224; box += 17){ // ULA
  document.getElementById(`i${box}`).style.border = "1px solid black";
  document.getElementById(`i${box}`).disabled = false;
}
for (var box = 73; box <= 85; box += 1) { // REGISTRADORES
  document.getElementById(`i${box}`).style.border = "1px solid black";
  document.getElementById(`i${box}`).disabled = false;
}
for (var box = 76; box < 94; box += 17) { // I7
  document.getElementById(`i${box}`).style.border = "1px solid black";
  document.getElementById(`i${box}`).disabled = false;
}
for(var box = 79; box < 266; box += 17){ // RAM, QUADCORE
  document.getElementById(`i${box}`).style.border = "1px solid black";
  document.getElementById(`i${box}`).disabled = false;
}
for(var box = 228; box < 262; box += 17){ // ROM
  document.getElementById(`i${box}`).style.border = "1px solid black";
  document.getElementById(`i${box}`).disabled = false;
}
for(var box = 205; box < 217; box += 1){ // DUALCORE, EPROM
  document.getElementById(`i${box}`).style.border = "1px solid black";
  document.getElementById(`i${box}`).disabled = false;
}
for(var box = 233; box <= 284; box += 17){ // MASSA
  document.getElementById(`i${box}`).style.border = "1px solid black";
  document.getElementById(`i${box}`).disabled = false;
}
for(var box = 181; box <= 187; box += 1){ // DATABUS
  document.getElementById(`i${box}`).style.border = "1px solid black";
  document.getElementById(`i${box}`).disabled = false;
}
for(var box = 166; box <= 170; box += 1){ //FLASH
  document.getElementById(`i${box}`).style.border = "1px solid black";
  document.getElementById(`i${box}`).disabled = false;
}
for(var box = 59; box < 60; box += 1){ //I5
  document.getElementById(`i${box}`).style.border = "1px solid black";
  document.getElementById(`i${box}`).disabled = false;
}
for(var box = 14; box <= 16; box += 1){ //DMA
  document.getElementById(`i${box}`).style.border = "1px solid black";
  document.getElementById(`i${box}`).disabled = false;
}
for(var box = 124; box < 209; box += 17){ //CACHE
  document.getElementById(`i${box}`).style.border = "1px solid black";
  document.getElementById(`i${box}`).disabled = false;
}
for(var box = 23; box < 142; box += 17){ //THREADS, CS
  document.getElementById(`i${box}`).style.border = "1px solid black";
  document.getElementById(`i${box}`).disabled = false;
}
for(var box = 33; box < 169; box += 17){ //ADDRESSBUS
  document.getElementById(`i${box}`).style.border = "1px solid black";
  document.getElementById(`i${box}`).disabled = false;
}

function VerificarResposta() {
  for (var contador = 0; contador < palavras.length; contador+=1) {
    var palavraAtual = "";
    for (var contadorPosicao = 0; contadorPosicao < listaPosicao[contador].length; contadorPosicao+=1) {

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

