/* Wait for resources to load before executing script */
window.onload = function () {

	var db = null;

	/* Then wait an additional 3 seconds just in case */
	setTimeout(function () {

		/* Initialize Firebase */
		firebase.initializeApp({
			apiKey: "AIzaSyC3DAli6-TajvEkVjwm8csND4cJAXUkjRM",
			authDomain: "absolute-mind-fuck.firebaseapp.com",
			databaseURL: "https://absolute-mind-fuck.firebaseio.com",
			projectId: "absolute-mind-fuck",
			storageBucket: "absolute-mind-fuck.appspot.com",
			messagingSenderId: "289958971596",
			appId: "1:289958971596:web:fb8a5baf4daef073"
		});

		/* Set the language */
		firebase.auth().languageCode = 'en-GB';

		/* Initialize Firestore */
		db = firebase.firestore();

		/* Set footer year */
		document.getElementById('footer_year').innerHTML = new Date().getFullYear();

	}, 3000);

}