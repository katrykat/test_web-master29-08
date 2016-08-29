$(document).ready(function() {
	$.ajax({
        url: "categories.json",
        dataType: "json",
        success: function(data) {
        	processData(data);      	
        }
     });    
});

//Categories

function processData(Lighting) {
	for (var i = 0; i < data.length; i++) {
		// Adding all the divs, images, titles, etc
        $("#categories").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        // Adding titles
        $("#title"+i).append(data[i].title);
        // Adding img
        $("#img"+i).attr("src",data[i].img);
        // Adding alt attribute
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}
function processData(Electricity) {        
        for (var i = 1; i < data.length; i++) {
        $("#categories").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
        }
}
function processData(Electronics) {        
        for (var i = 2; i < data.length; i++) {
        $("#categories").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
        }
}
function processData(Connectors) {
        for (var i = 3; i < data.length; i++) {
        $("#categories").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
        }
}        
function processData(Gardens) {
        for (var i = 4; i < data.length; i++) {
        $("#categories").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
        }
}        
function processData(Various) {
        for (var i = 5; i < data.length; i++) {
        $("#categories").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
        }
}

