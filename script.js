var color0 = document.querySelector('.color0');
var colorc1 = document.querySelector('#colorc1');
var rgbtext = document.querySelector('#rgb');
var body = document.querySelector('body');
var copybtn = document.querySelector('#copybtn');

var r , g, b, rgb;
var newColor;

init();

function init(){
    console.log("Welcome! You can check all the colors that you have generated here.")
    
    //Generate Color when the site loads.
    generateColor();

    // Generate colors when the div is clicked.
    color0.addEventListener("click", function(){
        generateColor()
    });

    copybtn.addEventListener('click', function(){
        var copytext = selectText('rgb');
        document.execCommand("copy");
    });

    copybtn.addEventListener('mouseout', function(){
        outFunc();
    });
}

function generateColor(){
        // generate a random color
        newColor = randomColor();
        console.log(newColor);

        //change the BG of body
        body.style.backgroundColor = newColor;
        // change the text
        rgbtext.textContent = newColor;
        //change the color of text
        color0.style.color = newColor;
         //change the BG of circle
        colorc1.style.backgroundColor = newColor;
}

function randomColor(){
    // Select random numbers for r, g and b.
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);

    // Run again if values are more than 245, 
    //because the color will look closer to white.
    if(r>245 && g>245 && b>245){
        randomColor();
    }
    // concatinate into a string, for ex. rgb(123, 23, 12).
    rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    // console.log(rgb);
    return rgb;
}

function selectText(element) {
    var doc = document,
    text = doc.getElementById(element),
    range, selection;

    if(doc.body.createTextRange){ 
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select(); 
    }
    else if(window.getSelection){
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);   
    }

    return range;

}
  
function outFunc() {
    var tooltip = document.querySelector("#myTooltip");
    tooltip.textContent = "Copy to clipboard";
}


