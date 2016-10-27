var /* Store all the variations */
    headColor = ['blonde', 'brown', 'black'],
    chestColor = ['white', 'black', 'yellow'],
    legsColor = ['blue', 'grey', 'green'],
    skinColor = ['1', '2'],
    
    headType = ['1'],
    chestType = ['1', '2'],
    legsType = ['1', '2'],
    
    /* Store the current selected variation */
    currentHeadColor = 0,
    currentChestColor = 0,
    currentLegsColor = 0,
    currentSkinColor = 0,

    currentHeadType = 0,
    currentChestType = 0,
    currentLegsType = 0,
    
    /* All existing parts */
    bodyParts = ['head', 'chest', 'legs'],
    nBodyParts = bodyParts.length,

    /* Canvas vars */
    canvas = document.getElementById('characterCanvas'),
    context = canvas.getContext('2d');

/* Function that assigns the src for every available body part */
function assignSource () {
    for(var i = 0; i < nBodyParts; i++) {
        eval("document.getElementById('" + bodyParts[i] + "-img').src='sprites/" + bodyParts[i] + "/' + " +  bodyParts[i] + "Type[current" + uppercaseFirstChar(bodyParts[i]) + "Type] + '-' + " + bodyParts[i] + "Color[current" + uppercaseFirstChar(bodyParts[i]) + "Color] + '-' + skinColor[currentSkinColor] + '.png';");
    }
    updateCanvas();
}

function updateCanvas() {
    var sizes = [72, 32, 48];
    for(var i = 0; i < nBodyParts; i++) {
        var image = new Image();
        image.src = eval("'sprites/" + bodyParts[i] + "/' + " +  bodyParts[i] + "Type[current" + uppercaseFirstChar(bodyParts[i]) + "Type] + '-' + " + bodyParts[i] + "Color[current" + uppercaseFirstChar(bodyParts[i]) + "Color] + '-' + skinColor[currentSkinColor] + '.png'");
        image.onload = function() {
            context.drawImage(image, 72, sizes[i]);
        };
    }
}

/* Function changes the current value of the variant that is passed as parameter
   If the current value is at either end of the array, the value will be set to the opposite end
   Then either the assignSource function gets called or the src for a certain body part gets assigned*/
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
    updateCanvas();
}

/* A function that calls the random function for every body part and the skin color 
   After getting all the random values, the assingSource function gets called*/
function random() {
    for(var i = 0; i < nBodyParts; i++) {
        eval("current" + uppercaseFirstChar(bodyParts[i]) + "Type = getRandomInt(0, " + bodyParts[i] + "Type.length-1); current" + uppercaseFirstChar(bodyParts[i]) + "Color = getRandomInt(0, " + bodyParts[i] + "Color.length-1);")
    }
    currentSkinColor = getRandomInt(0, skinColor.length-1);
    
    assignSource();
}

//TODO
function save() {
        
}

/* Function that returns the param string as a string with the first char capitalized */
function uppercaseFirstChar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/* Function that returns a random int withing the min and max value that are passed as a parameter */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}