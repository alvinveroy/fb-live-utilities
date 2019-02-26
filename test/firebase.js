var firebase = require("../node_modules/firebase-admin");

var serviceAccount = require("../credentials/firebase-credentials.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://test-db-demo.firebaseio.com"
});

var db = firebase.database();
var ref = db.ref("/user_data");  //Set the current directory you are working in

/**
* Setting Data Object Value
*/
ref.set([
    {
        id: 20,
        name: "Jane Doe",
        email: "jane@doe.com",
        website: "https://jane.foo.bar"
    },
    {
        id: 21,
        name: "John doe",
        email: "john@doe.com",
        website: "https://foo.bar"
    }
]);

/**
* Pushing New Value
* in the Database Object
*/
ref.push({
    id: 22,
    name: "Jane Doe",
    email: "jane@doe.com",
    website: "https://jane.foo.bar"
});

/**
* Reading Value from
* Firebase Data Object
*/
ref.once("value", function (snapshot) {
    var data = snapshot.val();   //Data is in JSON format.
    console.log(data);
});