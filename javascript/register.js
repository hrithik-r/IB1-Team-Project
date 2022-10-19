if(y==""){
    elmPasswordError.innerHTML = "Enter the password!";
    return false;
}
else if(y.length<=7 || y.length>=13){
    elmPasswordError.innerHTML = "Enter a valid length password!"
    return false;
}