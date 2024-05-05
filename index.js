// QUESTION 02
// let personName: string = "Wajeeha";
// console.log(`Hello ${personName}, would you like to learn some python today?`);
//------------------------------------------------------------------------------------
// QUESTION 03
// let personName: string = "Wajiha";
// console.log(personName.toLowerCase());
// console.log(personName.toUpperCase());
// // console.log(personName.totitleCase());
//----------------------------------------------------------------------------------
// Ques 4
// console.log(
//   "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
// );
//---------------------------------------------------------------------------------------
// // Ques 5
// let famous_person: string = "Albert Einstein";
// let message: string = `${famous_person} once said, “A person who never made a mistake never tried anything new.”`;
// console.log(message);
// const famous_person = "Albert Einstein";
// const message = "“A person who never made a mistake never tried anything new.”";
// console.log(famous_person + message);
//-------------------------------------------------------------------------------------------
// Question 6
// let myName: string = "\t\n Wajeeha \t\n"; // This saves the name with whitespace
// console.log(myName); // Shows the name with whitespace
// console.log(myName.trim()); // Shows the name without whitespace
//-------------------------------------------------------------------------------------
// Question 7
// let addition = 6 + 2;
// let subtraction = 10 - 2;
// let multiplication = 4 * 2;
// let division = 16 / 2;
// console.log(addition);
// console.log(subtraction);
// console.log(multiplication);
// console.log(division);
//-----------------------------------------------------------------------------------------
// Question 8
// console.log(6 + 2);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);
//-------------------------------------------------------------------------------------------
// Question 9
// let favNumber = 5;
// console.log(`The favorite Number is ${favNumber}`);
//-------------------------------------------------------------------------------------------
// Question 11
// const friends = ["Ali", "Arooj", "Wajeeha", "Shummas"];
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }
//----------------------------------------------------------
// Question 12
// const friends = ["Ali", "Arooj", "Wajeeha", "Shummas"];
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i], "Love u all my friends");
// }
// let names: string[] = ["Alice", "Bob", "Charlie"];
// for (let name of names) {
//   console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
// }
//-------------------------------------------------------------
// Question 13
// let transportation = ["Honda", "Kawasaki", "Suzuki", "China bikes"];
// for (let i = 0; i < transportation.length; i++) {
//   console.log(`I would like to own a ${transportation[i]} motorcycle.`);
// }
// let transports: string[] = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];
// transports.forEach((transport) => {
//   console.log(`I would like to own a ${transport}.`);
// });
//---------------------------------------------------------------------
// Question 14
// const guestList = ["Arooj", "Wajeeha", "Safdar"];
// for (let i = 0; i < guestList.length; i++) {
//   console.log(guestList[i], "I am inviting you for dinner");
// }
// let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
// guests.forEach((guest) => {
//   console.log(`Dear ${guest}, would you like to join me for dinner?`);
// });
//-----------------------------------------------------------------
// Question 15
// const guestList = ["Arooj", "Wajeeha", "Safdar"];
// for (let i = 0; i < guestList.length; i++) {
//   console.log(guestList[i], "I am inviting you for dinner");
// }
// let unableToAttend = "Safdar";
// console.log(`${unableToAttend} is not coming in dinner `);
// let newGest = "Sharjeel";
// guestList[guestList.indexOf(unableToAttend)] = newGest;
// // console.log(guestList);
// for (let i = 0; i < guestList.length; i++) {
//   console.log(guestList[i], "I am inviting you for dinner");
// }
//-----------------------------------------------------------
// Question 16
// let guestsList: string[] = ["Arooj", "Wajeeha", "Shaheer"];
// console.log("Great news, I am arranging a bigger dinner table");
// guestsList.unshift("Safdar");
// guestsList.splice(guestsList.length / 2, 0, "Shummas");
// guestsList.push("Sharjeel");
// for (let i = 0; i < guestsList.length; i++) {
//   console.log(guestsList[i], "Would you like to have a dinner with me");
// }
//------------------------------------------------------------------------
// Question 17
// let guestsList: string[] = ["Arooj", "Wajeeha", "Shaheer"];
// console.log("Great news, I am arranging a bigger dinner table");
// guestsList.unshift("Safdar");
// guestsList.splice(guestsList.length / 2, 0, "Shummas");
// guestsList.push("Sharjeel");
// for (let i = 0; i < guestsList.length; i++) {
//   console.log(guestsList[i], "Would you like to have a dinner with me");
// }
// console.log("Unfortunately, I can only invite two people for dinner.");
// for (let i = 0; guestsList.length > 2; i++) {
//   let removedGuest = guestsList.pop();
//   console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
// }
// // console.log(guestsList);
// for (let i = 0; i < guestsList.length; i++) {
//   console.log(guestsList[i], "I am inviting u for dinner");
// }
// guestsList.splice(0, guestsList.length);
// console.log(guestsList);
//-----------------------------------------------------------------------
// Question 18
// let places: string[] = [
//   "Ziyarath",
//   "Quetta",
//   "Gulgilt",
//   "Kashmir",
//   "Abbatabad",
// ];
// console.log("2-Original Order: ", places);
// console.log("3-Alphabetical Order: ", [...places].sort());
// console.log("4-Original Order: ", places);
// console.log("5-Reverse Alphabetical Order: ", [...places].sort().reverse());
// console.log("6-Original Order: ", places);
// places.reverse();
// console.log("7-Reverse Order: ", places);
// places.reverse();
// console.log("8-Original Order: ", places);
// places.sort();
// console.log("9-Alphabetical Order: ", places);
// places.sort().reverse();
// places.reverse();
// console.log("10-Reverse Alphabetical Order: ", places);
//---------------------------------------------------------------
// Question 19
// let guestsList: string[] = [
//   "Arooj",
//   "Wajeeha",
//   "Sharjeel",
//   "Shummas",
//   "Safdar",
// ];
// console.log(`Inviting total ${guestsList.length} people to dinner.`);
//--------------------------------------------------------------------
// Question 20
// const cities: string[] = [
//   "Abbatabad",
//   "Ziyarath",
//   "Kashmir",
//   "Quetta",
//   "Gilgit",
// ];
// console.log("I had visit these places in Pakistan soo far: ", cities);
//----------------------------------------------------------------------
// Question 21
// let car: { name: string; model: number; airBags: boolean; color: string } = {
//   name: "Civic",
//   model: 2022,
//   airBags: true,
//   color: "Black",
// };
// console.log(
//   `I am selling my car ${car.name}, model ${car.model}, airBags ${car.airBags}, and color ${car.color}`
// );
//------------------------------------------------------------------
// Question 22
// let familyMembers: string[] = [
//   "Arooj",
//   "Wajeeha",
//   "Shummas",
//   "Sharjeel",
//   "Safdar",
// ];
// // console.log(familyMembers[5]); // Index Error
// console.log(familyMembers[4]);
//-----------------------------------------------------------------
// Question 23
// condition ? trueExpression : falseExpression;
// let marks = 75;
// let passingMarks = 50;
// let result = marks > passingMarks ? "pass" : "fail";
// console.log(result);
// let marks = 45;
// let passingMarks = 50;
// let result = marks > passingMarks ? "pass" : "fail";
// console.log(result);
// let evenNumber = 200;
// let value = evenNumber % 2 == 0 ? "true" : "false";
// console.log(value);
// let evenNumber = 213;
// let value = evenNumber % 2 == 0 ? "true" : "false";
// console.log(value);
// let vehicleMode = 2000;
// let bankLoan = vehicleMode > 2015 ? "loan Approved" : "loan Rejected";
// console.log(`Your application for car ${bankLoan}`);
// let vehicleMode = 2020;
// let bankLoan = vehicleMode > 2015 ? "loan Approved" : "loan Rejected";
// console.log(`Your application for car ${bankLoan}`);
//------------------------------------------------------------------
// QUESTION : 24
// TEST 1 equality and inequality with strings
// type fruit = "apple" | "bananna";
// let myFruit: fruit;
// myFruit = "apple";
// myFruit = "bananna";
// console.log(myFruit === myFruit);
// console.log(myFruit !== myFruit);
// let car1 = "Aulto";
// let car2 = "Mehran";
// let car3 = "Honda Civic";
// let car4 = "Toyota Vitz";
// console.log(car1 === car2);
// console.log(car3 !== car4);
// TEST 2 LOWER CASE FUNCTION
// const city = "Lahore";
// const lowercaseCity = city.toLowerCase();
// console.log(`Is ${city} equal to ${lowercaseCity}? ${city === lowercaseCity}`);
// const city = "KARACHI";
// const lowerCaseCity = city.toLowerCase();
// console.log(city === lowerCaseCity);
// const city = "KARACHI";
// const lowerCaseCity = city.toLowerCase();
// const city2 = "karachi";
// console.log(lowerCaseCity === city2);
// TEST 3 NUMERICAL TEST
// const num1 = 20;
// const num2 = 30;
// console.log(num1 === 20);
// console.log(num1 !== 20);
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 < num2);
// console.log(num1 >= 10);
// console.log(num1 <= num2);
// TEST 4 AND & OR OPERATOR
// const num1 = 20
// const num2 = 30
// console.log(num1 < num2 && num2 > 15);
// console.log(num1 < 5 || num2 > num1);
// TEST 6 ITEM IN ARRAY
// const myArr:string[] = ["Arooj", "Shaheer", "Wajiha", "Safdar"]
// console.log(myArr.includes("Arooj"));
// TEST 7 ITEM NOT IN ARRAY
// const myArr2:string[] = ["Arooj", "Shaheer", "Wajiha", "Safdar"]
// console.log(myArr.includes("Shummas"));
//--------------------------------------------------------------------
// Question 25
// let alienColor = "green";
// if (alienColor === "green") {
//   console.log(" player just earned 5 points.");
// } else {
//   console.log("The color of alien is not green");
// }
// if (alienColor === "red") {
//   console.log("No output bcz alienColor is not red");
// }
//--------------------------------------------------------------
// QUESTION 26
// let alienColor = "red";
// if (alienColor === "green") {
//   console.log("the player earned 5 points.");
// } else if (alienColor === "yellow") {
//   console.log("the player earned 10 points.");
// } else if (alienColor === "red") {
//   console.log("alien color is red");
// } else {
//   console.log("The color of alien is blue");
// }
// let alienColor = "blue";
// if (alienColor === "green") {
//   console.log("the player earned 5 points.");
// } else if (alienColor === "yellow") {
//   console.log("the player earned 10 points.");
// } else if (alienColor === "red") {
//   console.log("alien color is red");
// } else {
//   console.log("The color of alien is blue");
// }
// --------------------------------------------------------------
// Question 27
// let alienColor = "green";
// if (alienColor === "green") {
//   console.log("the player earned 5 points.");
// } else if (alienColor === "yellow") {
//   console.log("the player earned 10 points.");
// } else if (alienColor === "red") {
//   console.log("the player earned 15 points");
// } else {
//   console.log("The color of alien is blue");
// }
// let alienColor = "yellow";
// if (alienColor === "green") {
//   console.log("the player earned 5 points.");
// } else if (alienColor === "yellow") {
//   console.log("the player earned 10 points.");
// } else if (alienColor === "red") {
//   console.log("the player earned 15 points");
// } else {
//   console.log("The color of alien is blue");
// }
// let alienColor = "red";
// if (alienColor === "green") {
//   console.log("the player earned 5 points.");
// } else if (alienColor === "yellow") {
//   console.log("the player earned 10 points.");
// } else if (alienColor === "red") {
//   console.log("the player earned 15 points");
// } else {
//   console.log("The color of alien is blue");
// }
//--------------------------------------------------------------------
// Question 28
// const personAge = 32;
// if (personAge < 2) {
//   console.log(" the person is a baby.");
// } else if (personAge <= 2 || personAge < 4) {
//   console.log("person is a toddler");
// } else if (personAge <= 4 || personAge < 13) {
//   console.log("person is a kid");
// } else if (personAge <= 13 || personAge < 20) {
//   console.log("person is a teenager");
// } else if (personAge <= 20 || personAge < 65) {
//   console.log("person is a adult");
// } else if (personAge <= 20 || personAge < 65) {
//   console.log("person is a adult");
// } else if (personAge >= 65) {
//   console.log("person is a elder");
// }
//------------------------------------------------------------------------
// QUESTION 29
// const favFruits: string[] = ["Mango", "Orange", "Apple", "Banana"];
// if (favFruits.includes("Pineapple")) {
//   console.log("Is Pineapple your favorite fruit ?");
// } else if (favFruits.includes("strawberry")) {
//   console.log("Is Strawberry your favorite fruit ?");
// } else if (favFruits.includes("Cherry")) {
//   console.log("Is cherry your favorite fruit ?");
// } else if (favFruits.includes("Papaya")) {
//   console.log("Is Papaya your favorite fruit ?");
// } else {
//   console.log("You really like bananas!");
// }
//----------------------------------------------------------------
// Question 30
// let userNames = ["Arooj", "Admin", "Wajeeha", "Shaheer", "Safdar"];
// for (let i = 0; i < userNames.length; i++) {
//   if (userNames[i] === "Admin") {
//     console.log("Hello admin, would you like to see a status report?");
//   } else {
//     console.log(userNames[i], "Hello, thank you for logging in again.");
//   }
// }
//-------------------------------------------------------------------
// Question 31
// let usernames: string[] = [];
// if (usernames.length === 0) {
//   console.log("We need to find some users!");
// }
//------------------------------------------------------------------
// Question 32
//          =====>>>> NESTED FOR LOOP <<<<============
// const currentUser: string[] = ["Aqib", "Talha", "Arooj", "Wajeeha", "Shoaib"];
// const newUser: string[] = ["AROOJ", "WAJEEHA", "Shaheer", "Safdar", "Shummas"];
// for (let i = 0; i < newUser.length; i++) {
//   let available = true;
//   for (let j = 0; j < currentUser.length; j++) {
//     if (newUser[i].toLowerCase() === currentUser[j].toLowerCase()) {
//       console.log(
//         "Please enter a new user name, " + newUser[i] + " is already taken."
//       );
//       available = false;
//       break;
//     }
//   }
//   if (available) {
//     console.log("The user name " + newUser[i] + " is available.");
//   }
// }
//---------------------------------------------------------------
//  QUESTION 33
// const ordinalNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < ordinalNumber.length; i++) {
//   if (ordinalNumber[i] === 1) {
//     console.log("1st");
//   } else if (ordinalNumber[i] === 2) {
//     console.log("2nd");
//   } else if (ordinalNumber[i] === 3) {
//     console.log("3rd");
//   } else if (ordinalNumber[i] === 4) {
//     console.log("4th");
//   } else if (ordinalNumber[i] === 5) {
//     console.log("5th");
//   } else if (ordinalNumber[i] === 6) {
//     console.log("6th");
//   } else if (ordinalNumber[i] === 7) {
//     console.log("7th");
//   } else if (ordinalNumber[i] === 8) {
//     console.log("8th");
//   } else if (ordinalNumber[i] === 9) {
//     console.log("9th");
//   }
// }
//--------------------------------------------------------------------
// QUESTION 34
// const favoritePizzas:string[] = ["Pepperoni", "Margherita", "Hawaiian"];
// for(let i = 0; i < favoritePizzas.length; i++){
//     console.log(`I like ${favoritePizzas[i]} pizza`);
// }
// console.log("I really like pizza");
//-----------------------------------------------------------------------
// QUESTION 35
// const animals:string[] = ["Dog", "Wolf", "Fox"]
// for(let i = 0; i < animals.length; i++){
//     if(animals[i] === "Dog"){
//         console.log("A dog would make a great pet");
//     }
//     else if(animals[i] === "Wolf"){
//         console.log("Wolf lives in mountains");
//     }
//     else if(animals[i] === "Fox"){
//         console.log("Fox are very claver");
//     }
// }
// console.log("Any of these animals would make a great pet!");
//-------------------------------------------------------------------
// QUESTION 36
// function T_shirt(size:string, message:string){
//     console.log(`The size of shirt is ${size}, ${message}`)
// }
// T_shirt("Medium","I love to code in Typescript")
//-----------------------------------------------------------------
// Question 37
// function makeShirt(
//   size: string = "large",
//   message: string = "I love Typescript"
// ) {
//   console.log(`The size is ${size}, ${message}`);
// }
// // makeShirt("small", "I am learning T.S");
// // makeShirt();
//--------------------------------------------------------------------------------
// Question 38
// function describeCity(city: string, country: string = "Pakistan") {
//   console.log(`${city}, is in ${country}`);
// }
// describeCity("Lahore");
// describeCity("Karachi");
// describeCity("Delhi", "India");
//----------------------------------------------------------------------------------{-
// Question 39
// function cityCountry(city: string, country: string) {
//   let trip = `${city}, ${country}`;
//   return trip;
// }
// console.log(cityCountry("Lahore", "Pakistan"));
// console.log(cityCountry("Delhi", "India"));
// console.log(cityCountry("Dhaka", "Bangladesh"));
//------------------------------------------------------------------------------------
// Question 40
// function makeAlbum(artist: string, album: string, numberOfTracks?: number) {
//   let musicAlbum = {
//     artistName: artist,
//     albumName: album,
//     tracks: numberOfTracks,
//   };
//   return musicAlbum;
// }
// console.log(makeAlbum("Atif Aslam", "zindagii"));
// console.log(makeAlbum("Ali Zafar", "Phool", 7));
// console.log(makeAlbum("Sharjeel", "Kamiyabii", 2)`
// function make_album(artist: string, title: string, tracks?: number) {
//   let album = { artist, title };
//   if (tracks) {
//     album["tracks"] = tracks;
//   }
//   return album;
// }
// console.log(make_album("Artist One", "The First Album"));
// console.log(make_album("Artist Two", "The Second Album"));
// console.log(make_album("Artist Three", "The Third Album", 12));
//---------------------------------------------------------------------------------
// Question 41
// const magician = ["Sharjeel", "Shummas", "Shaheer", "Safdar", "Aqib"];
// function showMagicians(magician: string[]) {
//   for (let i = 0; i < magician.length; i++) {
//     console.log(magician[i]);
//   }
// }
// showMagicians(magician);
//-----------------------------------------------------------------------------
// Question 42
// const magician = ["Sharjeel", "Shummas", "Shaheer", "Safdar", "Aqib"];
// function showMagicians(magician: string[]) {
//   for (let i = 0; i < magician.length; i++) {
//     console.log(magician[i]);
//   }
// }
// function make_great(magicians: string[]) {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = magicians[i] + " the Great";
//   }
// }
// make_great(magician);
// showMagicians(magician);
//---------------------------------------------------------------------------------
// Question 43
//              ======>>> UNABLE TO SOLVE <<<==========
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name
//--------------------------------------------------------------------------------
// Question 44
/*
Dear sir I am have the logical concept for this question.
1- We are using here the spread operator methode of an Array. Which does not manuplates the original array, rather it creats the copy of that array and manuplates it
2- The join methode of an array converts the array into the string and join them
*/
function orderSandwich(...items) {
    items.push("Kabab");
    console.log(`You've ordered a sandwich with: ${items.join(", ")}`);
}
orderSandwich("cheese", "tomato", "egg");
//---------------------------------------------------------------------------
// QUESTION 45
function carInfo(carName, manufacturer, model, color, optionalFeature) {
    const car = {
        carName,
        manufacturer,
        model,
        color,
        optionalFeature,
    };
    return car;
}
console.log(carInfo("Vitz", "Toyota", 2022, "Blue", "Alloy Wheels"));
export {};
// //     ==================>>> COMPLETED AL HUM DULLIAH  <<<==========================
