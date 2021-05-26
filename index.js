$(document).ready(function(){
    $("td").on({
        click: function(){ //when td is clicked make it orange
            $(this).css("background-color","orange");
        },
        dblclick: function(){ //when td is double clicked go back to white
            $(this).css("background-color","white");
        }
    })
});