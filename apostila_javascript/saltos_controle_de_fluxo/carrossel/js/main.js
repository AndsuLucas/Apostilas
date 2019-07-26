(function(){
	'use strict';
	const carrossel    = document.querySelector(".carrossel");
	const carrosselImg = document.querySelector(".img-carrossel");
	const left         = document.querySelector(".left");
	const right        = document.querySelector(".right");
	const images       = [
		"1.jpeg", "2.jpeg", "3.jpeg"
	];

	var count = 0;

	function changeImg() {
		if (count > 2) {
			count = 0
		}
		if (count < 0) {
			count = 2
		}
		carrosselImg.setAttribute("src", "img/"+images[count]);
		
	}

	function passLeft() {
		count --;

		changeImg();
	}

	function passRight() {
		count ++;
		
		changeImg();
	}
	setInterval(function(){
		passRight();

	}, 3000)

	right.addEventListener("click", passRight);
	left.addEventListener("click", passLeft)


})();