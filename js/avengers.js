$(function(){
    for(var i = 0; i < 9; i++){
        $("#grid-container").append(make_div(i));
    }    
});

function make_div(x){
    var newBox = $("<div></div>");
    newBox.attr('id', 'box'+String(x));
    newBox.addClass('boxes');
    newBox.hover(function(){
        $(this).css("height","200%").css("width", "200%").removeClass('faded');
        $(".active").removeClass('.active');
        $(this).addClass('active');
        $(".boxes:not(.active)").addClass('faded'); 
        $(this).fadeIn()
    });
    return newBox;
}