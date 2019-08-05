var files = [["ACLS001.png","com.alsterdev.acls001"], ["ACLS002.png","com.alsterdev.acls002"]];

var currentInt;

slideshow();

function generateRandomNumber() {
	var min = 0;
	var max = files.length - 1;
	randInt = Math.floor(Math.random() * (max - min + 1)) + min;
	if (randInt == currentInt) {
		generateRandomNumber();
	}
}

function slideshow(){
	generateRandomNumber();
	currentInt = randInt;
	imgSrc = "WebResource/images/" + files[randInt][0];
	imgName = files[randInt][1];
	imgURL = "sileo://package/" + files[randInt][1];
	document.getElementById("slideshowImg").src = imgSrc;
	document.getElementById("slideshowURL").href = imgURL;
	
}

setInterval(slideshow, 8000);