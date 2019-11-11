console.log("HIIII");

function writeUserData(userId, name, email) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
    });
}

writeUserData("aksduhska", "emmie", "eohnuki@umass.edu");
writeUserData("gd7823ejh", "bob", "blahblah@umass.edu");
writeUserData("89786tydghs", "tom", "hello@umass.edu");
writeUserData("87y3eh=ka", "bill", "umass@umass.edu");



