
var jumpSound = new Audio("resources/jump.mp3");
var runSound = new Audio("resources/run.mp3");
runSound.loop = true;
var winSound = new Audio("resources/sounds/winsound.wav");
var clickSound = new Audio("resources/sounds/click.wav");
var LoadingSound1 = new Audio("resources/sounds/load.wav");
var levelSound = new Audio("resources/sounds/levelSound.wav");
var achiveSound = new Audio("resources/sounds/achive.mp3");
var back_Sound = new Audio("resources/sounds/background.mp3")



function keyCheck(event) {

    var keyCode = event.which;

    if (keyCode == 13) {//-----Enetr


        clearInterval(idleAnimationId);


        if (moveBackgroundAnimationId == 0) {

            moveBackgroundAnimationId = setInterval(moveBackground, 1);
        }

        if (boyRunAnimationId == 0) {

            boyRunAnimationId = setInterval(boyRunAnimation, 90);
            runSound.play();
        }


        if (boxAnimationId == 0) {

            boxAnimationId = setInterval(boxAnimation, 1);
        }

        if (coinAnimationId_1 == 0) {

            coinAnimationId_1 = setInterval(coinAnimation_1, 1);
        }

        if (bombAnimationId_1 == 0) {

            bombAnimationId_1 = setInterval(bombAnimation_1, 1);
        }

    }

    if (keyCode == 32) {//-----Space



        if (boyJumpAnimationId == 0) {

            clearInterval(boyRunAnimationId);
            clearInterval(idleAnimationId);
            runSound.pause();
            runSound.currentTime = 0;
            coinSound.pause();
            coinSound.currentTime = 0;
            boyRunAnimationId = 0;
            boyRunImageNumber = 1;
            boyJumpAnimationId = setInterval(boyJumpAnimation, 57);
            jumpSound.play();



        }

        if (boxAnimationId == 0) {

            boxAnimationId = setInterval(boxAnimation, 1);
        }


        if (coinAnimationId_1 == 0) {

            coinAnimationId_1 = setInterval(coinAnimation_1, 1);
        }

        if (bombAnimationId_1 == 0) {

            bombAnimationId_1 = setInterval(bombAnimation_1, 1);
        }


    }


}


var backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;

var score = 0;

function moveBackground() {

    // levelSound.play();


    backgroundImagePositionX = backgroundImagePositionX - 1;
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";


    score = score + 1;


    document.getElementById("scoreMain").innerHTML = score;
    document.getElementById("scoreinend").innerHTML = score;
    // for (var s = 0; s = score; s++) {

    //     document.getElementById("scoreinend").innerHTML = score;
    // }


    // Marks checking------------------------------------------------------

    if (score <= 5250) {

        document.getElementById("place").src = "resources/You_Lose/1.png";
        document.getElementById("rank").src = "resources/You_Lose/1.png";


        if (score == 5250) {

            achiveSound.play();
            achiveSound.currentTime = 0;
            document.getElementById("chear").style.visibility = "visible";

        }
    }




    if (score > 5250 & score < 10500) {

        document.getElementById("place").src = "resources/You_Lose/2.png";
        document.getElementById("rank").src = "resources/You_Lose/2.png";
        document.getElementById("lossheader").src = "resources/You_Win/Header.png";
    }

    if (score >= 10500) {


        clearInterval(moveBackgroundAnimationId);

        document.getElementById("place").src = "resources/You_Lose/3.png";
        document.getElementById("rank").src = "resources/You_Lose/3.png";
        document.getElementById("lossheader").src = "resources/You_Win/Header.png";
        winSound.play();
        var EndScreenCommingAnimationId = 0;
        EndScreenCommingAnimationId = setInterval(EndScreenCome, 1);

        // levelSound.pause();
        // levelSound.currentTime = 0;

    }

}



var boyRunAnimationId = 0;
var boyRunImageNumber = 1;

function boyRunAnimation() {


    boyRunImageNumber = boyRunImageNumber + 1;

    if (boyRunImageNumber == 9) {

        boyRunImageNumber = 1;
    }


    document.getElementById("boy").src = "resources/Run (" + boyRunImageNumber + ").png";

}


var boyJumpImageNumber = 1;
var boyJumpAnimationId = 0;
var boyMarginTop = 650;


function boyJumpAnimation() {


    boyJumpImageNumber = boyJumpImageNumber + 1;


    if (boyJumpImageNumber <= 6) {

        boyMarginTop = boyMarginTop - 35;
        //boymarginLeft = boymarginLeft + 20;
        document.getElementById("boy").style.marginTop = boyMarginTop + "px";
        //document.getElementById("boy").style.marginLeft = boymarginLeft + "px";

    }

    if (boyJumpImageNumber >= 7) {

        boyMarginTop = boyMarginTop + 35;
        document.getElementById("boy").style.marginTop = boyMarginTop + "px";


    }

    if (boyJumpImageNumber == 11) {

        clearInterval(boyJumpAnimationId);
        jumpSound.pause();
        jumpSound.currentTime = 0;
        boyJumpAnimationId = 0;
        boyJumpImageNumber = 1;

        boyRunAnimationId = setInterval(boyRunAnimation, 100);
        runSound.play();

        if (moveBackgroundAnimationId == 0) {

            moveBackgroundAnimationId = setInterval(moveBackground, 1);

        }
    }

    document.getElementById("boy").src = "resources/Jump (" + boyJumpImageNumber + ").png";
}


var boyDeadImageNumber = 1;
var boyDeadAnimationId = 0;

var endscreen = 0;

var deadSound = new Audio("resources/dead.mp3")
function boyDeadAnimation() {

    boyDeadImageNumber = boyDeadImageNumber + 1;

    if (boyDeadImageNumber == 11) {

        clearInterval(boyDeadAnimationId);
        boyDeadImageNumber = 10;
    }

    document.getElementById("boy").src = "resources/Dead (" + boyDeadImageNumber + ").png";



    var EndScreenCommingAnimationId = 0;
    EndScreenCommingAnimationId = setInterval(EndScreenCome, 1);

    for (var i = 0; i < 10; i++) {


        document.getElementById("box" + i).style.visibility = "hidden";

    }


    for (var i = 0; i < 45; i++) {


        document.getElementById("coin" + i).style.visibility = "hidden";

    }



    for (var i = 0; i < 10; i++) {


        document.getElementById("bomb" + i).style.visibility = "hidden";

    }


    document.getElementById("boy").style.visibility = "hidden";



    // levelSound.pause();
    // levelSound.currentTime = 0;
}

/////////////////////////////////---------------------------------------------------------------------------


var boxMarginLeft = 2500;

function createBox_1() {



    for (var i = 0; i < 10; i++) {

        var box = document.createElement("div");
        box.className = "box";
        box.id = "box" + i;
        box.style.marginLeft = boxMarginLeft + "px";
        boxMarginLeft = boxMarginLeft + 2000;
        document.getElementById("background").appendChild(box);

    }



}


var boxAnimationId = 0;


function boxAnimation() {

    for (var i = 0; i < 10; i++) {


        var box = document.getElementById("box" + i);
        var currentMarginLeft = getComputedStyle(box).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 1.5;
        box.style.marginLeft = newMarginLeft + "px";



        if (newMarginLeft >= 30 & newMarginLeft <= 100) {

            //alert(newMarginLeft);


            if (boyMarginTop >= 610) {

                clearInterval(boyRunAnimationId);
                runSound.pause();
                boyRunAnimationId = -1;

                clearInterval(boxAnimationId);
                clearInterval(bombAnimationId_1);
                clearInterval(coinAnimationId_1);
                clearInterval(boyJumpAnimationId);
                jumpSound.pause();
                boyJumpAnimationId = -1;
                clearInterval(moveBackgroundAnimationId);
                moveBackgroundAnimationId = -1;

                boyDeadAnimationId = setInterval(boyDeadAnimation, 100);
                deadSound.play();






            }


        }
    }


}



var bombMarginLeft = 1500;

function createBomb() {


    for (var i = 0; i < 10; i++) {

        var bomb = document.createElement("div");
        bomb.className = "bomb";
        bomb.id = "bomb" + i;
        bomb.style.marginLeft = bombMarginLeft + "px";
        bombMarginLeft = bombMarginLeft + 2000;
        document.getElementById("background").appendChild(bomb);

    }



}


var bombAnimationId_1 = 0;

function bombAnimation_1() {

    for (var i = 0; i < 10; i++) {


        var bomb = document.getElementById("bomb" + i);
        var bombcurrentMarginLeft = getComputedStyle(bomb).marginLeft;
        var bombnewMarginLeft = parseInt(bombcurrentMarginLeft) - 1.5;
        bomb.style.marginLeft = bombnewMarginLeft + "px";


        //  alert(bombnewMarginLeft);

        if (bombnewMarginLeft >= 30 & bombnewMarginLeft <= 100) {

            if (boyMarginTop >= 610) {

                clearInterval(boyRunAnimationId);
                runSound.pause();
                boyRunAnimationId = -1;

                clearInterval(boxAnimationId);
                clearInterval(bombAnimationId_1);
                clearInterval(coinAnimationId_1);
                clearInterval(boyJumpAnimationId);
                jumpSound.pause();
                boyJumpAnimationId = -1;
                clearInterval(moveBackgroundAnimationId);
                moveBackgroundAnimationId = -1;

                boyDeadAnimationId = setInterval(boyDeadAnimation, 100);
                deadSound.play();

            }


        }

    }
}




var coin_1_MarginLeft = 2000;

function createCoin_1() {




    for (var i = 0; i < 45; i++) {

        var coin1 = document.createElement("div");
        coin1.className = "coin";
        coin1.id = "coin" + i;
        coin1.style.marginLeft = coin_1_MarginLeft + "px";
        coin_1_MarginLeft = coin_1_MarginLeft + 400;
        document.getElementById("background").appendChild(coin1);

    }



}


var coinAnimationId_1 = 0;
var coinCount = 0;

var coinSound = new Audio("resources/wincoin.wav");
function coinAnimation_1() {

    for (var i = 0; i < 45; i++) {


        var coin = document.getElementById("coin" + i);
        var coincurrentMarginLeft = getComputedStyle(coin).marginLeft;
        var coinnewMarginLeft = parseInt(coincurrentMarginLeft) - 2;
        coin.style.marginLeft = coinnewMarginLeft + "px";

        // alert(coinnewMarginLeft);

        if (coinnewMarginLeft >= 95 & coinnewMarginLeft <= 155) {

            if (boyMarginTop <= 550) {

                coinCount = coinCount + 1;
                coin.style.display = "none";
                coinSound.play();
                document.getElementById("coincount").innerHTML = coinCount;
                document.getElementById("coinMain").innerHTML = coinCount;


            }


        }
    }
}


var idleAnimationId = 0;
var idleAnimationImageNumber = 1;

idleAnimationId = setInterval(idleAnimation, 90);
function idleAnimation() {



    idleAnimationImageNumber = idleAnimationImageNumber + 1;

    if (idleAnimationImageNumber == 11) {

        idleAnimationImageNumber = 1;
    }
    document.getElementById("boy").src = "resources/Idle (" + idleAnimationImageNumber + ").png";
}



//--------------End Screen Start Here--------------------------------------------------------------


var roboImageIdleEndscreenNumber = 0;
var roboAnimationId = 0;

roboAnimationId = setInterval(roboAnimation, 80);


function roboAnimation() {

    roboImageIdleEndscreenNumber = roboImageIdleEndscreenNumber + 1;

    if (roboImageIdleEndscreenNumber == 11) {

        roboImageIdleEndscreenNumber = 1;
    }
    document.getElementById("idle").src = "resources/Idle (" + roboImageIdleEndscreenNumber + ").png";
}





function EndScreenCome() {


    optPanelgoAnimationId = setInterval(optPanelGo, 10);

    var endWindow = document.getElementById("endScreen");
    var currentMarginTopEndWindow = getComputedStyle(endWindow).marginTop;
    var newMarginTopWindow = parseInt(currentMarginTopEndWindow) + 5;

    if (newMarginTopWindow == 200) {


        //   alert(newMarginTopWindow);
        clearInterval(EndScreenCommingAnimationId);

    }

    endWindow.style.marginTop = newMarginTopWindow + "px";

   
}




//Option Panel Come----------------------------------------------------------------

var optPanelAnimationId = 0;

optPanelAnimationId = setInterval(optPanelCome, 5);

function optPanelCome() {


    var optPanel = document.getElementById("optPanel");
    var currentOptPanelMarginLeft = getComputedStyle(optPanel).marginLeft;
    var newOptPanelMarginLeft = parseInt(currentOptPanelMarginLeft) - 5;

    if (newOptPanelMarginLeft == 1800) {

        //  alert(newOptPanelMarginLeft);

        clearInterval(optPanelAnimationId);

    }
    optPanel.style.marginLeft = newOptPanelMarginLeft + "px";
    //alert(newMainMenuMarginLeft);

}

//Option Panel Go----------------------------------------------------------------

var optPanelgoAnimationId = 0;


function optPanelGo() {


    var optPanelgo = document.getElementById("optPanel");
    var currentOptPanelMarginLeft = getComputedStyle(optPanelgo).marginLeft;
    var newOptPanelMarginLeft = parseInt(currentOptPanelMarginLeft) + 5;

    if (newOptPanelMarginLeft == 2000) {

        // alert(newOptPanelMarginLeft);

        clearInterval(optPanelgoAnimationId);

    }
    optPanelgo.style.marginLeft = newOptPanelMarginLeft + "px";
    //alert(newMainMenuMarginLeft);

}

//-------Restart The Game-----------------------------------------------------------

function restartgame() {


    clickSound.play();
    clickSound.currentTime = 0;
    window.location = "index2.html"

}

//------Go To Main Menu------------------------------------------------------------

function MainMenu() {

    clickSound.play();
    clickSound.currentTime = 0;



    window.location = "index.html"
}

//-----Inforpanel-------------------------------------------------------

function inforPanel() {

    clickSound.play();
    clickSound.currentTime = 0;

    optPanelgoAnimationId = setInterval(optPanelGo, 10);
    document.getElementById("inforPaneling").style.visibility = "visible";

}

function okBtn() {

    clickSound.play();
    clickSound.currentTime = 0;

    optPanelAnimationId = setInterval(optPanelCome, 5);
    document.getElementById("inforPaneling").style.visibility = "hidden";

}

//--Sound------------------------------------------------------------

var playbuttontrue = 0;
function soundOnOff() {

    clickSound.play();
    clickSound.currentTime = 0;


    if (playbuttontrue == 0) {

        back_Sound.play();
        playbuttontrue = 1;
    }

    else {

        back_Sound.pause();
        back_Sound.currentTime = 0;
        playbuttontrue = 0;
    }
}