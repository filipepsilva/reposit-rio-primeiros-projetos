var jogador1 = 0;
var jogador2 = 0;
var placar;

/*if (jogador1 > -1) {
    if (jogador1 > 0) { 
    console.log ('Jogador 1 marcou 01 ponto');
} else if (jogador2 > 0) {
    console.log ('Jogador 2 marcou 01 ponto');
} else {
    console.log ('Ninguém marcou ponto');
}
}*/

//Usando If Ternário
jogador1 != -1 && jogador2 != -1 ? console.log ('Os jogadores são válidos'): 
console.log ('Jogadores Inválidos');
//Usando If
if (jogador1 > 0 && jogador2 == 0) { 
    console.log ('Jogador 1 marcou 01 ponto');
    placar = jogador1 > jogador2;
}
//Usando else If
else if (jogador2 > 0 && jogador1 == 0)  {
    console.log ('Jogador 2 marcou 01 ponto');
    placar = jogador2 > jogador1;
} 
//Usando else
else {
    console.log ('Ninguém marcou ponto');
}
//Usando Switch
switch (placar) {
    case placar = jogador1 > jogador2:
    console.log ('jogador1 ganhou');
    break;
    case placar = jogador2 > jogador1:
        console.log ('jogador2 ganhou');
        break;
        default:
            console.log ('Ninguém ganhou');
    }
