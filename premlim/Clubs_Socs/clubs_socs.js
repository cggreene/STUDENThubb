(function(){

	var config = {
	    apiKey: "AIzaSyCqss-D5ovO7GDQ9U3gqUrU6_fjG_w22V4",
	    authDomain: "studenthub-24981.firebaseapp.com",
	    databaseURL: "https://studenthub-24981.firebaseio.com",
	    storageBucket: "studenthub-24981.appspot.com",
	    messagingSenderId: "157868290236"
	 };
	 firebase.initializeApp(config);

	 

	 /* SEARCH FUNCTIONALITY */
	 var searchBar = document.getElementById("searchBar");
	 var btnSearch = document.getElementById("search");

	 var clubSearch = firebase.database().ref('Clubs/');
	 var socSearch = firebase.database().ref('Socs/');
	 var btnSearch = document.getElementById("search");

	 btnSearch.addEventListener('click', e=>{
	 	console.log("button clicked");
	 	var value = searchBar.value.toUpperCase();
	 	console.log(value);
	 	var res = document.getElementById('results');

	 	res.innerHTML="";

	 	if(value!=""){
	 		console.log("searching");

		 	var list = document.createElement('dl');
		 	console.log("created list");

		 	clubSearch.orderByChild("name").startAt(value).endAt(value+"\uf8ff").on("child_added", function(snapshot){
		 		console.log("Searching clubs");
		 		var club = snapshot.val();
		 		console.log(club.name);

		 		var item1 = document.createElement('dt');
			 	var item2 = document.createElement('dd');
			 	var item3 = document.createElement('dd');

			 	item1.appendChild(document.createTextNode(club.name+" - CLUB"));
			 	item2.appendChild(document.createTextNode(club.info));

			 	var a = document.createElement('a');
			 	a.href=club.link;
			 	a.appendChild(document.createTextNode(club.link));
			 	item3.appendChild(a);

			 	list.appendChild(item1);
			 	list.appendChild(item2);
			 	list.appendChild(item3);
			 	list.appendChild(document.createElement('br'));

		 	}, function(error){
		 		console.log("Error: "+error.code);
		 	});

		 	socSearch.orderByChild("name").startAt(value).endAt(value+"\uf8ff").on("child_added", function(snapshot){
		 		console.log("Searching socs");
		 		var soc = snapshot.val();

		 		var item1 = document.createElement('dt');
			 	var item2 = document.createElement('dd');
			 	var item3 = document.createElement('dd');

			 	item1.appendChild(document.createTextNode(soc.name+" - SOCIETY"));
			 	item2.appendChild(document.createTextNode(soc.info));

			 	var a = document.createElement('a');
			 	a.href=soc.link;
			 	a.appendChild(document.createTextNode(soc.link));
			 	item3.appendChild(a);

			 	list.appendChild(item1);
			 	list.appendChild(item2);
			 	list.appendChild(item3);
			 	list.appendChild(document.createElement('br'));

		 	}, function(error){
		 		console.log("Error: "+error.code);
		 	});

		 	if(list.innerHTML!="")	
		 		res.appendChild(list);
		 }
		 	
		 if(res.innerHTML=="")
		 	res.innerHTML="No results found";
		 

	 });


	 /* MAKE CLUBS LIST */
	 var clubsRef = firebase.database().ref('Clubs/').orderByChild('name');

	 var clubsList = document.createElement('dl')

	 clubsRef.on('child_added',function(snapshot){
	 	var club = snapshot.val();
	 	//console.log(club);
	 	//console.log("Name: "+club.name);
	 	//console.log("Info: "+club.info);
	 	var item1 = document.createElement('dt');
	 	var item2 = document.createElement('dd');
	 	var item3 = document.createElement('dd');

	 	item1.appendChild(document.createTextNode(club.name));
	 	item2.appendChild(document.createTextNode(club.info));

	 	var a = document.createElement('a');
	 	a.href=club.link;
	 	a.appendChild(document.createTextNode(club.link));
	 	item3.appendChild(a);

	 	clubsList.appendChild(item1);
	 	clubsList.appendChild(item2);
	 	clubsList.appendChild(item3);
	 	clubsList.appendChild(document.createElement('br'));

	 }, function(error){
	 	console.log("Error: "+error.code);
	 });

	 document.getElementById('clubs').appendChild(clubsList);


	 /* MAKE SOCS LIST */
	 var socsRef = firebase.database().ref('Socs/').orderByChild('name');

	 var socsList = document.createElement('dl')

	 socsRef.on('child_added',function(snapshot){
	 	var soc = snapshot.val();
	 	//console.log(club);
	 	//console.log("Name: "+club.name);
	 	//console.log("Info: "+club.info);
	 	var item1 = document.createElement('dt');
	 	var item2 = document.createElement('dd');
	 	var item3 = document.createElement('dd');

	 	item1.appendChild(document.createTextNode(soc.name));
	 	item2.appendChild(document.createTextNode(soc.info));

	 	var a = document.createElement('a');
	 	a.href=soc.link;
	 	a.appendChild(document.createTextNode(soc.link));
	 	item3.appendChild(a);

	 	socsList.appendChild(item1);
	 	socsList.appendChild(item2);
	 	socsList.appendChild(item3);
	 	socsList.appendChild(document.createElement('br'));

	 }, function(error){
	 	console.log("Error: "+error.code);
	 });

	 document.getElementById('socs').appendChild(socsList);

	firebase.auth().onAuthStateChanged(function(user){
	 	if(user){
	 		console.log('User logged in')
	 	}else{
	 		console.log('User not logged in');
	 	}
	 });

}());
