(function () {
	
	var sentence = document.getElementById("inputtext")
	var button = document.getElementById("longestword")

	button.onclick = function () {
		var str = sentence.value;
		var arr = str.split(" ");
		console.log(arr);
	}

})();