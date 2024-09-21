//Create variable name (favActorFirstName) & store your favorite Actor name.
let favActorFirstName = "Fernando"

// Create variable name (favActorLastName) & store the last name of favorite actor.
let favActorLastName = "Poe Jr."

//Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName).
let fullName = favActorFirstName +""+ favActorLastName;

//Create variable name (uppercase) & CAPITALIZE your favorite actor name.
let uppercase = fullname.toUpperCase();

// Create a variable name (message) & store the message about your fav actor.
let message = `My favorite actor is ${uppercase}. He is known for his iconic roles in action films.`;

// Now append this message to the (message variable) with additional info.
message += ` His best movie is "Ang Probinsyano."`;

//Finally log all variables to the console.
console.log(`Favorite Actor First Name: ${favActorFirstName}`);
console.log(`Favorite Actor Last Name: ${favActorLastName}`);
console.log(`Full Name: ${fullName}`);
console.log(`Uppercase Name: ${uppercase}`);
console.log(`Message: ${message}`); 