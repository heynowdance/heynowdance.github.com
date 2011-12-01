$(document).ready(function() {
	$("#prev_season").hover(
		function() { $(this).children().show(); },
		function() { $(this).children().hide(); }
	);

	$("#next_season").hover(
		function() { $(this).children().show(); },
		function() { $(this).children().hide(); }
	);
});