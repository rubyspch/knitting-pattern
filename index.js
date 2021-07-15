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
    table.style.width = targetX * 20; 
    table.style.height = targetY * 20; 
    displayDiv.replaceChild(table, displayDiv.childNodes[0]); 
}

gridResize.addEventListener("click", rowColFunct);

// // Scrolls to next sections
// $("#grid-size").click(function() {
//     $('html,body').animate({
//         scrollTop: $("#style").offset().top -100},
//         'slow');
// });
// $("h1").click(function() {
//     $('html,body').animate({
//         scrollTop: $("#container").offset().top -100},
//         'slow');
// });

/* Next I want to: 
x include instructions 
x style the page 
x make input types color and number 
x add input for size of the table/ number of rows
x add ability to colour squares on new created grids ANSWER HERE: https://stackoverflow.com/questions/1359018/how-do-i-attach-events-to-dynamic-html-elements-with-jquery
x look into mobile user doubleclicks.
x number the rows
- add description in github readme
x put size grid button in front of colours and edit instructions

Previous jQuery code:
// jQuery for colour change on user clicks. 
// $(document).ready(function(){
//     $("#table").on("click", "td", function(){ //when td is clicked make it orange
//         $(this).css("background-color",currentColour);
//     });
//     $("#table").on("dblclick", "td", function(){ //when td is double clicked go back to white
//         $(this).css("background-color",currentBackground);
//     });
// });

*/