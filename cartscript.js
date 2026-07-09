// Show Search Box

function showSearch(){

    var search=document.getElementById("searchBox");

    if(search.style.display=="block"){

        search.style.display="none";

    }

    else{

        search.style.display="block";

    }

}



// Increase Quantity

function plus(button){

    var row=button.parentElement.parentElement;

    var qty=row.querySelector(".qty");

    var price=row.querySelector(".price");

    var total=row.querySelector(".total");

    qty.innerHTML=parseInt(qty.innerHTML)+1;

    total.innerHTML=parseInt(price.innerHTML)*parseInt(qty.innerHTML);

    grandTotal();

}



// Decrease Quantity

function minus(button){

    var row=button.parentElement.parentElement;

    var qty=row.querySelector(".qty");

    var price=row.querySelector(".price");

    var total=row.querySelector(".total");

    if(parseInt(qty.innerHTML)>1){

        qty.innerHTML=parseInt(qty.innerHTML)-1;

        total.innerHTML=parseInt(price.innerHTML)*parseInt(qty.innerHTML);

    }

    grandTotal();

}



// Remove Product

function removeItem(icon){

    icon.parentElement.parentElement.remove();

    grandTotal();

}



// Calculate Grand Total

function grandTotal(){

    var totals=document.getElementsByClassName("total");

    var sum=0;

    for(var i=0;i<totals.length;i++){

        sum=sum+parseInt(totals[i].innerHTML);

    }

    document.getElementById("subtotal").innerHTML="₹"+sum;

    document.getElementById("grandtotal").innerHTML="₹"+sum;

}



// Checkout

function checkout(){

    alert("Thank You! Your order has been placed successfully.");

}
grandTotal();