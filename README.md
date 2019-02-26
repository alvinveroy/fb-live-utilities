# Initial Proposal for OBS Tool for Facebook Live Trivia and Raffle
> The goal is to create a tool written in node.js that spawns a new windowed browser which can be use
> as an overlay for Open Broadcaster Software in doing a facebook live.

## Create Admin Portal
- Portal to create a new game/raffle/Auction/Online Selling.
- Admin can create questions, plus button creates more questions
- Admin will assign 4 choices of answers
- Admin will assign the right answer
- Admin will set duration per questions
- Admin controller to show current question.

## Players
- Only number comments will be saved, First in First out. If number is out of range, ignore
- People who got the correct answer will be randomly picked as winner.
### Architecture
#### Database - Firebase Realtime DB
#### Deployable through Heroku

### Modules
- DB Modules - CRUD API for Firebase
- FB Modules - Grab Profile Picture, Store UID and Name, Store Live Stream ID, Store User Access Key
- Browser Modules - Spawn new window for the realtime comments, questions and winner.
- Timer Module - Set the timeout of a question and randomize the winner.

## Features
> 1 - Setup -> Enter FB Access Token
> 1. Trivia, 2. Raffle 3. Live auction (soon) 4. Live Selling (soon)
> Trivia -> Create game -> Enter Game Name -> Enter Questions -> Enter Choices -> Save/Go Live
> Trivia -> Go Live -> Enter Live Video ID
> Raffle -> Choose between Draw raffle when there is X amount of entries or Draw raffle when time expires. -> Set Trigger word to join -> Randomize winner

# Installation
1. First Go to [Firebase Console](https://console.firebase.google.com/) and Create New Project.
.. ![alt text](https://github.com/alvinveroy/fb-live-utilities/blob/master/images/firebase-create-project.png "Create Project")
2. After Creating the project, in project click on settings icon besides project Name in left sidebar and select Permissions.
.. ![alt text](https://github.com/alvinveroy/fb-live-utilities/blob/master/images/firebase-permission.png "Select permission")
3. On Permissions Page Click on Service accounts in left sidebar then click on Generate new private key.
.. ![alt text](https://github.com/alvinveroy/fb-live-utilities/blob/master/images/firebase-generate-private-key.png "Generate new private key")
4. In the popup window click on the button "Generate Key" and it will start downloading your credentials in json format save the file inside your project directory.
.. ![alt text](https://github.com/alvinveroy/fb-live-utilities/blob/master/images/firebase-generate-key-2.png "Download the credentials")
5. Create a file named index.js and copy following code in your project directory.

```
//Loading Firebase Package
var firebase = require("firebase");

/**
* Update your Firebase Project
* Credentials and Firebase Database
* URL
*/
firebase.initializeApp({
  serviceAccount: "<path to Firebase Credentials Json File>",
  databaseURL: "<Firebase Database URL>"
});  //by adding your credentials, you get authorized to read and write from the database


/**
* Loading Firebase Database and refering 
* to user_data Object from the Database
*/
var db = firebase.database();
var ref = db.ref("/user_data");  //Set the current directory you are working in

/**
* Setting Data Object Value
*/
ref.set([
{
    id:20,
    name:"Jane Doe",
    email:"jane@doe.com",
    website:"https://jane.foo.bar"
},
{
    id:21,
    name:"John doe",
    email:"john@doe.com",
    website:"https://foo.bar"
}
]);

/**
* Pushing New Value
* in the Database Object
*/
ref.push({
    id:22,
    name:"Jane Doe",
    email:"jane@doe.com",
    website:"https://jane.foo.bar"
});

/**
* Reading Value from
* Firebase Data Object
*/
ref.once("value", function(snapshot) {
  var data = snapshot.val();   //Data is in JSON format.
  console.log(data);
});

```

6. Just change with the JSON Credentials file URL(For starters just copy the credentials file in Same folder and in index.js file just add the credentials File Name).
7. Next step is to change the in index.js with actual Firebase Database URL, you will be able to find this URL in Firebase Console in Database Tab, The URL will be like https://.firebaseio.com/.
8. Install firebase npm package.
```
$ npm install firebase
```
9. After Executing above command NPM will install necessary packages required for Firebase. Finally to run and test project execute
```
$ node index.js
```
10 The project loads the Data from cloud based Firebase Database. The project also demonstrates how to Write and Read data from a Firebase Data Object.

In order to view your data get updated in realtime, go to [your console](https://console.firebase.google.com/) click on the project you made, and on the left, hit Database. There, you can see your data get updated in real-time, along with their values.

Credits: https://riptutorial.com/firebase/example/22139/hello-world-firebase-realtime-database-in-node