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
    var lowcaseSplit = object.toLowerCase();
    var variable = "current" + object + change;
    if(direction === 'left') {
        eval(variable + "--");
    } else if(direction === 'right') {
        eval(variable + "++");
    }
    if(lowcaseSplit === 'skin') {
        assignSource();
    }
    else {
        var type = eval(lowcaseSplit + "Type[current" + object + "Type]");
        var color = eval(lowcaseSplit + "Color[current" + object + "Color]");
        var skin = skinColor[currentSkinColor];
        document.getElementById(lowcaseSplit + '-img').src='sprites/' + lowcaseSplit + '/' + type + '-' + color + '-' + skin + '.png';
    }
    boundaryCheck(object, change, direction);
}

function boundaryCheck(object, change, direction) {
    if(object === 'Head') {
        if(change === 'Color') {
            if(direction === 'left') {
                if(currentHeadColor === 0) {
                    document.getElementById('head-color-left').style.display="none";
                }
                document.getElementById('head-color-right').style.display="inline-block";
            }
            else {
                if (currentHeadColor === headColor.length-1) {
                    document.getElementById('head-color-right').style.display="none";
                }
                document.getElementById('head-color-left').style.display="inline-block";
            }
        }
        else if (change === 'Type') {
            if(direction === 'left') {
                if(currentHeadType === 0) {
                    document.getElementById('head-type-left').style.display="none";
                }
                document.getElementById('head-type-right').style.display="inline-block";
            }
            else {
                if(currentHeadType === headType.length-1) {
                    document.getElementById('head-type-right').style.display="none";
                }
                document.getElementById('head-type-left').style.display="inline-block";
            }
        }
    }
    if(object === 'Chest') {
        if(change === 'Color') {
            if(direction === 'left') {
                if(currentChestColor === 0) {
                    document.getElementById('chest-color-left').style.display="none";
                }
                document.getElementById('chest-color-right').style.display="inline-block";
            }
            else {
                if (currentChestColor === chestColor.length-1) {
                    document.getElementById('chest-color-right').style.display="none";
                }
                document.getElementById('chest-color-left').style.display="inline-block";
            }
        }
        else if (change === 'Type') {
            if(direction === 'left') {
                if(currentChestType === 0) {
                    document.getElementById('chest-type-left').style.display="none";
                }
                document.getElementById('chest-type-right').style.display="inline-block";
            }
            else {
                if(currentChestType === chestType.length-1) {
                    document.getElementById('chest-type-right').style.display="none";
                }
                document.getElementById('chest-type-left').style.display="inline-block";
            }
        }
    }
    if(object === 'Legs') {
        if(change === 'Color') {
            if(direction === 'left') {
                if(currentLegsColor === 0) {
                    document.getElementById('legs-color-left').style.display="none";
                }
                document.getElementById('legs-color-right').style.display="inline-block";
            }
            else {
                if (currentLegsColor === legsColor.length-1) {
                    document.getElementById('legs-color-right').style.display="none";
                }
                document.getElementById('legs-color-left').style.display="inline-block";
            }
        }
        else if (change === 'Type') {
            if(direction === 'left') {
                if(currentLegsType === 0) {
                    document.getElementById('legs-type-left').style.display="none";
                }
                document.getElementById('legs-type-right').style.display="inline-block";
            }
            else {
                if(currentLegsType === legsType.length-1) {
                    document.getElementById('legs-type-right').style.display="none";
                }
                document.getElementById('legs-type-left').style.display="inline-block";
            }
        }
    }
    if(object === 'Skin') {
        if(direction === 'left') {
            if(currentSkinColor === 0) {
                document.getElementById('skin-color-left').style.display="none";
            }
            document.getElementById('skin-color-right').style.display="inline-block";
        }
        else {
            if (currentSkinColor === skinColor.length-1) {
                document.getElementById('skin-color-right').style.display="none";
            }
            document.getElementById('skin-color-left').style.display="inline-block";
        }
    }
    if(object === 'All') {
        if(currentHeadColor === 0) {
            document.getElementById('head-color-left').style.display="none";
        }
        else {
            document.getElementById('head-color-left').style.display="inline-block";
        }
        if (currentHeadColor === headColor.length-1) {
            document.getElementById('head-color-right').style.display="none";
        }
        else {
            document.getElementById('head-color-right').style.display="inline-block";
        }
        if(currentHeadType === 0) {
            document.getElementById('head-type-left').style.display="none";
        }
        else {
            document.getElementById('head-type-left').style.display="inline-block";
        }
        if(currentHeadType === headType.length-1) {
            document.getElementById('head-type-right').style.display="none";
        }
        else {
            document.getElementById('head-type-right').style.display="inline-block";
        }
        
        if(currentChestColor === 0) {
            document.getElementById('chest-color-left').style.display="none";
        }
        else {
            document.getElementById('chest-color-left').style.display="inline-block";
        }
        if (currentChestColor === chestColor.length-1) {
            document.getElementById('chest-color-right').style.display="none";
        }
        else {
            document.getElementById('chest-color-right').style.display="inline-block";
        }
        if(currentChestType === 0) {
            document.getElementById('chest-type-left').style.display="none";
        }
        else {
            document.getElementById('chest-type-left').style.display="inline-block";
        }
        if(currentChestType === chestType.length-1) {
            document.getElementById('chest-type-right').style.display="none";
        }
        else {
            document.getElementById('chest-type-right').style.display="inline-block";
        }
        
        if(currentLegsColor === 0) {
            document.getElementById('legs-color-left').style.display="none";
        }
        else {
            document.getElementById('legs-color-left').style.display="inline-block";
        }
        if (currentLegsColor === legsColor.length-1) {
            document.getElementById('legs-color-right').style.display="none";
        }
        else {
            document.getElementById('legs-color-right').style.display="inline-block";
        }
        if(currentLegsType === 0) {
            document.getElementById('legs-type-left').style.display="none";
        }
        else {
            document.getElementById('legs-type-left').style.display="inline-block";
        }
        if(currentLegsType === legsType.length-1) {
            document.getElementById('legs-type-right').style.display="none";
        }
        else {
            document.getElementById('legs-type-right').style.display="inline-block";
        }
        
        if(currentSkinColor === 0) {
            document.getElementById('skin-color-left').style.display="none";
        }
        else {
            document.getElementById('skin-color-left').style.display="inline-block";
        }
        if (currentSkinColor === skinColor.length-1) {
            document.getElementById('skin-color-right').style.display="none";
        }
        else {
            document.getElementById('skin-color-right').style.display="inline-block";
        }
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
    boundaryCheck('All', null, null);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}