
  
    
    function submit()
    {
        var email = 'mikelakins30@gmail.com';
        var password = 'begin123';

        var inputEmail = document.getElementById("email").value;
        var inputPass =  document.getElementById("pass").value;
    
        var email_error = document.getElementById('email_error').innerHTML = "Please fill up your Email or Username";
        var pass_error = document.getElementById('pass_error').innerHTML = "Please fill up your Password";

        if(inputEmail == email && inputPass == password){
            console.log("submit clicked");
            window.location.href = "login.html";
        }else{
            alert('Wrong Email or Password');
            console.log("Wrong Email or Password");
        }
    }