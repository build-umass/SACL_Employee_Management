console.log("HIIII");

//writing information
function writeUserData(userId, name, email) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
    });
}

function getUserData(userID) {
    var ref = firebase.database().ref('users/' + userID)
    ref.on("value", function(snapshot) {
        console.log("User ID: " + userID + );
    })
}

writeUserData("aksduhska", "emmie", "eohnuki@umass.edu");
writeUserData("gd7823ejh", "bob", "blahblah@umass.edu");
writeUserData("89786tydghs", "tom", "hello@umass.edu");
writeUserData("87y3eh=ka", "bill", "umass@umass.edu");

//getting information
var dbref = firebase.database().ref('users/');
dbref.on("value", function(snapshot) {
    console.log(snapshot.val());
})




