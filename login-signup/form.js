document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCiuG4w3TA1a6v9tmOqljehltvviDduL4g",
    authDomain: "form-13f6a.firebaseapp.com",
    databaseURL: "https://form-13f6a.firebaseio.com",
    projectId: "form-13f6a",
    storageBucket: "form-13f6a.appspot.com",
    messagingSenderId: "871328206720",
    appId: "1:871328206720:web:26953ca99ee394d71f3b65"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();


  function signup(){
    
    //var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    console.log(password);
		//var password = document.getElementById("confirm password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
  function signin(){
		
		var email = document.getElementById("email1");
		var password = document.getElementById("password1");
		window.setTimeout(function(){

			// Your redirect is here
				window.location.href = "../../index.html";
			}, 10);
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
	promise.catch(e => alert(e.message));
			alert("Welcome! " + email);

  }

	function signOut(){
		
	firebase.auth().signOut();
	alert("Signed Out");
}
indexApp.logout = logout;

	
	
 auth.onAuthStateChanged(function(user){
		
	 	if(user){		
	 		var email = user.email;
	 		alert("Active User " + email);
			
	 		//Take user to a different or home page

	 		//is signed in
			
	 	}else{
			
			 alert("No Active User");
			 window.location.replace("form.html");
	 		//no user is signed in
		}
		
		
		
	 });
	

