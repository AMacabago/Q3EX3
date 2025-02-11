// enter button
function greet(name) {
	var name= document.getElementById('fname').value;

	document.getElementById('greeting').innerHTML= 'Welcome,' + name + '!';
}