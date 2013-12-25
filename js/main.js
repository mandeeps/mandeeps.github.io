function toggle(content) {
	var div = document.getElementById(content);
	if (div.style.display != 'block') {
    console.log('showing');
    div.style.display = "block";
  }
  
	else {
    console.log('hiding');
		div.style.display = "none";
	}
}
