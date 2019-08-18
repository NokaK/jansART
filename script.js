$(document).ready(function() {
	$('#img1').click(function(){
		$('#page2').slideToggle("slow", function(){
		    if($('#page2').is(":visible")){
		        $("html, body").animate({scrollTop: $('#page2').offset().top},500);
		    }
		});
	});
})