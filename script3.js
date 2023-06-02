
//Key Checking Here----------------------------------------------------------------


function keyCheck(event) {

    var keyCode = event.which;

    if (keyCode == 13) {    //-----Enetr--------------------------------


        clearInterval(idleAnimationId);


        if (moveBackgroundAnimationId == 0) {

            moveBackgroundAnimationId = setInterval(moveBackground, 1);
        }


        if (boyRunAnimationId == 0) {

            boyRunAnimationId = setInterval(boyRunAnimation, 90);

        }

        if (spiderAnimationId == 0) {

            spiderAnimationId = setInterval(spider, 5);


        }



    }

    if (keyCode == 32) {   //-----Space---------------------------------------------



        if (boyJumpAnimationId == 0) {

            clearInterval(boyRunAnimationId);
            clearInterval(idleAnimationId);;
            boyRunAnimationId = 0;
            boyRunImageNumber = 1;
            boyJumpAnimationId = setInterval(boyJumpAnimation, 57);

        }


    }


}



// Bacground Movig-----------------------------------------------------------------


var backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;

var score = 0;

function moveBackground() {


    backgroundImagePositionX = backgroundImagePositionX - 1;
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";


    score = score + 1;


    document.getElementById("scoreMain").innerHTML = score;
}



//--------- Idle animation Start---------------------------------------------------

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

//-Boy Run Animation Start Here-----------------------------------------------------


var boyRunAnimationId = 0;
var boyRunImageNumber = 1;

function boyRunAnimation() {


    boyRunImageNumber = boyRunImageNumber + 1;

    if (boyRunImageNumber == 9) {

        boyRunImageNumber = 1;
    }


    document.getElementById("boy").src = "resources/Run (" + boyRunImageNumber + ").png";

}

//-Boy Jump Animation Start Here------------------------------------------------------

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
        boyJumpAnimationId = 0;
        boyJumpImageNumber = 1;

        boyRunAnimationId = setInterval(boyRunAnimation, 90);


        if (moveBackgroundAnimationId == 0) {

            moveBackgroundAnimationId = setInterval(moveBackground, 1);

        }
    }

    document.getElementById("boy").src = "resources/Jump (" + boyJumpImageNumber + ").png";

}


//Spider Obstacle coming animation-----------------------------------------------------


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

var spiderAnimationId = 0;
var spiderDiv = 0;
var newMarginLeftSpider  = 0;

function spider() {

    spiderDiv = document.getElementById("spiderDiv");
    var currentMarginLeftSpider = getComputedStyle(spiderDiv).marginLeft;
    newMarginLeftSpider = parseInt(currentMarginLeftSpider) - 3;
    spiderDiv.style.marginLeft = newMarginLeftSpider + "px";

    if (newMarginLeftSpider <= 700) {

        spiderDownAnimationId = setInterval(spiderDown, 10);
    }


}


var spiderDownAnimationId = 0;
function spiderDown() {

    var spiderDivT = document.getElementById("spiderDiv");
    var currentMarginTopSpider = getComputedStyle(spiderDivT).marginTop;
    var newMarginTopSpider = parseInt(currentMarginTopSpider) + 1;

    if (newMarginTopSpider == 15) {

        return; //stop the execution of function
    }

    spiderDivT.style.marginTop = newMarginTopSpider + "px";


}