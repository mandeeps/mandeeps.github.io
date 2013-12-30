function toggle(content) {
	var div = document.getElementById(content);
	if (div.style.display != 'block') {
    div.style.display = "block";
  }
  
	else {
		div.style.display = "none";
	}
}
