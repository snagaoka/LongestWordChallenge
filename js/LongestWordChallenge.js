(function () {
	
	var sentence = document.getElementById("inputtext")
	var button = document.getElementById("longestword")

	button.onclick = function () {
		var str = sentence.value;
		var arrayGroup = str.split(" ");
		console.log(arrayGroup);

		var arrayLength = arrayGroup.length;
		var longestWord = "";

		for (var i = 0; i < arrayLength; i++) {
			textLength = arrayGroup[i].length;
			console.log(arrayGroup[i].length);
			if (arrayGroup[i].length > longestWord.length) {
				longestWord = arrayGroup[i];
			}
		}

		console.log(longestWord);
		alert("The longest word in this sentence is " + longestWord + ".");
	}
	
})();