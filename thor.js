function login()
{
    var number = document.getElementById("number").value;
    var password = document.getElementById("password").value;
    if(number==8667466767&&password=="shanka")
    {
        alert("Login Succesfully");
        return true;
    }
    else
    {
        alert("Login Failed");

    }
}

var state = false;
            function toggle(){
                if(state){
                    document.getElementById("password").setAttribute("type","password");
                    document.getElementById("eye").style.display="block";
                    state = false;
                }
                else{
                    document.getElementById("password").setAttribute("type","text");
                    document.getElementById("eye").style.display="block";
                    state = true;
                }
        
            }
var state = false;
            function eyeopen(){
                if(state){
                    document.getElementById("pwd").setAttribute("type","password");
                    document.getElementById("eye").style.display="block";
                    state = false;
                }
                else{
                    document.getElementById("pwd").setAttribute("type","text");
                    document.getElementById("eye").style.display="block";
                    state = true;
                }
        
            }