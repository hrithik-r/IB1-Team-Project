var loginCounter = 3;
function validateForm(){
    var username = "teamib1";
    var password = "ib1@234";
    var x = document.forms["loginForm"]["username"].value;
    var y = document.forms["loginForm"]["password"].value;
    var z = document.getElementsByName('user-type');
    console.log(loginCounter);
    if(loginCounter<=1){
        document.getElementById("loginbtn").disabled = true;
        document.getElementById("loginbtn").style.backgroundColor = "grey";
        elmAttempts.innerHTML = "You have exhausted all your attempts! Please try again later."
        return false;
    }
    else{

        if(x==""){
            elmUsernameError.innerHTML = "Enter the username!";
            return false;
        }
        else{
            elmUsernameError.innerHTML = "";
        }
        if(x !== username){
            elmUsernameError.innerHTML = "Could not find the user!";
            return false;
        }
        if(y==""){
            elmPasswordError.innerHTML = "Enter the password!";
            return false;
        }
        else{
            elmPasswordError.innerHTML = "";
        }
        if(y !== password){
            elmPasswordError.innerHTML = "Invalid password!";
            loginCounter--;
            return false;
        }
        if (!(z[0].checked || z[1].checked)) {
            elmTypeError.innerHTML = "Please Select a User Type";
            return false;
        }
    }

}