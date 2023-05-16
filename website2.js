var result = 0;
const button100 = document.getElementById("button100");
const button101 = document.getElementById("button101");
const button102 = document.getElementById("button102");
const button103 = document.getElementById("button103");
const button104 = document.getElementById("button104");
const button105 = document.getElementById("button105");
const button106 = document.getElementById("button106");
const button107 = document.getElementById("button107");
const button108 = document.getElementById("button108");
const button109 = document.getElementById("button109");
function pieces() {
	var value1 = document.getElementById("1").value;
	var parvalue = document.getElementById("par1");
    parvalue.innerHTML = "wrong";
	if (value1 === "32") {
	parvalue.innerHTML = "correct";
	result++;
};
button100.removeEventListener("click", pieces);
}
function important() {
	var value2= document.getElementById("2").value;
	var parvalue2 = document.getElementById("par2");
    parvalue2.innerHTML = "wrong";
	if (value2 === "king") {
	parvalue2.innerHTML = "correct";
	result++;
};
if (value2 === "King") {
	parvalue2.innerHTML = "correct";
	result++;
};
if (value2 === "the king") {
	parvalue2.innerHTML = "correct";
	result++;
};
button101.removeEventListener("click", important);
}
function material() {
	var value3= document.getElementById("3").value;
	var parvalue3 = document.getElementById("par3");
    parvalue3.innerHTML = "wrong";
	if (value3 === "Rook") {
	parvalue3.innerHTML = "correct";
	result++;
};
if (value3 === "rook") {
	parvalue3.innerHTML = "correct";
	result++;
};
if (value3 === "the rook") {
	parvalue3.innerHTML = "correct";
	result++;
};
button102.removeEventListener("click", material);
}
function invent() {
	var value4= document.getElementById("4").value;
	var parvalue4 = document.getElementById("par4");
    parvalue4.innerHTML = "wrong";
	if (value4 === "india") {
	parvalue4.innerHTML = "correct";
	result++;
};
if (value4 === "India") {
	parvalue4.innerHTML = "correct";
	result++;
};
if (value4 === "the country of india") {
	parvalue4.innerHTML = "correct";
	result++;
};
button103.removeEventListener("click", invent);
}
function GM() {
	var value5= document.getElementById("5").value;
	var parvalue5= document.getElementById("par5");
    parvalue5.innerHTML = "wrong";
if ("2499" < value5) {
	parvalue5.innerHTML = "correct";
	result++;
};
button104.removeEventListener("click", GM);
}
function pawn() {
	var value6= document.getElementById("6").value;
	var parvalue6 = document.getElementById("par6");
    parvalue6.innerHTML = "wrong";
	if (value6 === "pawn") {
	parvalue6.innerHTML = "correct";
	result++;
};
if (value6 === "Pawn") {
	parvalue6.innerHTML = "correct";
	result++;
};
if (value6=== "the pawn") {
	parvalue6.innerHTML = "correct";
	result++;
};
button105.removeEventListener("click", pawn);
}
function chess() {
	var value7= document.getElementById("7").value;
	var parvalue7 = document.getElementById("par7");
    parvalue7.innerHTML = "wrong";
	if (value7 === "chess.com") {
	parvalue7.innerHTML = "correct";
	result++;
};
if (value7 === "Chess.com") {
	parvalue7.innerHTML = "correct";
	result++;
};
if (value7=== "CHESS.COM") {
	parvalue7.innerHTML = "correct";
	result++;
};
button106.removeEventListener("click", chess);
}
function magnus() {
	var value8= document.getElementById("8").value;
	var parvalue8 = document.getElementById("par8");
    parvalue8.innerHTML = "wrong";
	if (value8 === "magnus") {
	parvalue8.innerHTML = "correct";
	result++;
};
if (value8 === "Magnus") {
	parvalue8.innerHTML = "correct";
	result++;
};
if (value8=== "Magnus carlsen") {
	parvalue8.innerHTML = "correct";
	result++;
};
if (value8=== "magnus carlsen") {
	parvalue8.innerHTML = "correct";
	result++;
};
button107.removeEventListener("click", magnus);
}
function hikaru() {
	var value9= document.getElementById("9").value;
	var parvalue9 = document.getElementById("par9");
    parvalue9.innerHTML = "wrong";
	if (value9 === "Hikaru") {
	parvalue9.innerHTML = "correct";
	result++;
};
if (value9 === "hikaru") {
	parvalue9.innerHTML = "correct";
	result++;
};
if (value9 === "Hikaru Nakamaru") {
	parvalue9.innerHTML = "correct";
	result++;
};
if (value9 === "hikaru nakamaru") {
	parvalue9.innerHTML = "correct";
	result++;
};
button108.removeEventListener("click", hikaru);
}
function fork() {
	var value10= document.getElementById("10").value;
	var parvalue10 = document.getElementById("par10");
    parvalue10.innerHTML = "wrong";
	if (value10 === "Knight") {
	parvalue10.innerHTML = "correct";
	result++;
};
if (value10 === "knight") {
	parvalue10.innerHTML = "correct";
	result++;
};
if (value10 === "the knight") {
	parvalue10.innerHTML = "correct";
	result++;
};
if (value10 === "The knight") {
	parvalue10.innerHTML = "correct";
	result++;
};
button109.removeEventListener("click", fork);
}
function result3() {
    var result2 = document.getElementById("result2");
	result2.innerHTML = "Result: " + result + "/10";
	if (result === 10) {
	result2.innerHTML = "Result: " + "10/10 " + "<strong>FULL MARK</strong>" + " Amazing";
	};
}
button100.addEventListener("click", pieces);
button101.addEventListener("click", important);
button102.addEventListener("click", material);
button103.addEventListener("click", invent);
button104.addEventListener("click", GM);
button105.addEventListener("click", pawn);
button106.addEventListener("click", chess);
button107.addEventListener("click", magnus);
button108.addEventListener("click", hikaru);
button109.addEventListener("click", fork);
	