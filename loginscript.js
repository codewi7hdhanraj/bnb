// Search Box

function showSearch(){

    var search = document.getElementById("searchBox");

    if(search.style.display=="block"){

        search.style.display="none";

    }

    else{

        search.style.display="block";

    }

}



// Show / Hide Password

function showPassword(){

    var pass=document.getElementById("password");

    if(pass.type=="password"){

        pass.type="text";

    }

    else{

        pass.type="password";

    }

}



// Login Validation

function loginUser(){

    var email=document.getElementById("email").value;

    var password=document.getElementById("password").value;

    if(email=="" || password==""){

        alert("Please fill all fields.");

    }

    else{

        alert("Login Successful!");

        window.location="index.html";

    }

}
function googleLogin(){

    alert("Google Login is not available in this demo.");

}
function forgotPassword(){

    alert("Password reset link will be sent to your email.");

}