// TODO: Set my Javascript Free: https://www.gnu.org/licenses/agpl-3.0.html

const qualities = ["Wise", "Courageous", "Precise", "Authoritative", "Creative", "Premium", "Unprecedented", "Pivotal", "Hot", "Elite", "Essential", "Today", "Contemporary", "Genuine", "Significant", "Affirmative", "Compelling", "Passionate"];
const captionIAm = document.querySelector("#caption-i-am");

// functions

function chooseQualities() {
	// choose a random array word
	randInt = Math.floor(Math.random() * (qualities.length)); // return random number from 0 to provided array length

	//append quality to paragraph
	captionIAm.textContent = qualities[randInt];
}

function toggleDisplayMenu() {
	const classMenu = document.querySelector(".menu");
	const classMenuDisplay = classMenu.style.display; 
	if (classMenuDisplay == "block") {
		classMenu.style.display = "none";
	} else {
		classMenu.style.display = "block";
	}

}

// function calls

setInterval(chooseQualities, 200); // run function every 0.2 seconds

document.getElementById("year").innerHTML = new Date().getFullYear();
