function encode()
{
	var plain_text = document.getElementById("message").value;
	var cypher_text = [];
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	
	for(var idx=0; idx<plain_text.length; idx++)
	{
		input = alphabet.index0f(plain_text[idx]);
		if(input == -1 )
		{
			cypher_text.push(plain_text[idx]);
		}
		else
		{
			var coded = (input+13)%26;
			var letter = alphabet[coded];
			cypher_text.push(letters);
		}
	}
	document.getElementById("output").innerHTML = cypher_text.join("");
}