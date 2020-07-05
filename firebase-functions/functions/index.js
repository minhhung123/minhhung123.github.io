const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });



//Create User Records code
// auth triggers (new user SignUp)
exports.newUserSignUp = functions.auth.user().onCreate(user => {
    return admin.firestore().collection('users').doc(user.uid).set({
        email: user.email,
        upvotedOn: []
    });
});

// auth trigger (user deleted)
exports.userDeleted = functions.auth.user().onDelete(user => {
    const doc = admin.firestore().collection('users').doc(user.uid);
    return doc.delete();
});

// for background triggers you must return a value/promise


// Adding new requests code
// http Callable function (adding a request)
exports.addRequest = functions.https.onCall((data, context) => {
    if(!context.auth){
        throw new functions.https.HttpsError(
            'unauthenticated',
            'only authenticated users can add requests'
        );
    }
    if(data.text.length > 30){
        throw new functions.https.HttpsError(
            'invalid-argument',
            'requests must be no more than 30 characters long'
        );
    }
    return admin.firestore().collection('requests').add({
        text: data.text,
        upvotes: 0,
    });
});