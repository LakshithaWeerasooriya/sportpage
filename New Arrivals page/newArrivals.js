//Function to get option selected from pull down menu
function getSelectedValue(selectList){
	return selectList[selectList.selectedIndex].value;
}

//Function to change page background color based on user preference
function changeBgColor(formRef){
	var colorChoice = getSelectedValue(formRef.backgroundColors);
	if (colorChoice == "default"){
		document.querySelector(".uppersec").style.background = "linear-gradient(#0080f018, #024990), url(styles/backgroundImage/soccer-g290e9861e_1920.jpg) no-repeat";
		document.body.style.backgroundColor = "#024990";
	}else if (colorChoice == "yellow"){
		document.querySelector(".uppersec").style.background = "linear-gradient(#0080f018, #e3c940), url(styles/backgroundImage/soccer-g290e9861e_1920.jpg) no-repeat";
		document.body.style.backgroundColor = "#e3c940";
	}else if(colorChoice == "red"){
		document.querySelector(".uppersec").style.background = "linear-gradient(#0080f018, #cc2121), url(styles/backgroundImage/soccer-g290e9861e_1920.jpg) no-repeat";
		document.body.style.backgroundColor = "#cc2121";
	}else if(colorChoice == "grey"){
		document.querySelector(".uppersec").style.background = "linear-gradient(#0080f018, #808787), url(styles/backgroundImage/soccer-g290e9861e_1920.jpg) no-repeat";
		document.body.style.backgroundColor = "#808787";
	}
}

//Function to change page text color based on user preference
function changeTxtColor(formRef){
	var colorChoice = getSelectedValue(formRef.textColors);
	if (colorChoice == "default"){
		document.body.style.color = "#FFFFFF";
		document.getElementById("topic").style.color = "#FFFFFF";
		document.getElementById("info1").style.color = "#FFFFFF";
	}else if (colorChoice == "black"){
		document.body.style.color = "#000000";
		document.getElementById("topic").style.color = "#000000";
		document.getElementById("info1").style.color = "#000000";
	}else if(colorChoice == "green"){
		document.body.style.color = "#08500a";
		document.getElementById("topic").style.color = "#08500a";
		document.getElementById("info1").style.color = "#08500a";
	}else if(colorChoice == "cyan"){
		document.body.style.color = "#1bb8ac";
		document.getElementById("topic").style.color = "#1bb8ac";
		document.getElementById("info1").style.color = "#1bb8ac";
	}
}

//Functions to display thumbnail images with description
function displayShirt(){
	document.getElementById("largeImage").src = "newArrivalsImages/Shirt.png";
	document.getElementById("largeImage").alt = "Borussia Dortmund 2019/20 Away Shirt image";
	document.getElementById("topic").innerHTML = "Borussia Dortmund 2019/20 Away Shirt";
	document.getElementById("info").innerHTML = "Borussia Dortmund install some style of steel for"
	+ ' the new season as PUMA launch their 2019/20 away shirt under the "Men of Steel"'
	+ " slogan. The design is inspired by steel, which has characterized the city of"
	+ " Dortmund for over a hundred years since the mid-19th century."
	+ " That's the history bit out of the way now, which is always a nice touch but"
	+ " ultimately an excuse to mix up aesthetic and create a stunning football shirt,"
	+ " and that's what we've got here. By way of an homage to steel, the shirt is"
	+ " dominated by shades of black, grey and silver. The broad vertical stripes have"
	+ " been kept black, with a black and grey graphic now visible between them. The"
	+ " logos of PUMA and Evonik and the two formstrips on the shoulders have been kept"
	+ " in striking silver, while the sole dash of yellow comes from the club emblem on  the chest.";
}

function displayShoes(){
	document.getElementById("largeImage").src = "newArrivalsImages/Shoes.png";
	document.getElementById("largeImage").alt = "Nike LeBron 19 image";
	document.getElementById("topic").innerHTML = "Nike LeBron 19";
	document.getElementById("info").innerHTML = "The Nike LeBron 19 “Christmas” is a special Christmas-inspired"
	+ " colorway of LeBron James’s nineteenth signature shoe. The Nike LeBron 19, inspired by the Nike LeBron"
	+ " 9, is a high performance basketball shoe that was worn by the basketball superstar during the 2021-2022"
	+ " NBA season. On the “Christmas,” the shoe is treated to a festive makeover that includes a teal-colored"
	+ " textile upper base contrasted with a red Swoosh wrapped in Christmas lights. The shoe’s Flywire cables"
	+ " and TPU “wings” provide the wearer with a lockdown fit that inspires confidence when making hard cuts"
	+ " and starts and stops on the basketball court. An interior sleeve ensures a snug-yet-comfortable fit."
	+ " The speckled midsole rides above Max Air bubbles in the forefoot and heel. Release date: January 4, 2022.";
}

function displayGloves(){
	document.getElementById("largeImage").src = "newArrivalsImages/Gloves.png";
	document.getElementById("largeImage").alt = "MASURI E Line Pro Batting Gloves image";
	document.getElementById("topic").innerHTML = "MASURI E Line Pro Batting Gloves";
	document.getElementById("info").innerHTML = "The MASURI batting glove range brings protection to areas"
	+ " that have never been protected before safeguarding you against the balls you can't plan for."
	+ " A modern take on the traditional sausage finger construction favoured by professional players globally."
	+ " Replacing original cotton stuffing filling with advanced Masuri PRO FOAM technology including,"
	+ " 1 x THUMB CLAW - Reinforced PRO FOAM that hooks around the tip of the thumb to offer greater protection"
	+ " 4 x WRIST BARS - Reinforced PRO FOAM that protects both the radius & ulna bones in the wrist. Integrated into the wristband"
	+ " 2 x META SHIELD - Reinforced PRO FOAM providing targeted and increased protection of the metacarpal knuckle."
	+ " Integrated within the glove (over the index finger of the bottom hand and little finger in the top hand) without impeding grip";
}

function displayBadmintonRct(){
	document.getElementById("largeImage").src = "newArrivalsImages/BadmintonRct.png";
	document.getElementById("largeImage").alt = "Yonex Nanoflare 800LT image";
	document.getElementById("topic").innerHTML = "Yonex Nanoflare 800LT";
	document.getElementById("info").innerHTML = " Let’s start with Yonex Nanoflare 800 which holds first" 
	+ " position in the list. Yonex Nanoflare 800 is placed within the top position as it provides impressive"
	+ " speed to support aggressive level players. Yonex badminton racquets are embedded with razor frame"
	+ " technology which helps in the reduction of air resistance by 9%. Moreover, these rackets are designed"
	+ " with an ultra-slim shaft which enables to form them aerodynamic in nature. But in this badminton racket,"
	+ " much more as compared to the majority of the rackets. Nanoflare 800 is a lightweight (Head lightweight)"
	+ " racquet 80-83 grams and recommended string for this racket is about 25-28 lbs.The head of the Yonex"
	+ " Nanoflare 800 is formed with an elastic material such as H.M Graphite + HMG + M40X which makes it best"
	+ " for a user-friendly experience.";
}

function displayFootBall(){
	document.getElementById("largeImage").src = "newArrivalsImages/FootBall.png";
	document.getElementById("largeImage").alt = "NCAA VIVIDO Match Soccer Ball image";
	document.getElementById("topic").innerHTML = "NCAA VIVIDO Match Soccer Ball";
	document.getElementById("info").innerHTML = "A clear vision of your competition delivered in a"
	+ " 20-panel construction with geometric striking zones. The Wilson NCAA Vivido Soccer ball is built for"
	+ " NCAA competition as the official soccer ball of the Men's and Women's NCAA College Cup Championships."
	+ " Using Visual spin technology and a cover constructed for precise control this durable soccer ball is"
	+ " ready for elite competition. See the Vivido and track its movement from across the field with a clear vision.";
}

