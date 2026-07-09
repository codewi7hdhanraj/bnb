function searchBlogs(){

    var input = document.getElementById("searchInput").value.toUpperCase();

    var cards = document.getElementsByClassName("blog-card");

    for(var i=0;i<cards.length;i++){

        var title = cards[i].getElementsByTagName("h2")[0];

        var txt = title.innerHTML.toUpperCase();

        if(txt.indexOf(input)>-1){

            cards[i].style.display="block";

        }

        else{

            cards[i].style.display="none";

        }

    }

}