// JavaScript source code

$(function () {
	$(".draggable").each(
		function (index, value) {
			var topbar = document.createElement('div');
			topbar.className += 'topbar';
			this.insertBefore(topbar, this.firstChild);

			var closebutton = document.createElement('span');
			closebutton.className += 'closebutton';
			closebutton.innerHTML = 'X';

			var movehandle = document.createElement('span');
			movehandle.className += 'movehandle';

			topbar.appendChild(closebutton);
			topbar.appendChild(movehandle);
		}
	).draggable({
		scroll: false,
		stack: "div",
		containment: "#main_area"
	}).resizable({
		aspectRatio: true,
		containment: "#main_area"
	});

	$(".textbox").resizable({
		aspectRatio: false
	}).draggable({
		handle: ".movehandle",
	});

	$("span[class = closebutton]").click(
		function () {
			$(this).parent().parent().hide();
			event.stopPropagation();
		}
	);
});

var mainArea = document.getElementById("main_area");
var winWidth = mainArea.offsetWidth;
var winHeight = mainArea.offsetHeight;
$(window).on("load", function () {
	$(".draggable").not(".textbox").each(function () {
		var y = Math.floor(Math.random() * (winHeight- this.offsetHeight));
		var x = Math.floor(Math.random() * (winWidth - this.offsetWidth));
		$(this).delay(1000).animate({ top: y + "px", left: x + "px" });
	});
});
