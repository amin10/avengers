$(function() {
    for(var i = 0; i < 3; i++){
        var row = make_row(i);
        for(var j = 0; j < 4; j++){
            row.append(make_div(i*4+j))
        }
        $("#grid-container").append(row);
    }
});

function make_row(x) {
    var newRow = $("<div></div>");
    newRow.attr('id', 'row' + String(x));
    newRow.addClass('rows');
    return newRow;
}

var names = ['jobs4u','atl','http','howtocrisis','voteseeker','hzone','somethinggood','crowdalertsystem','kikrisis','watchout','helpmeout','eventor'];
var namesArr = ['Jobs4U','ATL','HTTP','How to crisis','Voteseeker','Hzone','Something good','Crowd alerts system','Kikrisis','Watchout','Helpmeout','Eventor'];
var imagesArr = ["images/jobs4u.png", "images/atl.png", "images/http.png", "images/howtocrisis.png", "images/voteseeker.jpeg", "images/hzone.png", "images/somethinggood.png", 
"images/crowdalertsystem.png", "images/kikrisis.png", "images/watchout.gif", "images/helpmeout.jpeg", "images/eventor.png"];

function make_div(x){

    var newBox = $("<div class = 'boxes'></div>");
    newBox.attr('id', 'box'+String(x));
    newBox.attr('target', '_blank');
    newBox.append("<div class = 'outer1 circle'></div>");
    newBox.append("<div class = 'outer2 circle'></div>");

    var newFigure = $("<figure></figure>")
    newFigure.append("<img src = '" + imagesArr[x] + "' />");
    newFigure.append("<figcaption class = 'caption'>" + namesArr[x] +"</figcaption>");
    newBox.append(newFigure);

    var link = $("<a class = 'links' target = '_blank'></a>");
    link.attr('id', 'link'+String(x));
    link.attr('href', 'http://meet-projects.github.io/'+names[x]+'-y2-2014');
    link.append(newBox);

    return link;
}

