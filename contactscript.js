function sendMessage(){

    var name=document.getElementById("name").value;

    var email=document.getElementById("email").value;

    var phone=document.getElementById("phone").value;

    var subject=document.getElementById("subject").value;

    var message=document.getElementById("message").value;

    if(name=="" || email=="" || phone=="" || subject=="" || message==""){

        alert("Please fill all the fields.");

    }

    else{

        alert("Thank you! Your message has been sent.");

        document.getElementById("contactForm").reset();

    }

}