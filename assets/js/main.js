// Aufgabe 1 String-Methods .length Lev1_1 //

let firstName = "Rumpel"; // 6
let lastName = "Stielzchen"; // 10

console.log(firstName.length);
console.log(lastName.length);


let fullName = `${firstName} ${lastName}`

console.log(fullName); // Rumpel Stielzchen
console.log(fullName.length); // 17 (6 + Leerzeichen + 10)



// Aufgabe 2 String-Methods .index/.search Lev1_2 //

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log(txt.indexOf("h")); // 27
console.log(txt.search("Earth")); // 38
console.log(txt.search("Moon")); // -1 (das Wort gibt es nicht in der Zeichenkette)



// Aufgabe 3 String-Methods .search Lev1_3 //

var txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log(txt2.search(";")); // 34
console.log(txt2.search("green")); // 6
console.log(txt2.search("blue")); // -1 (greift nicht, da case sensivity)



// Aufgabe 4 String-Methods .replace Lev1_7 //

const text = "Sam is good at codingschool";

let text2 = text.replace("good at codingschool", "bad at school");
document.write(text2 + "<br>"); // Sam is bad at school

let text3 = text2.replace("Sam is bad", "Susi is good");
document.write(text3 + "<br>"); // Susi is good at school

let text4 = text3.replace("Susi", "Sam");
let text5 = text4.replace("school", "tennis");
document.write(text5 + "<br>"); // Sam is good at tennis


// Aufgabe 5 String-Methods .replace Lev1_8 //

const line = "Sam is going to codingschool";

let line2 = line.replace("codingschool", "school");
let line3 = (line2.toUpperCase());
document.write(line3 + "<br>"); // SAM IS GOING TO SCHOOL

let line4 = (line3.toLowerCase());
let line5 = line4.replace("to", "at");
document.write(line5 + "<br>"); // sam is going at school

let line6 = line3.replace("IS GOING TO", "is going to");
document.write(line6 + "<br>"); // SAM is going to SCHOOL

let line7 = line3.replace("SAM", "sam");
let line8 = line7.replace("SCHOOL", "school");
document.write(line8 + "<br>"); // sam IS GOING TO school

let line9 = line3.replace("SAM", "Sam");
let line10 = line9.replace("IS", "Is");
let line11 = line10.replace("GOING", "Going");
let line12 = line11.replace("TO", "To");
let line13 = line12.replace("SCHOOL", "School");
document.write(line13 + "<br>"); // Sam is Going To School



