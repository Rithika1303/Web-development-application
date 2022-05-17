const data= {
    Rithika : "abc123",
    xyz : "123" 
}
    function result(){
        let username = document.getElementById("name").value;
        let password = document.getElementById("pass").value;
        let flag=0;
        for(user in data)
        {
            if(username === user)
            {
                flag=1;
                if(password === (data[user]))
                {
                    flag=1;
                }
                else
                {
                    window.alert("password incorrect");
                }
                break;
            }
        }  
        if(flag === 0)
        {
            window.alert("invaid user");
        }
        else{
            location.replace("file:///C:/Users/admin/Desktop/Retu/intern/assignment-1/project1/studentlist.html");
            window.alert("successfull");
        } 
    }
    function validate_name(name1){
        for(user in data)
        {
            if(user === name1)
            {
                return 0;
            }
        }
        return 1;
    }
    function validate(){
        let username = document.getElementById("name").value;
        let password = document.getElementById("pass").value;
        let pass1 = document.getElementById("pass1").value;
        let val_name = validate_name(username);
        if(val_name === 0)
        {
            document.getElementById("inname").innerHTML="username is already taken";
        }
        else{
            document.getElementById("inname").innerHTML="";
        }
        if(password.length < 8) {
            document.getElementById("inpass").innerHTML="its length has to be atleast 8";
        }
        if(password !== pass1)
        {
            document.getElementById("inpass1").innerHTML="wrong password entered";
        }
        else{
            checkpass(password);
        }

    }
    function checkpass(password1){
        let flag=0;
        var lowerCaseLetters = /[a-z]/g;
        if(!password1.match(lowerCaseLetters)) {
            flag=1;
            document.getElementById("inpass").innerHTML= "it should atleast contain one lower case alphabet";
        } 
        var upperCaseLetters = /[A-Z]/g;
        if(!password1.match(upperCaseLetters)) {
            flag=1;
            document.getElementById("inpass").innerHTML="it should atleast contain one upper case alphabet";
        }  
        var numbers = /[0-9]/g;
        if(!password1.match(numbers)) {
            flag=1;
            document.getElementById("inpass").innerHTML="it should atleast contain one digit";
        } 
        if(flag === 0)  
        {
            document.getElementById("inpass").innerHTML="";
            data.username= password1;
            location.replace("file:///C:/Users/admin/Desktop/Retu/intern/assignment-1/project1/studentlist.html");
            window.alert("successfull");
        }
}
function isEmpty()
{
    let pass= document.getElementById("pass").value;
    let email= document.getElementById("email").value;
    if(pass !=="" && email !== "")
    {
        let button= document.getElementById("button");
        button.disabled = false;
    }
    else{
        button.disabled= true;
    }
}
