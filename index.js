
//Button styling
const colours = ["rgb(255,102,152)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(152,255,102)", "rgb(102,152,255)"];
const createGridButton = document.getElementById("grid-size");
window.addEventListener("load", setButtonColour);

function setButtonColour(){
    let borderColour;
    let backgroundColour
    do{
    borderColour = colours[randomNumber()];
    backgroundColour = colours[randomNumber()]
    } while(borderColour===backgroundColour);
    createGridButton.style.borderColor= borderColour;
    // createGridButton.style.backgroundColor=backgroundColour;
}

function randomNumber(){
    return Math.floor(Math.random() * 5)
}

// Current colour section:
let currentColour = "white";
const button = document.getElementById("button");
const input = document.getElementById("colourInput");
const allTD = document.getElementsByTagName("td");

button.addEventListener("click", function(){ // When button is clicked, change button background and currentColour to inputted value
    currentColour = input.value;
    button.style.backgroundColor = currentColour;
})

// Background colour:
let currentBackground = "white";
const bgButton = document.getElementById("bgButton");
const bgInput = document.getElementById("bgInput");

bgButton.addEventListener("click", function(){ // When bgButton is clicked, change colour of button and all tds to inputted value
    currentBackground = bgInput.value;
    bgButton.style.backgroundColor = currentBackground;
    for (let box of allTD){
        box.style.backgroundColor = currentBackground;
    }
})

document.querySelector("body").addEventListener("click", function(){ //when you click a td it turns current colour
    let tdTest = event.target;
    if (tdTest.tagName === "TD"){
        tdTest.style.backgroundColor = currentColour;
    }
}) 

document.querySelector("body").addEventListener("dblclick", function(){ //when you dblclick a td it turns background colour
    let tdTest = event.target;
    if (tdTest.tagName === "TD"){
        tdTest.style.backgroundColor = currentBackground;
    }
}) 

// Grid sizing:
let targetX = 10;
let targetY = 10;
const numRows = document.getElementById("number-rows");
const gridX = document.getElementById("grid-x");
const gridY = document.getElementById("grid-y");
const gridResize = document.getElementById("grid-size");
const displayDiv = document.getElementById("table");

//Scroll to style div
function scrollSty() {
    console.log("scrollSty()");
    document
        .getElementById('style')
        .scrollIntoView({
            block: 'end',
            behavior: 'smooth',
            inline: 'center'
        });
    }
// Creating rows and columns
function rowColFunct(){
    // Define grid dimensions is user inputs a value:
    if (gridX.value > 0){ 
        targetX = gridX.value;
    }
    if (gridY.value > 0){
        targetY = gridY.value;
    } 
    // Create table:
    var table = document.createElement("table"); 
    // Create rows:
    for (let y = 0; y < targetY; y++){
        let tr = document.createElement("tr"); 
        table.appendChild(tr); 
        //Create columns within the row:
        for (let x = 0; x < targetX; x++){
            let td = document.createElement("td"); 
            tr.appendChild(td);
        }
        // Add number headers if numRows is checked
        if (numRows.checked===true){ 
            let tdNum = document.createElement("th"); 
            tdNum.appendChild(document.createTextNode(targetY - y));
            tr.appendChild(tdNum);
        }
    }
    // Table sizing and display
    let xWidth = targetX;
    if(numRows.checked===true){
        xWidth+=1;
    }
    table.style.width = targetX * 25; 
    table.style.height = targetY * 20; 
    displayDiv.replaceChild(table, displayDiv.childNodes[0]); 
    scrollSty();
}

gridResize.addEventListener("click", rowColFunct);

// // Scrolls to next sections
let styleToCon = document.getElementById("style-to-con");
let main = document.getElementById("main");

function scrollCon() {
    console.log("scrollCon()");
    document
        .getElementById('container')
        .scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
}

styleToCon.addEventListener("click", scrollCon);

/* TODO LIST
- style buttons and colour wheel
- Find better font
*/