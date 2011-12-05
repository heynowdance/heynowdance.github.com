$(document).ready(function() {
	$(".navigation").hover(
		function() { $(this).find("img").removeClass("hidden"); },
		function() { $(this).find("img").addClass("hidden"); }
	);
});