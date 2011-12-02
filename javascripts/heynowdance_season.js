$(document).ready(function() {
	$(".navigation").hover(
		function() { $(this).find("img").hide(); },
		function() { $(this).find("img").show(); }
	);
});