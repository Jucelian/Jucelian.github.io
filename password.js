function CheckPassword() {
    // capture the user enterd password from our input element
    var passwordBoxObject = document.getElementById("passwordBox");
    var passwordEntered = passwordBoxObject.value;
    console.log("User enterd password:",passwordEntered)

    // check if the password is correct
    var sitePassword = "Jucelian";
    if (passwordEntered == sitePassword) {
     // allow navigation
     console.log("Allow");
     window.location.assign("members.html");
    }else{
     // block navigation
     console.log("Block");
     
     // add a new style rule to the incorrect-password element
     document.getElementById("incorrect password").style.color = "red";

     // add text to the incorrect-password element
     document.getElementById("incorrect password").innerHTML = "Incorrect password. Please try again..." 
    }    
 }