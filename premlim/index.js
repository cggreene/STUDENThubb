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
	 var txtPassword = document.getElementById("password");
	 var btnRegister = document.getElementById("register");
	 var btnSignIn = document.getElementById("signIn");
	 var btnSignOut = document.getElementById("signOut");
	 var formMessage = document.getElementById("formMessage");

	 btnRegister.addEventListener('click', e=> {
	 	var email = txtEmail.value;
	 	var password = txtPassword.value;
	 	var auth = firebase.auth();
	 	formMessage.innerHTML = "";

		auth.createUserWithEmailAndPassword(email,password).catch(function(error){
	 		var errorCode = error.code;
	 		var errorMessage = error.message;

	 		formMessage.innerHTML = errorMessage;
	 		console.log(errorCode+" : "+errorMessage);
	 	});

	 	if(formMessage.innerHTML == ""){
	 		formMessage.innerHTML = "You are now registered"
	 	}
	});

	 btnSignIn.addEventListener('click', e=> {
	 	var email = txtEmail.value;
	 	var password = txtPassword.value
	 	var auth = firebase.auth();
	 	formMessage.innerHTML = "";

	 	auth.signInWithEmailAndPassword(email,password).catch(function(error){
	 		var errorCode = error.code;
	 		var errorMessage = error.message;

	 		formMessage.innerHTML = errorMessage;
	 		console.log(errorCode+" : "+errorMessage);
	 	});

	 	if(formMessage.innerHTML == ""){
	 		formMessage.innerHTML = "You are now signed in"
	 	}
	 });

	 btnSignOut.addEventListener('click', e=> {
	 	formMessage.innerHTML = "";

	 	firebase.auth().signOut().catch(function(error){
	 		var errorCode = error.code;
	 		var errorMessage = error.message;

	 		formMessage.innerHTML = "Error signing out";
	 		console.log(errorCode+" : "+errorMessage);
	 	})

	 	if(formMessage.innerHTML == ""){
	 		formMessage.innerHTML = "You are now signed out"
	 	}
	 });

	 firebase.auth().onAuthStateChanged(function(user){
	 	if(user){
	 		console.log('User logged in')
	 	}else{
	 		console.log('User not logged in');
	 	}
	 });

}());