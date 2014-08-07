var box_side;

$(function() {
    for(var i = 0; i < 3; i++){
        var row = make_row(i);
        for(var j = 0; j < 3; j++){
            row.append(make_div(j))
        }
        $("#grid-container").append(row);
    }
    box_side = $(".boxes").css('height');
    $("#grid-container").css('width',parseInt(box_side)*5);
});

function make_row(x) {
    var newRow = $("<div></div>");
    newRow.attr('id', 'row' + String(x));
    newRow.addClass('rows');
    return newRow;
}

function make_div(x){
    var newBox = $("<span></span>");
    newBox.attr('id', 'box'+String(x));
    newBox.addClass('boxes').addClass('faded')
    newBox.hover(function(){
        //$(".active").removeClass('active');
        $(this).removeClass('faded').addClass('active');
        //$(".boxes:not(.active)").addClass('faded'); 
        $(this).animate({width:'+=400px', height:'+=400px'}, 1500)
    },function(){
        $(this).stop()
        $(this).removeClass('active').addClass('faded');
        $(this).animate({width: box_side, height:box_side}, 0)
    });
    return newBox;
}

