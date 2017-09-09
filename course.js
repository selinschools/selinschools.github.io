var left = document.getElementById('left');
var right = document.getElementById('right');
var wrap = document.getElementById('wrap');
var margin = 0;
var progress = document.getElementById('progress');
var value = 0;
var titleWrap = document.getElementById('title-wrap');
var title = 0;

left.onclick = function() {
	if (margin >= 0) {
		margin = -800;
		value = 380;
		title = -76;
	} else {
		margin += 400;
		value -= 190;
		title += 38;
	}
	wrap.style.marginLeft = margin + 'px';
	progress.style.marginLeft = value + 'px';
	titleWrap.style.marginTop = title + 'px';
}

right.onclick = function() {
	if (margin <= -800) {
		margin = 0;
		value = 0;
		title = 0;
	} else {
		margin -= 400;
		value += 190;
		title -= 38;
	}
	wrap.style.marginLeft = margin + 'px';
	progress.style.marginLeft = value + 'px';
	titleWrap.style.marginTop = title + 'px';
}