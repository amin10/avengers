$(function(){
    for(var i = 0; i < 9; i++){
        $("#grid-container").append(make_div(i));
    }    
});


function make_div(x){
    var newBox = $("<div></div>");
    newBox.attr('id', 'box'+String(x));
    newBox.addClass('boxes').addClass('faded')
    newBox.hover(function(){
        //$(".active").removeClass('active');
        $(this).removeClass('faded').addClass('active');
        //$(".boxes:not(.active)").addClass('faded'); 
        $(this).animate({width:'+=400px', height:'+=400px'}, 1500)
    },function(){
        $(this).removeClass('active').addClass('faded');
        $(this).animate({width:'-=400px', height:'-=400px'}, 1500)
    });
    return newBox;
}

