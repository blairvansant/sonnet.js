var sonnet = document.getElementById("sonnet").innerHTML; 

console.log(sonnet);

var start = sonnet.indexOf("orphans");

if (start === 422) {
	console.log("hey, you were right. that never happens");
}




switch (start) {
	case 412 :
	console.log("hey, you were right. that never happens");
	case 411 :
	console.log("hey, you were wrong. that never happens");
	break;
	default:
	console.log("WTF");

}

var myArray = ["first element",2,false,"last element"];

for (var i = 100; i > 2; i /= 2) {
	console.log("current value:", i);
	myArray.push(i);

}
console.log("myArray" , myArray);








console.log(start);

var length = sonnet.length;

console.log(length);

var changeYuletide = sonnet.replace("winter", "yuletide");

console.log(changeYuletide);

var changeThe = sonnet.replace(/the/gi , "a large");

console.log(changeThe);

var newSonnet = sonnet;

console.log(newSonnet)

document.getElementById("sonnet").innerHTML = newSonnet;

console.log(newSonnet);













