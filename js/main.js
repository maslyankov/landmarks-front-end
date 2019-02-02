$(document).ready(function(){
	$('#nav-icon').click(function(){
    $(this).toggleClass('open');
		$('.secondary-nav').toggleClass('is-visible');
	});
});
