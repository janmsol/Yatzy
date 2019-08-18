var whichPlayer = 1;
var numberOfRolls = 0;
var numberOfTurns = 0;

var valDice1 = 0;
var valDice2 = 0;
var valDice3 = 0;
var valDice4 = 0;
var valDice5 = 0;

function rollDice1() {
    var dice = document.getElementById("dice1");
    if (dice.placeholder==="") {
        var rand = Math.floor((Math.random() * 6) + 1);
        if (rand === 1) {
            dice.src = "dices/dice_1.PNG";
            dice.value = "1";
        }
        else if (rand === 2) {
            dice.src = "dices/dice_2.PNG";
            dice.value = "2";
        }
        else if (rand === 3) {
            dice.src = "dices/dice_3.PNG";
            dice.value = "3";
        }
        else if (rand === 4) {
            dice.src = "dices/dice_4.PNG";
            dice.value = "4";
        }
        else if (rand === 5) {
            dice.src = "dices/dice_5.PNG";
            dice.value = "5";
        }
        else if (rand === 6) {
            dice.src = "dices/dice_6.PNG";
            dice.value = "6";
        }
    }
}

function rollDice2() {
    var dice = document.getElementById("dice2");
    if (dice.placeholder==="") {
        var rand = Math.floor((Math.random() * 6) + 1);
        if (rand === 1) {
            dice.src = "dices/dice_1.PNG";
            dice.value = "1";
        }
        else if (rand === 2) {
            dice.src = "dices/dice_2.PNG";
            dice.value = "2";
        }
        else if (rand === 3) {
            dice.src = "dices/dice_3.PNG";
            dice.value = "3";
        }
        else if (rand === 4) {
            dice.src = "dices/dice_4.PNG";
            dice.value = "4";
        }
        else if (rand === 5) {
            dice.src = "dices/dice_5.PNG";
            dice.value = "5";
        }
        else if (rand === 6) {
            dice.src = "dices/dice_6.PNG";
            dice.value = "6";
        }
    }
}

function rollDice3() {
    var dice = document.getElementById("dice3");
    if (dice.placeholder==="") {
        var rand = Math.floor((Math.random() * 6) + 1);
        if (rand === 1) {
            dice.src = "dices/dice_1.PNG";
            dice.value = "1";
        }
        else if (rand === 2) {
            dice.src = "dices/dice_2.PNG";
            dice.value = "2";
        }
        else if (rand === 3) {
            dice.src = "dices/dice_3.PNG";
            dice.value = "3";
        }
        else if (rand === 4) {
            dice.src = "dices/dice_4.PNG";
            dice.value = "4";
        }
        else if (rand === 5) {
            dice.src = "dices/dice_5.PNG";
            dice.value = "5";
        }
        else if (rand === 6) {
            dice.src = "dices/dice_6.PNG";
            dice.value = "6";
        }
    }
}

function rollDice4() {
    var dice = document.getElementById("dice4");
    if (dice.placeholder==="") {
        var rand = Math.floor((Math.random() * 6) + 1);
        if (rand === 1) {
            dice.src = "dices/dice_1.PNG";
            dice.value = "1";
        }
        else if (rand === 2) {
            dice.src = "dices/dice_2.PNG";
            dice.value = "2";
        }
        else if (rand === 3) {
            dice.src = "dices/dice_3.PNG";
            dice.value = "3";
        }
        else if (rand === 4) {
            dice.src = "dices/dice_4.PNG";
            dice.value = "4";
        }
        else if (rand === 5) {
            dice.src = "dices/dice_5.PNG";
            dice.value = "5";
        }
        else if (rand === 6) {
            dice.src = "dices/dice_6.PNG";
            dice.value = "6";
        }
    }
}

function rollDice5() {
    var dice = document.getElementById("dice5");
    if (dice.placeholder==="") {
        var rand = Math.floor((Math.random() * 6) + 1);
        if (rand === 1) {
            dice.src = "dices/dice_1.PNG";
            dice.value = "1";
        }
        else if (rand === 2) {
            dice.src = "dices/dice_2.PNG";
            dice.value = "2";
        }
        else if (rand === 3) {
            dice.src = "dices/dice_3.PNG";
            dice.value = "3";
        }
        else if (rand === 4) {
            dice.src = "dices/dice_4.PNG";
            dice.value = "4";
        }
        else if (rand === 5) {
            dice.src = "dices/dice_5.PNG";
            dice.value = "5";
        }
        else if (rand === 6) {
            dice.src = "dices/dice_6.PNG";
            dice.value = "6";
        }
    }
}

function rollDice() {
    if(numberOfRolls<3) {
        rollDice1();
        rollDice2();
        rollDice3();
        rollDice4();
        rollDice5();
        numberOfRolls++;
        numRoll.value = 3-numberOfRolls;
    }
}

function unHold(){
    dice1.placeholder="";
    dice2.placeholder="";
    dice3.placeholder="";
    dice4.placeholder="";
    dice5.placeholder="";
}

function holdDice1() {
    var dice = document.getElementById("dice1");
    if(numberOfRolls>0) {
        if (dice.placeholder === "") {
            dice.placeholder = "hold"
        }
        else {
            dice.placeholder = ""
        }
    }
}

function holdDice2() {
    var dice = document.getElementById("dice2");
    if(numberOfRolls>0) {
        if (dice.placeholder === "") {
            dice.placeholder = "hold"
        }
        else {
            dice.placeholder = ""
        }
    }
}

function holdDice3() {
    var dice = document.getElementById("dice3");
    if(numberOfRolls>0) {
        if (dice.placeholder === "") {
            dice.placeholder = "hold"
        }
        else {
            dice.placeholder = ""
        }
    }
}

function holdDice4() {
    var dice = document.getElementById("dice4");
    if(numberOfRolls>0) {
        if (dice.placeholder === "") {
            dice.placeholder = "hold"
        }
        else {
            dice.placeholder = ""
        }
    }
}

function holdDice5() {
    var dice = document.getElementById("dice5");
    if(numberOfRolls>0) {
        if (dice.placeholder === "") {
            dice.placeholder = "hold"
        }
        else {
            dice.placeholder = ""
        }
    }
}

function setplayer1One() {
    if(whichPlayer === 1) {
        if(numberOfRolls>0) {
            if (player1One.placeholder === "") {
                if (dice1.value === "1") {
                    valDice1 = parseInt(dice1.value);
                }
                else{
                    valDice1 = 0;
                }
                if (dice2.value === "1") {
                    valDice2 = parseInt(dice2.value);
                }
                else{
                    valDice2 = 0;
                }
                if (dice3.value === "1") {
                    valDice3 = parseInt(dice3.value);
                }
                else{
                    valDice3 = 0;
                }
                if (dice4.value === "1") {
                    valDice4 = parseInt(dice4.value);
                }
                else{
                    valDice4 = 0;
                }
                if (dice5.value === "1") {
                    valDice5 = parseInt(dice5.value);
                }
                else{
                    valDice5 = 0;
                }
                player1One.value = valDice1 + valDice2 + valDice3 + valDice4 + valDice5;
                player1One.placeholder = "set";
                whichPlayer = 2;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer2One() {
    if(whichPlayer === 2) {
        if (numberOfRolls > 0) {
            if (player2One.placeholder === "") {
                if (dice1.value === "1") {
                    valDice1 = parseInt(dice1.value);
                }
                else{
                    valDice1 = 0;
                }
                if (dice2.value === "1") {
                    valDice2 = parseInt(dice2.value);
                }
                else{
                    valDice2 = 0;
                }
                if (dice3.value === "1") {
                    valDice3 = parseInt(dice3.value);
                }
                else{
                    valDice3 = 0;
                }
                if (dice4.value === "1") {
                    valDice4 = parseInt(dice4.value);
                }
                else{
                    valDice4 = 0;
                }
                if (dice5.value === "1") {
                    valDice5 = parseInt(dice5.value);
                }
                else{
                    valDice5 = 0;
                }
                player2One.value = valDice1 + valDice2 + valDice3 + valDice4 + valDice5;
                player2One.placeholder = "set";
                whichPlayer = 1;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer1Two() {
    if(whichPlayer === 1) {
        if(numberOfRolls>0) {
            if (player1Two.placeholder === "") {
                if (dice1.value === "2") {
                    valDice1 = parseInt(dice1.value);
                }
                else{
                    valDice1 = 0;
                }
                if (dice2.value === "2") {
                    valDice2 = parseInt(dice2.value);
                }
                else{
                    valDice2 = 0;
                }
                if (dice3.value === "2") {
                    valDice3 = parseInt(dice3.value);
                }
                else{
                    valDice3 = 0;
                }
                if (dice4.value === "2") {
                    valDice4 = parseInt(dice4.value);
                }
                else{
                    valDice4 = 0;
                }
                if (dice5.value === "2") {
                    valDice5 = parseInt(dice5.value);
                }
                else{
                    valDice5 = 0;
                }
                player1Two.value = valDice1 + valDice2 + valDice3 + valDice4 + valDice5;
                player1Two.placeholder = "set";
                whichPlayer = 2;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer2Two() {
    if(whichPlayer === 2) {
        if (numberOfRolls > 0) {
            if (player2Two.placeholder === "") {
                if (dice1.value === "2") {
                    valDice1 = parseInt(dice1.value);
                }
                else{
                    valDice1 = 0;
                }
                if (dice2.value === "2") {
                    valDice2 = parseInt(dice2.value);
                }
                else{
                    valDice2 = 0;
                }
                if (dice3.value === "2") {
                    valDice3 = parseInt(dice3.value);
                }
                else{
                    valDice3 = 0;
                }
                if (dice4.value === "2") {
                    valDice4 = parseInt(dice4.value);
                }
                else{
                    valDice4 = 0;
                }
                if (dice5.value === "2") {
                    valDice5 = parseInt(dice5.value);
                }
                else{
                    valDice5 = 0;
                }
                player2Two.value = valDice1 + valDice2 + valDice3 + valDice4 + valDice5;
                player2Two.placeholder = "set";
                whichPlayer = 1;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer1Three() {
    if(whichPlayer === 1) {
        if(numberOfRolls>0) {
            if (player1Three.placeholder === "") {
                if (dice1.value === "3") {
                    valDice1 = parseInt(dice1.value);
                }
                else{
                    valDice1 = 0;
                }
                if (dice2.value === "3") {
                    valDice2 = parseInt(dice2.value);
                }
                else{
                    valDice2 = 0;
                }
                if (dice3.value === "3") {
                    valDice3 = parseInt(dice3.value);
                }
                else{
                    valDice3 = 0;
                }
                if (dice4.value === "3") {
                    valDice4 = parseInt(dice4.value);
                }
                else{
                    valDice4 = 0;
                }
                if (dice5.value === "3") {
                    valDice5 = parseInt(dice5.value);
                }
                else{
                    valDice5 = 0;
                }
                player1Three.value = valDice1 + valDice2 + valDice3 + valDice4 + valDice5;
                player1Three.placeholder = "set";
                whichPlayer = 2;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer2Three() {
    if(whichPlayer === 2) {
        if (numberOfRolls > 0) {
            if (player2Three.placeholder === "") {
                if (dice1.value === "3") {
                    valDice1 = parseInt(dice1.value);
                }
                else{
                    valDice1 = 0;
                }
                if (dice2.value === "3") {
                    valDice2 = parseInt(dice2.value);
                }
                else{
                    valDice2 = 0;
                }
                if (dice3.value === "3") {
                    valDice3 = parseInt(dice3.value);
                }
                else{
                    valDice3 = 0;
                }
                if (dice4.value === "3") {
                    valDice4 = parseInt(dice4.value);
                }
                else{
                    valDice4 = 0;
                }
                if (dice5.value === "3") {
                    valDice5 = parseInt(dice5.value);
                }
                else{
                    valDice5 = 0;
                }
                player2Three.value = valDice1 + valDice2 + valDice3 + valDice4 + valDice5;
                player2Three.placeholder = "set";
                whichPlayer = 1;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer1Four() {
    if(whichPlayer === 1) {
        if(numberOfRolls>0) {
            if (player1Four.placeholder === "") {
                if (dice1.value === "4") {
                    valDice1 = parseInt(dice1.value);
                }
                else{
                    valDice1 = 0;
                }
                if (dice2.value === "4") {
                    valDice2 = parseInt(dice2.value);
                }
                else{
                    valDice2 = 0;
                }
                if (dice3.value === "4") {
                    valDice3 = parseInt(dice3.value);
                }
                else{
                    valDice3 = 0;
                }
                if (dice4.value === "4") {
                    valDice4 = parseInt(dice4.value);
                }
                else{
                    valDice4 = 0;
                }
                if (dice5.value === "4") {
                    valDice5 = parseInt(dice5.value);
                }
                else{
                    valDice5 = 0;
                }
                player1Four.value = valDice1 + valDice2 + valDice3 + valDice4 + valDice5;
                player1Four.placeholder = "set";
                whichPlayer = 2;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer2Four() {
    if(whichPlayer === 2) {
        if (numberOfRolls > 0) {
            if (player2Four.placeholder === "") {
                if (dice1.value === "4") {
                    valDice1 = parseInt(dice1.value);
                }
                else{
                    valDice1 = 0;
                }
                if (dice2.value === "4") {
                    valDice2 = parseInt(dice2.value);
                }
                else{
                    valDice2 = 0;
                }
                if (dice3.value === "4") {
                    valDice3 = parseInt(dice3.value);
                }
                else{
                    valDice3 = 0;
                }
                if (dice4.value === "4") {
                    valDice4 = parseInt(dice4.value);
                }
                else{
                    valDice4 = 0;
                }
                if (dice5.value === "4") {
                    valDice5 = parseInt(dice5.value);
                }
                else{
                    valDice5 = 0;
                }
                player2Four.value = valDice1 + valDice2 + valDice3 + valDice4 + valDice5;
                player2Four.placeholder = "set";
                whichPlayer = 1;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer1Five() {
    if(whichPlayer === 1) {
        if(numberOfRolls>0) {
            if (player1Five.placeholder === "") {
                if (dice1.value === "5") {
                    valDice1 = parseInt(dice1.value);
                }
                else{
                    valDice1 = 0;
                }
                if (dice2.value === "5") {
                    valDice2 = parseInt(dice2.value);
                }
                else{
                    valDice2 = 0;
                }
                if (dice3.value === "5") {
                    valDice3 = parseInt(dice3.value);
                }
                else{
                    valDice3 = 0;
                }
                if (dice4.value === "5") {
                    valDice4 = parseInt(dice4.value);
                }
                else{
                    valDice4 = 0;
                }
                if (dice5.value === "5") {
                    valDice5 = parseInt(dice5.value);
                }
                else{
                    valDice5 = 0;
                }
                player1Five.value = valDice1 + valDice2 + valDice3 + valDice4 + valDice5;
                player1Five.placeholder = "set";
                whichPlayer = 2;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer2Five() {
    if(whichPlayer === 2) {
        if (numberOfRolls > 0) {
            if (player2Five.placeholder === "") {
                if (dice1.value === "5") {
                    valDice1 = parseInt(dice1.value);
                }
                else{
                    valDice1 = 0;
                }
                if (dice2.value === "5") {
                    valDice2 = parseInt(dice2.value);
                }
                else{
                    valDice2 = 0;
                }
                if (dice3.value === "5") {
                    valDice3 = parseInt(dice3.value);
                }
                else{
                    valDice3 = 0;
                }
                if (dice4.value === "5") {
                    valDice4 = parseInt(dice4.value);
                }
                else{
                    valDice4 = 0;
                }
                if (dice5.value === "5") {
                    valDice5 = parseInt(dice5.value);
                }
                else{
                    valDice5 = 0;
                }
                player2Five.value = valDice1 + valDice2 + valDice3 + valDice4 + valDice5;
                player2Five.placeholder = "set";
                whichPlayer = 1;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer1Six() {
    if(whichPlayer === 1) {
        if(numberOfRolls>0) {
            if (player1Six.placeholder === "") {
                if (dice1.value === "6") {
                    valDice1 = parseInt(dice1.value);
                }
                else{
                    valDice1 = 0;
                }
                if (dice2.value === "6") {
                    valDice2 = parseInt(dice2.value);
                }
                else{
                    valDice2 = 0;
                }
                if (dice3.value === "6") {
                    valDice3 = parseInt(dice3.value);
                }
                else{
                    valDice3 = 0;
                }
                if (dice4.value === "6") {
                    valDice4 = parseInt(dice4.value);
                }
                else{
                    valDice4 = 0;
                }
                if (dice5.value === "6") {
                    valDice5 = parseInt(dice5.value);
                }
                else{
                    valDice5 = 0;
                }
                player1Six.value = valDice1 + valDice2 + valDice3 + valDice4 + valDice5;
                player1Six.placeholder = "set";
                whichPlayer = 2;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer2Six() {
    if(whichPlayer === 2) {
        if (numberOfRolls > 0) {
            if (player2Six.placeholder === "") {
                if (dice1.value === "6") {
                    valDice1 = parseInt(dice1.value);
                }
                else{
                    valDice1 = 0;
                }
                if (dice2.value === "6") {
                    valDice2 = parseInt(dice2.value);
                }
                else{
                    valDice2 = 0;
                }
                if (dice3.value === "6") {
                    valDice3 = parseInt(dice3.value);
                }
                else{
                    valDice3 = 0;
                }
                if (dice4.value === "6") {
                    valDice4 = parseInt(dice4.value);
                }
                else{
                    valDice4 = 0;
                }
                if (dice5.value === "6") {
                    valDice5 = parseInt(dice5.value);
                }
                else{
                    valDice5 = 0;
                }
                player2Six.value = valDice1 + valDice2 + valDice3 + valDice4 + valDice5;
                player2Six.placeholder = "set";
                whichPlayer = 1;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer1Pair() {
    if(whichPlayer === 1) {
        if(numberOfRolls>0) {
            if (player1Pair.placeholder === "") {
                var sum1 = 0;
                var sum2 = 0;
                var sum3 = 0;
                var sum4 = 0;
                valDice1 = parseInt(dice1.value);
                valDice2 = parseInt(dice2.value);
                valDice3 = parseInt(dice3.value);
                valDice4 = parseInt(dice4.value);
                valDice5 = parseInt(dice5.value);
                if(valDice1 === valDice2 ||valDice1 === valDice3 ||valDice1 === valDice4 ||valDice1 === valDice5){
                    sum1 = valDice1*2;
                }
                if(valDice2 === valDice3 || valDice2 === valDice4 || valDice2 === valDice5){
                    sum2 = valDice2*2;
                }
                if(valDice3 === valDice4 || valDice3 === valDice5){
                    sum3 = valDice3*2;
                }
                if(valDice4 === valDice5){
                    sum4 = valDice4*2;
                }
                var sums = [sum1, sum2, sum3, sum4];
                var sum = 0;
                for(var i=0; i<4; i++){
                    if(sums[i]>sum){
                        sum=sums[i];
                    }
                }
                player1Pair.value = sum;
                player1Pair.placeholder = "set";
                whichPlayer = 2;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer2Pair() {
    if(whichPlayer === 2) {
        if(numberOfRolls>0) {
            if (player2Pair.placeholder === "") {
                var sum1 = 0;
                var sum2 = 0;
                var sum3 = 0;
                var sum4 = 0;
                valDice1 = parseInt(dice1.value);
                valDice2 = parseInt(dice2.value);
                valDice3 = parseInt(dice3.value);
                valDice4 = parseInt(dice4.value);
                valDice5 = parseInt(dice5.value);
                if(valDice1 === valDice2 ||valDice1 === valDice3 ||valDice1 === valDice4 ||valDice1 === valDice5){
                    sum1 = valDice1*2;
                }
                if(valDice2 === valDice3 || valDice2 === valDice4 || valDice2 === valDice5){
                    sum2 = valDice2*2;
                }
                if(valDice3 === valDice4 || valDice3 === valDice5){
                    sum3 = valDice3*2;
                }
                if(valDice4 === valDice5){
                    sum4 = valDice4*2;
                }
                var sums = [sum1, sum2, sum3, sum4];
                var sum = 0;
                for(var i=0; i<4; i++){
                    if(sums[i]>sum){
                        sum=sums[i];
                    }
                }
                player2Pair.value = sum;
                player2Pair.placeholder = "set";
                whichPlayer = 1;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer1Pair2() {
    if(whichPlayer === 1) {
        if(numberOfRolls>0) {
            if (player1Pair2.placeholder === "") {
                var sum1 = 0;
                var sum2 = 0;
                var sum3 = 0;
                var sum4 = 0;
                valDice1 = parseInt(dice1.value);
                valDice2 = parseInt(dice2.value);
                valDice3 = parseInt(dice3.value);
                valDice4 = parseInt(dice4.value);
                valDice5 = parseInt(dice5.value);
                if(valDice1 === valDice2 ||valDice1 === valDice3 ||valDice1 === valDice4 ||valDice1 === valDice5){
                    sum1 = valDice1*2;
                }
                if(valDice2 === valDice3 || valDice2 === valDice4 || valDice2 === valDice5){
                    sum2 = valDice2*2;
                }
                if(valDice3 === valDice4 || valDice3 === valDice5){
                    sum3 = valDice3*2;
                }
                if(valDice4 === valDice5){
                    sum4 = valDice4*2;
                }
                var sums = [sum1, sum2, sum3, sum4];
                var sum = 0;
                var sumtwo = 0;
                for(var i=0; i<4; i++) {
                    if (sums[i] > sum) {
                        sum = sums[i];
                    }
                }
                for(i=0; i<4; i++) {
                    if(sums[i]>sumtwo){
                        if(sums[i]!==sum){
                            sumtwo = sums[i];
                        }
                    }
                }
                if(sumtwo!==0){
                    player1Pair2.value = sum + sumtwo;
                }
                else {
                    player1Pair2.value = 0;
                }
                player1Pair2.placeholder = "set";
                whichPlayer = 2;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer2Pair2() {
    if(whichPlayer === 2) {
        if(numberOfRolls>0) {
            if (player2Pair2.placeholder === "") {
                var sum1 = 0;
                var sum2 = 0;
                var sum3 = 0;
                var sum4 = 0;
                valDice1 = parseInt(dice1.value);
                valDice2 = parseInt(dice2.value);
                valDice3 = parseInt(dice3.value);
                valDice4 = parseInt(dice4.value);
                valDice5 = parseInt(dice5.value);
                if(valDice1 === valDice2 ||valDice1 === valDice3 ||valDice1 === valDice4 ||valDice1 === valDice5){
                    sum1 = valDice1*2;
                }
                if(valDice2 === valDice3 || valDice2 === valDice4 || valDice2 === valDice5){
                    sum2 = valDice2*2;
                }
                if(valDice3 === valDice4 || valDice3 === valDice5){
                    sum3 = valDice3*2;
                }
                if(valDice4 === valDice5){
                    sum4 = valDice4*2;
                }
                var sums = [sum1, sum2, sum3, sum4];
                var sum = 0;
                var sumtwo = 0;
                for(var i=0; i<4; i++) {
                    if (sums[i] > sum) {
                        sum = sums[i];
                    }
                }
                for(i=0; i<4; i++) {
                    if(sums[i]>sumtwo){
                        if(sums[i]!==sum){
                            sumtwo = sums[i];
                        }
                    }
                }
                if(sumtwo!==0){
                    player2Pair2.value = sum + sumtwo;
                }
                else {
                    player2Pair2.value = 0;
                }
                player2Pair2.placeholder = "set";
                whichPlayer = 1;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer1Same3() {
    if(whichPlayer === 1) {
        if(numberOfRolls>0) {
            if (player1Same3.placeholder === "") {
                var sum1 = 0;
                var sum2 = 0;
                var sum3 = 0;
                valDice1 = parseInt(dice1.value);
                valDice2 = parseInt(dice2.value);
                valDice3 = parseInt(dice3.value);
                valDice4 = parseInt(dice4.value);
                valDice5 = parseInt(dice5.value);
                if((valDice1 === valDice2 && (valDice1 === valDice3 || valDice1 === valDice4 || valDice1 === valDice5))||
                    (valDice1 === valDice3 && (valDice1 === valDice4 || valDice1 === valDice5))||
                    (valDice1 === valDice4 && valDice1 === valDice5)){
                    sum1 = valDice1*3;
                }
                if((valDice2 === valDice3 && (valDice2 === valDice4 || valDice2 === valDice5))||
                    (valDice2 === valDice4 && valDice2 === valDice5)){
                    sum2 = valDice2*3;
                }
                if(valDice3 === valDice4 && valDice3 === valDice5){
                    sum3 = valDice3*3;
                }
                var sums = [sum1, sum2, sum3];
                var sum = 0;
                for(var i=0; i<3; i++){
                    if(sums[i]>sum){
                        sum=sums[i];
                    }
                }
                player1Same3.value = sum;
                player1Same3.placeholder = "set";
                whichPlayer = 2;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer2Same3() {
    if(whichPlayer === 2) {
        if(numberOfRolls>0) {
            if (player2Same3.placeholder === "") {
                var sum1 = 0;
                var sum2 = 0;
                var sum3 = 0;
                valDice1 = parseInt(dice1.value);
                valDice2 = parseInt(dice2.value);
                valDice3 = parseInt(dice3.value);
                valDice4 = parseInt(dice4.value);
                valDice5 = parseInt(dice5.value);
                if((valDice1 === valDice2 && (valDice1 === valDice3 || valDice1 === valDice4 || valDice1 === valDice5))||
                    (valDice1 === valDice3 && (valDice1 === valDice4 || valDice1 === valDice5))||
                    (valDice1 === valDice4 && valDice1 === valDice5)){
                    sum1 = valDice1*3;
                }
                if((valDice2 === valDice3 && (valDice2 === valDice4 || valDice2 === valDice5))||
                    (valDice2 === valDice4 && valDice2 === valDice5)){
                    sum2 = valDice2*3;
                }
                if(valDice3 === valDice4 && valDice3 === valDice5){
                    sum3 = valDice3*3;
                }
                var sums = [sum1, sum2, sum3];
                var sum = 0;
                for(var i=0; i<3; i++){
                    if(sums[i]>sum){
                        sum=sums[i];
                    }
                }
                player2Same3.value = sum;
                player2Same3.placeholder = "set";
                whichPlayer = 1;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer1Same4() {
    if(whichPlayer === 1) {
        if(numberOfRolls>0) {
            if (player1Same4.placeholder === "") {
                var sum1 = 0;
                var sum2 = 0;
                var sum3 = 0;
                valDice1 = parseInt(dice1.value);
                valDice2 = parseInt(dice2.value);
                valDice3 = parseInt(dice3.value);
                valDice4 = parseInt(dice4.value);
                valDice5 = parseInt(dice5.value);
                if(valDice1 === valDice2 && valDice1 === valDice3 && (valDice1 === valDice4 || valDice1 === valDice5)){
                    sum1 = valDice1*4;
                }
                if ((valDice1 === valDice2 || valDice1 === valDice3) && valDice1 === valDice4 && valDice1 === valDice5){
                    sum2 = valDice1*4;
                }
                if(valDice2 === valDice3 && valDice2 === valDice4 && valDice2 === valDice5){
                    sum3 = valDice2*4;
                }

                var sums = [sum1, sum2, sum3];
                var sum = 0;
                for(var i=0; i<3; i++){
                    if(sums[i]>sum){
                        sum=sums[i];
                    }
                }
                player1Same4.value = sum;
                player1Same4.placeholder = "set";
                whichPlayer = 2;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer2Same4() {
    if(whichPlayer === 2) {
        if(numberOfRolls>0) {
            if (player2Same4.placeholder === "") {
                var sum1 = 0;
                var sum2 = 0;
                var sum3 = 0;
                valDice1 = parseInt(dice1.value);
                valDice2 = parseInt(dice2.value);
                valDice3 = parseInt(dice3.value);
                valDice4 = parseInt(dice4.value);
                valDice5 = parseInt(dice5.value);
                if(valDice1 === valDice2 && valDice1 === valDice3 && (valDice1 === valDice4 || valDice1 === valDice5)){
                    sum1 = valDice1*4;
                }
                if ((valDice1 === valDice2 || valDice1 === valDice3) && valDice1 === valDice4 && valDice1 === valDice5){
                    sum2 = valDice1*4;
                }
                if(valDice2 === valDice3 && valDice2 === valDice4 && valDice2 === valDice5){
                    sum3 = valDice2*4;
                }

                var sums = [sum1, sum2, sum3];
                var sum = 0;
                for(var i=0; i<3; i++){
                    if(sums[i]>sum){
                        sum=sums[i];
                    }
                }
                player2Same4.value = sum;
                player2Same4.placeholder = "set";
                whichPlayer = 1;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer1House() {
    if(whichPlayer === 1) {
        if(numberOfRolls>0) {
            if (player1House.placeholder === "") {
                var sum1 = 0;
                var sum2 = 0;
                var sum3 = 0;
                var sum4 = 0;
                var sum5 = 0;
                var sum6 = 0;
                var sum7 = 0;
                valDice1 = parseInt(dice1.value);
                valDice2 = parseInt(dice2.value);
                valDice3 = parseInt(dice3.value);
                valDice4 = parseInt(dice4.value);
                valDice5 = parseInt(dice5.value);
                if((valDice1 === valDice2 && (valDice1 === valDice3 || valDice1 === valDice4 || valDice1 === valDice5))||
                    (valDice1 === valDice3 && (valDice1 === valDice4 || valDice1 === valDice5))||
                    (valDice1 === valDice4 && valDice1 === valDice5)){
                    sum1 = valDice1*3;
                }
                if((valDice2 === valDice3 && (valDice2 === valDice4 || valDice2 === valDice5))||
                    (valDice2 === valDice4 && valDice2 === valDice5)){
                    sum2 = valDice2*3;
                }
                if(valDice3 === valDice4 && valDice3 === valDice5){
                    sum3 = valDice3*3;
                }
                var sums = [sum1, sum2, sum3];
                var sum = 0;
                for(var i=0; i<3; i++){
                    if(sums[i]>sum){
                        sum=sums[i];
                    }
                }
                if(valDice1 === valDice2 ||valDice1 === valDice3 ||valDice1 === valDice4 ||valDice1 === valDice5){
                    sum4 = valDice1*2;
                }
                if(valDice2 === valDice3 || valDice2 === valDice4 || valDice2 === valDice5){
                    sum5 = valDice2*2;
                }
                if(valDice3 === valDice4 || valDice3 === valDice5){
                    sum6 = valDice3*2;
                }
                if(valDice4 === valDice5){
                    sum7 = valDice4*2;
                }
                sums = [sum4, sum5, sum6, sum7];
                var sumtwo = 0;
                for(i=0; i<4; i++) {
                    if(sums[i]>sumtwo){
                        if(sums[i]!==sum){
                            sumtwo = sums[i];
                        }
                    }
                }
                if(sum!==0 && sumtwo!==0){
                    player1House.value = sum + sumtwo;
                }
                else {
                    player1House.value = 0;
                }
                player1House.placeholder = "set";
                whichPlayer = 2;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer2House() {
    if(whichPlayer === 2) {
        if(numberOfRolls>0) {
            if (player2House.placeholder === "") {
                var sum1 = 0;
                var sum2 = 0;
                var sum3 = 0;
                var sum4 = 0;
                var sum5 = 0;
                var sum6 = 0;
                var sum7 = 0;
                valDice1 = parseInt(dice1.value);
                valDice2 = parseInt(dice2.value);
                valDice3 = parseInt(dice3.value);
                valDice4 = parseInt(dice4.value);
                valDice5 = parseInt(dice5.value);
                if((valDice1 === valDice2 && (valDice1 === valDice3 || valDice1 === valDice4 || valDice1 === valDice5))||
                    (valDice1 === valDice3 && (valDice1 === valDice4 || valDice1 === valDice5))||
                    (valDice1 === valDice4 && valDice1 === valDice5)){
                    sum1 = valDice1*3;
                }
                if((valDice2 === valDice3 && (valDice2 === valDice4 || valDice2 === valDice5))||
                    (valDice2 === valDice4 && valDice2 === valDice5)){
                    sum2 = valDice2*3;
                }
                if(valDice3 === valDice4 && valDice3 === valDice5){
                    sum3 = valDice3*3;
                }
                var sums = [sum1, sum2, sum3];
                var sum = 0;
                for(var i=0; i<3; i++){
                    if(sums[i]>sum){
                        sum=sums[i];
                    }
                }
                if(valDice1 === valDice2 ||valDice1 === valDice3 ||valDice1 === valDice4 ||valDice1 === valDice5){
                    sum4 = valDice1*2;
                }
                if(valDice2 === valDice3 || valDice2 === valDice4 || valDice2 === valDice5){
                    sum5 = valDice2*2;
                }
                if(valDice3 === valDice4 || valDice3 === valDice5){
                    sum6 = valDice3*2;
                }
                if(valDice4 === valDice5){
                    sum7 = valDice4*2;
                }
                sums = [sum4, sum5, sum6, sum7];
                var sumtwo = 0;
                for(i=0; i<4; i++) {
                    if(sums[i]>sumtwo){
                        if(sums[i]!==sum){
                            sumtwo = sums[i];
                        }
                    }
                }
                if(sum!==0 && sumtwo!==0){
                    player2House.value = sum + sumtwo;
                }
                else {
                    player2House.value = 0;
                }
                player2House.placeholder = "set";
                whichPlayer = 1;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer1Chance() {
    if(whichPlayer === 1) {
        if(numberOfRolls>0) {
            if (player1Chance.placeholder === "") {
                valDice1 = parseInt(dice1.value);
                valDice2 = parseInt(dice2.value);
                valDice3 = parseInt(dice3.value);
                valDice4 = parseInt(dice4.value);
                valDice5 = parseInt(dice5.value);
                player1Chance.value = valDice1 + valDice2 + valDice3 + valDice4 + valDice5;
                player1Chance.placeholder = "set";
                whichPlayer = 2;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer2Chance() {
    if(whichPlayer === 2) {
        if(numberOfRolls>0) {
            if (player2Chance.placeholder === "") {
                valDice1 = parseInt(dice1.value);
                valDice2 = parseInt(dice2.value);
                valDice3 = parseInt(dice3.value);
                valDice4 = parseInt(dice4.value);
                valDice5 = parseInt(dice5.value);
                player2Chance.value = valDice1 + valDice2 + valDice3 + valDice4 + valDice5;
                player2Chance.placeholder = "set";
                whichPlayer = 1;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer1Yatzy() {
    if(whichPlayer === 1) {
        if(numberOfRolls>0) {
            if (player1Yatzy.placeholder === "") {
                var sum = 0;
                valDice1 = parseInt(dice1.value);
                valDice2 = parseInt(dice2.value);
                valDice3 = parseInt(dice3.value);
                valDice4 = parseInt(dice4.value);
                valDice5 = parseInt(dice5.value);
                if(valDice1 === valDice2 && valDice1 === valDice3 && valDice1 === valDice4 && valDice1 === valDice5){
                    sum = 50;
                }
                player1Yatzy.value = sum;
                player1Yatzy.placeholder = "set";
                whichPlayer = 2;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer2Yatzy() {
    if(whichPlayer === 2) {
        if(numberOfRolls>0) {
            if (player2Yatzy.placeholder === "") {
                var sum = 0;
                valDice1 = parseInt(dice1.value);
                valDice2 = parseInt(dice2.value);
                valDice3 = parseInt(dice3.value);
                valDice4 = parseInt(dice4.value);
                valDice5 = parseInt(dice5.value);
                if(valDice1 === valDice2 && valDice1 === valDice3 && valDice1 === valDice4 && valDice1 === valDice5){
                    sum = 50;
                }
                player2Yatzy.value = sum;
                player2Yatzy.placeholder = "set";
                whichPlayer = 1;
                numberOfRolls = 0;
                numberOfTurns++;
                unHold();
            }
        }
    }
}

function setplayer1UpSum() {
    var val1 = 0;
    var val2 = 0;
    var val3 = 0;
    var val4 = 0;
    var val5 = 0;
    var val6 = 0;
    if(player1One.value !== "") {
        val1 = parseInt(player1One.value);
    }
    if(player1Two.value !== "") {
        val2 = parseInt(player1Two.value);
    }
    if(player1Three.value !== "") {
        val3 = parseInt(player1Three.value);
    }
    if(player1Four.value !== "") {
        val4 = parseInt(player1Four.value);
    }
    if(player1Five.value !== "") {
        val5 = parseInt(player1Five.value);
    }
    if(player1Six.value !== "") {
        val6 = parseInt(player1Six.value);
    }

    var sum = val1 + val2 + val3 + val4 + val5 + val6;
    player1UpSum.value = sum;
    var bonus = 0;
    if(sum > 62){
        bonus = 50;
    }
    player1Bonus.value = bonus;
}

function setplayer2UpSum() {
    var val1 = 0;
    var val2 = 0;
    var val3 = 0;
    var val4 = 0;
    var val5 = 0;
    var val6 = 0;
    if(player2One.value !== "") {
        val1 = parseInt(player2One.value);
    }
    if(player2Two.value !== "") {
        val2 = parseInt(player2Two.value);
    }
    if(player2Three.value !== "") {
        val3 = parseInt(player2Three.value);
    }
    if(player2Four.value !== "") {
        val4 = parseInt(player2Four.value);
    }
    if(player2Five.value !== "") {
        val5 = parseInt(player2Five.value);
    }
    if(player2Six.value !== "") {
        val6 = parseInt(player2Six.value);
    }

    var sum = val1 + val2 + val3 + val4 + val5 + val6;
    player2UpSum.value = sum;
    var bonus = 0;
    if(sum > 62){
        bonus = 50;
    }
    player2Bonus.value = bonus;
}

function setplayer1Sum() {
    var val1 = 0;
    var val2 = 0;
    var val3 = 0;
    var val4 = 0;
    var val5 = 0;
    var val6 = 0;
    var val7 = 0;
    var val8 = 0;
    var val9 = 0;
    var val10 = 0;
    var val11 = 0;
    if(player1UpSum.value !== "") {
        val1 = parseInt(player1UpSum.value);
    }
    if(player1Bonus.value !== "") {
        val2 = parseInt(player1Bonus.value);
    }
    if(player1Pair.value !== "") {
        val3 = parseInt(player1Pair.value);
    }
    if(player1Pair2.value !== "") {
        val4 = parseInt(player1Pair2.value);
    }
    if(player1Same3.value !== "") {
        val5 = parseInt(player1Same3.value);
    }
    if(player1Same4.value !== "") {
        val6 = parseInt(player1Same4.value);
    }/**
    if(player1sStraight.value !== "") {
        val7 = parseInt(player1sStraight.value);
    }
    if(player1LStraight.value !== "") {
        val8 = parseInt(player1LStraight.value);
    }**/
    if(player1House.value !== "") {
        val9 = parseInt(player1House.value);
    }
    if(player1Chance.value !== "") {
        val10 = parseInt(player1Chance.value);
    }
    if(player1Yatzy.value !== "") {
        val11 = parseInt(player1Yatzy.value);
    }
    player1Sum.value = val1 + val2 + val3 + val4 + val5 + val6 + val7 + val8 + val9 + val10 + val11;
}

function setplayer2Sum() {
    var val1 = 0;
    var val2 = 0;
    var val3 = 0;
    var val4 = 0;
    var val5 = 0;
    var val6 = 0;
    var val7 = 0;
    var val8 = 0;
    var val9 = 0;
    var val10 = 0;
    var val11 = 0;
    if(player2UpSum.value !== "") {
        val1 = parseInt(player2UpSum.value);
    }
    if(player2Bonus.value !== "") {
        val2 = parseInt(player2Bonus.value);
    }
    if(player2Pair.value !== "") {
        val3 = parseInt(player2Pair.value);
    }
    if(player2Pair2.value !== "") {
        val4 = parseInt(player2Pair2.value);
    }
    if(player2Same3.value !== "") {
        val5 = parseInt(player2Same3.value);
    }
    if(player2Same4.value !== "") {
        val6 = parseInt(player2Same4.value);
    }/**
    if(player2sStraight.value !== "") {
        val7 = parseInt(player2sStraight.value);
    }
    if(player2LStraight.value !== "") {
        val8 = parseInt(player2LStraight.value);
    }**/
    if(player2House.value !== "") {
        val9 = parseInt(player2House.value);
    }
    if(player2Chance.value !== "") {
        val10 = parseInt(player2Chance.value);
    }
    if(player2Yatzy.value !== "") {
        val11 = parseInt(player2Yatzy.value);
    }
    player2Sum.value = val1 + val2 + val3 + val4 + val5 + val6 + val7 + val8 + val9 + val10 + val11;
}