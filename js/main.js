var headColor = ['blonde', 'brown', 'black'];
var chestColor = ['white', 'black', 'yellow'];
var legsColor = ['blue', 'grey', 'green'];
var skinColor = ['1', '2'];

var headType = ['1'];
var chestType = ['1', '2'];
var legsType = ['1', '2'];

var currentHeadColor = 0;
var currentChestColor = 0;
var currentLegsColor = 0;
var currentSkinColor = 0;

var currentHeadType = 0;
var currentChestType = 0;
var currentLegsType = 0;

function assignSource () {
    document.getElementById('head-img').src='sprites/head/' + headType[currentHeadType] + '-' + headColor[currentHeadColor] + '-' + skinColor[currentSkinColor] + '.png'; 
    document.getElementById('chest-img').src='sprites/chest/' + chestType[currentChestType] + '-' + chestColor[currentChestColor] + '-' + skinColor[currentSkinColor] + '.png'; 
    document.getElementById('legs-img').src='sprites/legs/' + legsType[currentLegsType] + '-' + legsColor[currentLegsColor] + '-' + skinColor[currentSkinColor] + '.png';
}

function change(object, change, direction) {
    var lowcaseObject = object.toLowerCase();
    var variable = "current" + object + change;
    if(direction === 'left') {
        eval("if(" + variable + " === 0) { " + variable + " = " + lowcaseObject + change + ".length-1;} else { " + variable + "--;}");
    } else if(direction === 'right') {
        eval("if(" + variable + " === " + lowcaseObject + change + ".length-1) { " + variable + " = 0;} else { " + variable + "++;}");
    }
    if(lowcaseObject === 'skin') {
        assignSource();
    }
    else {
        var type = eval(lowcaseObject + "Type[current" + object + "Type]");
        var color = eval(lowcaseObject + "Color[current" + object + "Color]");
        var skin = skinColor[currentSkinColor];
        document.getElementById(lowcaseObject + '-img').src='sprites/' + lowcaseObject + '/' + type + '-' + color + '-' + skin + '.png';
    }
}

function random() {
    currentHeadType = getRandomInt(0, headType.length-1);
    currentChestType = getRandomInt(0, chestType.length-1);
    currentLegsType = getRandomInt(0, legsType.length-1);
    
    currentHeadColor = getRandomInt(0, headColor.length-1);
    currentChestColor = getRandomInt(0, chestColor.length-1);
    currentLegsColor = getRandomInt(0, legsColor.length-1);
    currentSkinColor = getRandomInt(0, skinColor.length-1);
    
    assignSource();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}