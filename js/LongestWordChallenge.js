(function () {
	
	var sentence = document.getElementById("input_text")
	var button = document.getElementById("longest_word")

	button.onclick = function () {
		var str = sentence.value;
		var arrayGroup = str.split(" ");
		var longestWord = "";
		// console.log(arrayGroup);

		for (var i = 0; i < arrayGroup.length; i++) {
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