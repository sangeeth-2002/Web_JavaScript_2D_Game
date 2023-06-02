var clickSound = new Audio("resources/sounds/click.wav");
var back_Sound = new Audio("resources/sounds/background.mp3")


var idleAnimationId = 0;
var idleAnimationImageNumber = 1;

idleAnimationId = setInterval(idleAnimation, 90);
function idleAnimation() {

    idleAnimationImageNumber = idleAnimationImageNumber + 1;

    if (idleAnimationImageNumber == 11) {

        idleAnimationImageNumber = 1;
    }
    document.getElementById("Idle").src = "resources/Idle (" + idleAnimationImageNumber + ").png";

}

//Main Menu Comming--------------------------------------------------------------------------------


var mainMenuanimationId = 0;
mainMenuanimationId = setInterval(mainMenuCome, 1);

function mainMenuCome() {

    
    clickSound.play();
    clickSound.currentTime = 0;

    var mainMenu0 = document.getElementById("mainMenu1");
    var currentMainMenuMarginLeft = getComputedStyle(mainMenu0).marginLeft;
    var newMainMenuMarginLeft = parseInt(currentMainMenuMarginLeft) - 20;
    if (newMainMenuMarginLeft == 440) {

        // alert(newMainMenuMarginLeft);

        clearInterval(mainMenuanimationId);

    }
    mainMenu0.style.marginLeft = newMainMenuMarginLeft + "px";
    //alert(newMainMenuMarginLeft);

}


 var idleroboAnimationId = 0;
 idleroboAnimationId = setInterval(idleRoboCome, 1);

function idleRoboCome() {

    

    var idleCome = document.getElementById("robo");
    var currentIdleMarginLeft = getComputedStyle(idleCome).marginLeft;
    var newIdleMarginLeft = parseInt(currentIdleMarginLeft) + 10;
    if (newIdleMarginLeft == 0) {

        clearInterval(idleroboAnimationId);
    }
    idleCome.style.marginLeft = newIdleMarginLeft + "px";
}
//--------------------------------------------------------------------------------------------------

//----Game start Button----------------------------------------------------------------------------

function startGame(){

    
    clickSound.play();

    if(clickSound.played){

        window.location = "index2.html"

    }

    
}

//----Game start Button END------------------------------------------------------------------------

//---Game Infor Button-----------------------------------------------------------------------------

function inforPanel(){

    
    clickSound.play();
    clickSound.currentTime = 0;

    document.getElementById("mainMenu1").style.visibility = "hidden";
    document.getElementById("infordiv").style.visibility = "visible";
}

function menu(){

    clickSound.play();
    clickSound.currentTime = 0;

    document.getElementById("mainMenu1").style.visibility = "visible";
    document.getElementById("infordiv").style.visibility = "hidden";

}
//----------Settings panel---------------------------------------------------------------


function settingPanel(){

    clickSound.play();
    clickSound.currentTime = 0;

    document.getElementById("mainMenu1").style.visibility = "hidden";
    document.getElementById("settings").style.visibility = "visible";
}


function menu_s(){

    clickSound.play();
    clickSound.currentTime = 0;

    document.getElementById("mainMenu1").style.visibility = "visible";
    document.getElementById("settings").style.visibility = "hidden";

}

//-----Play Music -------------------------------------------------------------------

var playbuttontrue = 0;
function playMusic(){

    clickSound.play();
    clickSound.currentTime = 0;

if(playbuttontrue == 0){

    back_Sound.play();
    playbuttontrue = 1;
}

else{

    back_Sound.pause();
    back_Sound.currentTime = 0;
    playbuttontrue = 0;
}


}

//-----Play Music End  -------------------------------------------------------------------