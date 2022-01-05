"use strict";

const randomDamage = () => Math.floor(Math.random() * 10) + 1;

function chooseOption(opt1,opt2) {
    const randNum = Math.round(Math.random());
    if (randNum === 0) {
        return opt1;
    } else {
        return opt2;
    }
}

const attackPlayer = function(health) {
    return health - randomDamage();
}

const logHealth = (player,health) => console.log("${player}health: ${health}");

const logDeath = (winner,loser) => console.log("${winner} defeated ${loser}");

const isDead = health => health <= 0 ? true : false;

function fight(player1,player2,player1Health,player2Health) {
    while(player1Health > 0 && player2Health > 0) {
        const attacker = chooseOption(player1,player2);
        if(attacker === player1) {
        player2Health = attackPlayer(player2Health);
        logHealth(player2,player2Health);
        if(isDead(player2Health) === true) {
            logDeath(player1,player2);
    }
    } else {
         player1Health = attackPlayer(player1Health);
         logHealth(player1,player1Health);
         if(isDead(player1Health) === true) {
            logDeath(player2,player1);
        }
    }
}
}