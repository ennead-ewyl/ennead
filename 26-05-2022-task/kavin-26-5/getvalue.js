function getValue(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log([username,password]);
    document.getElementById("printValue").innerHTML=username;
    document.getElementById("printValue1").innerHTML=password;
}
