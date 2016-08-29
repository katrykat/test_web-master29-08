$(document).ready(function() {
	$.ajax({
        url: "products.json",
        dataType: "json",
        success: function(data) {
        	processData(data);      	
        }
     });    
});

//      Lighting  
function processData(lighting) {
	for (var i = 0; i < data.length; i++) {
	// Adding all the divs, images, titles, etc
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        // Adding titles
        $("#title"+i).append(data[i].title);
        // Adding img
        $("#img"+i).attr("src",data[i].img);
        // Adding alt attribute
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}       
function processData(lighting) {
	for (var i = 1; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
        }
}
//      Electricity   
function processData(electricity) {
	for (var i = 0; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
        
function processData(electricity) {
	for (var i = 1; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}       
//      Electronics  
function processData(electronics) {
	for (var i = 0; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}        
function processData(electronics) {
	for (var i = 1; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}        
//      Connectors          
function processData(connectors) {
	for (var i = 0; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}        
function processData(connectors) {
	for (var i = 1; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}        
//      Gardens          
function processData(gardens) {
	for (var i = 0; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}        
function processData(gardens) {
	for (var i = 1; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}        
//      Various          
function processData(various) {
	for (var i = 0; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
	}
}        
function processData(various) {
	for (var i = 1; i < data.length; i++) {
        $("#products").append('<div id="div'+i+'"><h2 id="title'+i+'"></h2><img id="img'+i+'"/></div>');
        $("#title"+i).append(data[i].title);
        $("#img"+i).attr("src",data[i].img);
        $("#img"+i).attr("alt",data[i].title+" Section");
        
	}
}    
        
