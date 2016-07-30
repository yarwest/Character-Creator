var headColor = ['blonde', 'brown', 'black'],
    chestColor = ['white', 'black', 'yellow'],
    legsColor = ['blue', 'grey', 'green'],
    skinColor = ['1', '2'],
    
    headType = ['1'],
    chestType = ['1', '2'],
    legsType = ['1', '2'],
    
    currentHeadColor = 0,
    currentChestColor = 0,
    currentLegsColor = 0,
    currentSkinColor = 0,

    currentHeadType = 0,
    currentChestType = 0,
    currentLegsType = 0,

    bodyParts = ['head', 'chest', 'legs'],
    nBodyParts = bodyParts.length;

function assignSource () {
    for(var i = 0; i < nBodyParts; i++) {
        eval("document.getElementById('" + bodyParts[i] + "-img').src='sprites/" + bodyParts[i] + "/' + " +  bodyParts[i] + "Type[current" + uppercaseFirstChar(bodyParts[i]) + "Type] + '-' + " + bodyParts[i] + "Color[current" + uppercaseFirstChar(bodyParts[i]) + "Color] + '-' + skinColor[currentSkinColor] + '.png';");
    }
}

function change(object, change, direction) {
    var type = '', color = '', skin = '',
        lowcaseObject = object.toLowerCase(),
        variable = "current" + object + change;
    if(direction === 'left') {
        eval("if(" + variable + " === 0) { " + variable + " = " + lowcaseObject + change + ".length-1;} else { " + variable + "--;}");
    } else if(direction === 'right') {
        eval("if(" + variable + " === " + lowcaseObject + change + ".length-1) { " + variable + " = 0;} else { " + variable + "++;}");
    }
    if(lowcaseObject === 'skin') {
        assignSource();
    }
    else {
        type = eval(lowcaseObject + "Type[current" + object + "Type]");
        color = eval(lowcaseObject + "Color[current" + object + "Color]");
        skin = skinColor[currentSkinColor];
        document.getElementById(lowcaseObject + '-img').src='sprites/' + lowcaseObject + '/' + type + '-' + color + '-' + skin + '.png';
    }
}

function random() {
    for(var i = 0; i < nBodyParts; i++) {
        eval("current" + uppercaseFirstChar(bodyParts[i]) + "Type = getRandomInt(0, " + bodyParts[i] + "Type.length-1); current" + uppercaseFirstChar(bodyParts[i]) + "Color = getRandomInt(0, " + bodyParts[i] + "Color.length-1);")
    }
    currentSkinColor = getRandomInt(0, skinColor.length-1);
    
    assignSource();
}

function save() {
        
}

function uppercaseFirstChar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}