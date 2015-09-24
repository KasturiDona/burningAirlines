$( document ).ready( function () {
	$('#giphy').on('click', function () {
		$("#giphy").addClass('animate');
		remove();
	});
});

function remove() {
	setInterval("removegiph()", 2000);
}

function removegiph() {
	$("#giphy").removeClass('animate');
}