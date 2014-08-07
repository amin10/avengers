$(function(){
    for(var i = 0; i < 9; i++){
        $("#grid-container").append(make_div(i));
    }    
});

function make_div(x){
    var newBox = $("<div></div>");
    newBox.attr('id', 'box'+String(x));
    newBox.addClass('boxes');
    newBox.css('height','50px').css('width','50px').css('background-color', 'red');
    newBox.hover(function(){
        $(this).css("height","200%").css("width", "200%");
        $(this).siblings().addClass('faded') 
        $(this).fadeIn()
    });
    return newBox;
}