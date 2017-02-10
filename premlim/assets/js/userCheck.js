function authenticateUser(){
	
	var user = firebase.auth().currentUser;

	if(user){
		return true;
	}else{
		window.alert("You must be logged in to use this feature");
		return false;
	}
}