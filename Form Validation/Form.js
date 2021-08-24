
  

    var login_attempts=3;
    
    function submit()
    {
        var email = 'mikelakins30@gmail.com';
        var password = 'begin123';

        var inputEmail = document.getElementById("email").value;
        var inputPass =  document.getElementById("pass").value;
    
        var email_error = document.getElementById('email_error').innerHTML = "Please fill up your Email or Username";
        var pass_error = document.getElementById('pass_error').innerHTML = "Please fill up your Password";

        if(inputEmail == email && inputPass == password){
            window.location.href = "login.html";
        }else{
            alert('Wrong Email or Password');


            if(login_attempts==0){
                alert("No Login Attempts Available");
                document.getElementById("email").disabled=true;
                document.getElementById("pass").disabled=true;
            }else{
                login_attempts=login_attempts-1;
                alert("Login Failed Now Only "+login_attempts+" Login Attempts Available");
            }
        }
    }

