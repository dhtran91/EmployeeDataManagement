var config = {
    apiKey: "AIzaSyDMANcbLvOvA1pkH879NJJdI14uhqPH3lc",
    authDomain: "click-for-april-b6634.firebaseapp.com",
    databaseURL: "https://click-for-april-b6634.firebaseio.com",
    projectId: "click-for-april-b6634",
    storageBucket: "click-for-april-b6634.appspot.com",
    messagingSenderId: "986481635642"
};
firebase.initializeApp(config);


// Create a variable to reference the database
var database = firebase.database();


// Capture Button Click
$("#add-user").on("click", function (event) {
    // Don't refresh the page!
    event.preventDefault();

    // YOUR TASK!!!

    // Code in the logic for storing and retrieving the most recent user.
    let name = $("#name-input").val().trim();
    let email = $("#email-input").val().trim();
    let age = $("#age-input").val().trim();
    let comment = $("#comment-input").val().trim();

    // Don't forget to provide initial data to your Firebase database.

    database.ref().push({
        nameID: name,
        emailID: email,
        ageID: age,
        commentID: comment
    })

    $("#name-input").text('');
    $("#age-input").text('');
    $("#email-input").text('');
    $("#comment-input").text('');

});


// Firebase watcher + initial loader HINT: .on("value")
database.ref().on('child_added', function (snapshot) {

    console.log(snapshot.val())

    var $tr = $("<tr>");

    let name = $("<th>").addClass(snapshot.val().nameID).text(snapshot.val().nameID);
    let age = $("<th>").text(snapshot.val().ageID);
    let email = $("<th>").text(snapshot.val().emailID);
    let comment = $("<th>").text(snapshot.val().commentID);

    $tr.append(name, age, email, comment)

    $("#newEmp").append($tr);
})