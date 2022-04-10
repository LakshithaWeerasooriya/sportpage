timeLeft = 60;
var t=0;
setTimeout(countdown, 1000);
function countdown() {

	if (timeLeft > 0) {
		t++;
		timeLeft--;
		document.getElementById('seconds').innerHTML = String( timeLeft );
	setTimeout(countdown, 1000);
	}
	if(t>60){
		viewresult();
	}
};
function viewresult(){
 getRadioValue()
 document.getElementById('bdy').style.visibility="hidden";
 document.getElementById('score').style.visibility="visible";
}
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");

var sticky = header.offsetTop;
function myFunction() {
 if (window.pageYOffset > sticky) {
	header.classList.add("sticky");
 } else {
	header.classList.remove("sticky");
 }
}
function getRadioValue() {
 total1 = 0;
 totall = 0;
 for(var i = 1; i <= 10; i++) {
	var radiosName = document.getElementsByName('A'+i);
	for(var j = 0; j < radiosName.length; j++) {
		var radiosValue = radiosName[j];
 if(radiosValue.value == "correct" && radiosValue.checked)
 {
 total1++;
 }
 totall=10-total1;
 }

 }
 f(total1,totall);
}
function f(a,b) {
 console.log(a,b)
 var score = a*2-b;
 if(score>=15){
	document.getElementById('bb').style.background="green";
 }
 else if(score>=10){
	document.getElementById('bb').style.background="#e3c940";
 }
 else{
	document.getElementById('bb').style.background="#cc2121";
 }
 var str = "Correct Answers :" + a +" <br> Incorrect Answers : "
 + b + "<br>Marks :" + score +"<br>Timing : "+ t;
 document.getElementById('text').innerHTML = str;
}
