export default class FirebaseManager {
    constructor() {
        var config = {
            apiKey: "AIzaSyDtOg5fbvDX0FbHUzptK5ON_7aA2S668W8",
            authDomain: "phasercastles.firebaseapp.com",
            databaseURL: "https://phasercastles.firebaseio.com",
            projectId: "phasercastles",
            storageBucket: "phasercastles.appspot.com",
            messagingSenderId: "561015065759",
            appId: "1:561015065759:web:41d0c578f88d9626"
        };

        // Initialize the default app
        this.defaultApp = firebase.initializeApp(config);

        console.log(this.defaultApp.name);  // "[DEFAULT]"

        // You can retrieve services via the defaultApp variable...
        this.db = this.defaultApp.database();

        //console.log(this.helloWorld());
    }
}
