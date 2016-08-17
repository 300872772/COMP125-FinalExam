/// <reference path="objects/buttonAd.ts"/>
/// <reference path="objects/labelAd.ts"/>
/**
 * This is a dice mini project
 *
 * @FileName: app.js
 * @Author Md Mamunur Rahman
 * @student ID: 300872772
 * @Last Update 17-August-2016
 * @website: http://comp125-finalexam-300872772.azurewebsites.net
 * @description: this file is main javascript file for the website
 */
// IIFE - Immediately Invoked Function Expression
var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    var labelDice1 = objectsLabel.LabelAd;
    var buttonDice1 = objectsButton.ButtonAd;
    var labelDice2 = objectsLabel.LabelAd;
    var buttonDice2 = objectsButton.ButtonAd;
    var buttonRoll = objectsButton.ButtonAd;
    var randomnumber1 = 0;
    var randomnumber2 = 0;
    var imagePath;
    /**
     * This function is app entry function
     *
     * @method randomCreation
     * @return {void}
     */
    function randomCreation() {
        randomnumber1 = Math.floor((Math.random() * 6) + 1);
        randomnumber2 = Math.floor((Math.random() * 6) + 1);
    }
    function ImageSwitcher(images) {
        var imagePath;
        switch (images) {
            case 0:
                imagePath = "../Assets/images/blank.png";
                break;
            case 1:
                imagePath = "../Assets/images/1.png";
                break;
            case 2:
                imagePath = "../Assets/images/2.png";
                break;
            case 3:
                imagePath = "../Assets/images/3.png";
                break;
            case 4:
                imagePath = "../Assets/images/4.png";
                break;
            case 5:
                imagePath = "../Assets/images/5.png";
                break;
            case 6:
                imagePath = "../Assets/images/6.png";
                break;
        }
        return imagePath;
    }
    function gameLoop() {
        stage.update();
    }
    function main(image1, image2) {
        buttonDice1 = new objectsButton.ButtonAd(image1, 90, 40, false);
        stage.addChild(buttonDice1);
        buttonDice2 = new objectsButton.ButtonAd(image2, 300, 40, false);
        stage.addChild(buttonDice2);
        buttonRoll = new objectsButton.ButtonAd("../Assets/images/rollButton.png", 230, 330, false);
        stage.addChild(buttonRoll);
        buttonRoll.on("click", buttonRoll_clicked);
        labelDice1 = new objectsLabel.LabelAd(randomnumber1, "20px Consolas", "#000000", 180, 250, false);
        stage.addChild(labelDice1);
        labelDice2 = new objectsLabel.LabelAd(randomnumber2, "20px Consolas", "#000000", 400, 250, false);
        stage.addChild(labelDice2);
    }
    function buttonRoll_clicked() {
        randomCreation();
        var imagesForDice1 = ImageSwitcher(randomnumber1);
        var imagesForDice2 = ImageSwitcher(randomnumber2);
        buttonDice1.image.src = imagesForDice1;
        buttonDice2.image.src = imagesForDice2;
        labelDice1.text = randomnumber1;
        labelDice2.text = randomnumber2;
        //main(imagesForDice1,imagesForDice1);
        //stage.update();
    }
    /**
     * This function is app entry function
     *
     * @method init
     * @return {void}
     */
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main("../Assets/images/blank.png", "../Assets/images/blank.png");
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map