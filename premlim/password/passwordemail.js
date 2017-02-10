(function(){

    var config = {
        apiKey: "AIzaSyCqss-D5ovO7GDQ9U3gqUrU6_fjG_w22V4",
        authDomain: "studenthub-24981.firebaseapp.com",
        databaseURL: "https://studenthub-24981.firebaseio.com",
        storageBucket: "studenthub-24981.appspot.com",
        messagingSenderId: "157868290236"
     };
     firebase.initializeApp(config);

     var txtEmail = document.getElementById("email");
     var btnSend = document.getElementById("send");
     var formMessage = document.getElementById("formMessage");

     btnSend.addEventListener('click', e=>{
        var email = txtEmail.value;
        var auth = firebase.auth();

        formMessage.innerHTML="";

        auth.sendPasswordResetEmail(email).then(function(){


        }, function(error){

            formMessage.innerHTML = error.message;

        });

        if(formMessage.innerHTML=="")
        	formMessage.innerHTML = "Password reset email has been sent";
     })

     firebase.auth().onAuthStateChanged(function(user){
        if(user){
            console.log('User logged in')
        }else{
            console.log('User not logged in');
        }
     });

}());