function validate() {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="raja"&& password=="wel123")
    {
        alert("Welcome to Admin Page");
        location.replace('raja.html');
    }

    else if(username=="tanaya"&& password=="wel123")
    {
        alert("Welcome to Student Page");
        location.replace('tanaya.html');
    }

    else
    {
        alert("Login Failed");
    }
}

function myFunction() {
    location.replace('index.html')
}
