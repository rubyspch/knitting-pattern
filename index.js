var currentColour = "";
var button = document.getElementById("button");
var input = document.getElementById("colourInput");
button.addEventListener("click", function(){
    if (input.value.length > 0){
        currentColour = input.value;
    }
    button.style.backgroundColor = currentColour;
})

$(document).ready(function(){
    $("td").on({
        click: function(){ //when td is clicked make it orange
            $(this).css("background-color",currentColour);
        },
        dblclick: function(){ //when td is double clicked go back to white
            $(this).css("background-color","white");
        }
    })
});