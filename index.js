// Current colour section:
var currentColour = "white";
var button = document.getElementById("button");
var input = document.getElementById("colourInput");

button.addEventListener("click", function(){ // When button is clicked, change button background and currentColour to inputted value
    currentColour = input.value;
    button.style.backgroundColor = currentColour;
})

// Background colour:
var currentBackground = "white";
var bgButton = document.getElementById("bgButton");
var bgInput = document.getElementById("bgInput");
var allTD = document.getElementsByTagName("td");

bgButton.addEventListener("click", function(){ // When bgButton is clicked, change colour of button and all tds to inputted value
    currentBackground = bgInput.value;
    bgButton.style.backgroundColor = currentBackground;
    for (let box of allTD){
        box.style.backgroundColor = currentBackground;
    }
})

// Grid sizing:
var targetX = 10;
var targetY = 10;
var gridX = document.getElementById("grid-x");
var gridY = document.getElementById("grid-y");
var gridResize = document.getElementById("grid-size");

//creating rows and columns
function rowColFunct(){
    for (let y=1;y<targetY; y++){
        var table = document.createElement("table");
        let tr = document.createElement("tr");
        for (let x=0; x<targetX; x++){
            let td = document.createElement("td")
            tr.appendChild(td);
        }
        table.appendChild(tr);
        table.classList.add("table-style");
    }
}

gridResize.addEventListener("click", function(){
    if (gridX.value > 0 && gridY.value > 0){
        targetX = gridX.value;
        targetY = gridY.value;
    }
    rowColFunct();
})

// create table, 10 rows total, each with 10 coloumns in

// jQuery for colour change on user clicks
$(document).ready(function(){
    $("td").on({
        click: function(){ //when td is clicked make it orange
            $(this).css("background-color",currentColour);
        },
        dblclick: function(){ //when td is double clicked go back to white
            $(this).css("background-color",currentBackground);
        }
    })
});

/* Next I want to: 
x include instructions 
- style the page 
- make colour selection a colourwheel or list the choices 
- add input for size of the table/ number of rows 
- look into mobile user doubleclicks.
- number the rows
*/