var headColor = ['blonde', 'brown', 'black'];
var chestColor = ['white', 'black', 'yellow'];
var legsColor = ['blue', 'grey', 'green'];
var skinColor = ['1'];

var currentHeadColor = 0;
var currentChestColor = 0;
var currentLegsColor = 0;
var currentSkinColor = 0;

var currentHeadType = 0;
var currentChestType = 0;
var currentLegsType = 0;

var headType = ['1'];
var chestType = ['1'];
var legsType = ['1'];

function change(object, direction) {
    var split = object.split("_");
    var lowcaseSplit = split[0].toLowerCase();
    var variable = "current" + split[0] + split[1];
    if(direction === 'left') {
        eval(variable + "--");
    } else if(direction === 'right') {
        eval(variable + "++");
    }
    var type = eval(lowcaseSplit + "Type[current" + split[0] + "Type]");
    var color = eval(lowcaseSplit + "Color[current" + split[0] + "Color]");
    var skin = skinColor[currentSkinColor];
    document.getElementById(lowcaseSplit).src='sprites/' + lowcaseSplit + '/' + type + '-' + color + '-' + skin + '.png';
}

function random() {
    
}