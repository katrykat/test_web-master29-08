
$(document).ready(function() {
        if (location.pathname=="/cart.html"){
                displayCart();
        }else{ 
        
                $.ajax({
                url: "categories.json",
                dataType: "json",
                success: function(data) {
                        processData(data);    
                }
                });
        }

        //Check if cart is null
       if (localStorage.getItem('cart') == null || localStorage.getItem('cart') == ""){
                localStorage.setItem('cart', '[]');
        }
	
     updateCartIcon(); 
});

function updateCartIcon(){
        var cart = JSON.parse(localStorage.getItem('cart'));
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
                // if (cart[i]!="del") {
                      total++;  
                // }   
        }
        $("#cart-count").attr("value", total);
}

function processData(data) {
	for (var i = 0; i < data.length; i++) {
                $("#categories").append('<div id="category'+i+'" class="category"><h2 id="category_title'+i+'"/></div>');
                $("#category_title"+i).append(data[i].title);
                for(var j = 0; j < data[i].products.length; j++){
                        // Adding all the divs, images, titles, etc
                        $("#category"+i).append('<div id="product'+i+j+'"><h4 id="title'+i+j+'"/><img id="img'+i+j+'"/><h5 id="price'+i+j+'"/><button id="'+i+'-'+j+'" onclick="clicked(this);" type="button">Add</button></div>');
                        // Adding titles
                        $("#title"+i+j).append(data[i].products[j].title);
                        // Adding img
                        $("#img"+i+j).attr("src",data[i].products[j].img);

                        $("#price"+i+j).append(data[i].products[j].price);
                        // Adding alt attribute
                        // $("#img"+i).attr("alt",data[i].title+" Section");
                        
                }
		
	}
}

// Function called every time we press a button "Add", this one extracts the id of the button and call addToCart() function
function clicked(item) {
        var btnId = $(item).attr("id");
        addToCart(btnId)
}

// This function accepts an id like this "0-2" representing the element in the data to be added to the Cart
function addToCart(id){
        var res = id.split("-");
        $.ajax({
        url: "categories.json",
        dataType: "json",
        success: function(data) {
                var prodTitle = data[res[0]].products[res[1]].title
                var prodPrice = data[res[0]].products[res[1]].price
                // alert(prodTitle + " has been added to the cart with price: "+prodPrice)
                var cart = JSON.parse(localStorage.getItem('cart'));
                cart.push(data[res[0]].products[res[1]]);
                localStorage.setItem('cart',JSON.stringify(cart));
                updateCartIcon();
        }
        });
}

// Display cart
function displayCart() {
        var cart = JSON.parse(localStorage.getItem('cart'));
        var total = 0;
        $("#cart-content").empty();
        for (var i = 0; i < cart.length; i++) {
                // Adding all the divs, images, titles, etc
                $("#cart-content").append('<div id="product'+i+'"><h4 id="title'+i+'"/><img id="img'+i+'"/><h5 id="price'+i+'"/><button id="'+i+'" onclick="deleteItem(this);" type="button">Delete</button></div>');
                // Adding titles
                $("#title"+i).append(cart[i].title);
                // Adding img
                $("#img"+i).attr("src",cart[i].img);

                $("#price"+i).append(cart[i].price);
                total=parseFloat(cart[i].price) + total;
                // Adding alt attribute
                // $("#img"+i).attr("alt",data[i].title+" Section");  
        }
        $("#total").empty();
        $("#total").append("Total: " + total);

   
}

function deleteItem(item){
         var cart = JSON.parse(localStorage.getItem('cart'));
         var id = $(item).attr("id");
         cart.splice(id, 1);
         localStorage.setItem('cart',JSON.stringify(cart));
         displayCart();
         updateCartIcon();
}