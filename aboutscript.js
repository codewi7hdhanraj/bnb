// Show Search Box

function showSearch(){

    var box=document.getElementById("searchBox");

    if(box.style.display=="block"){

        box.style.display="none";

    }

    else{

        box.style.display="block";

    }

}



// Search Products

function searchProducts(){

    var input=document.getElementById("searchInput").value.toUpperCase();

    var product=document.getElementsByClassName("product-box");

    for(var i=0;i<product.length;i++){

        var h3=product[i].getElementsByTagName("h3")[0];

        var txt=h3.innerHTML.toUpperCase();

        if(txt.indexOf(input)>-1){

            product[i].style.display="block";

        }

        else{

            product[i].style.display="none";

        }

    }

}