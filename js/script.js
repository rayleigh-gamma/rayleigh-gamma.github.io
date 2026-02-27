document.getElementById('header-home').onclick = function() {
	let anchor = document.createElement('a');

	document.body.appendChild(anchor);
	anchor.style.display = 'none';
	anchor.href = 'index.html';
	anchor.click();
}

document.getElementById('header-my-music').onclick = function() {
	let anchor = document.createElement('a');

	document.body.appendChild(anchor);
	anchor.style.display = 'none';
	anchor.href = 'my-music.html';
	anchor.click();
}
