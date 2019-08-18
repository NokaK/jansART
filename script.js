// ჩამოსქროლვის დაწყება
$(document).ready(function() {
	$('#img1').click(function(){
		$('#page2').slideToggle("slow", function(){
		    if($('#page2').is(":visible")){
		        $("html, body").animate({scrollTop: $('#page2').offset().top},500);
		    }
		});
	});
	$("#span1").click(function() {
    $("#first-block").show(1000);
    $("#second-block,#third-block,#forth-block,#fifth-block,#last-block").hide(1000);
  	});
	$("#span2").click(function() {
    $("#second-block").show(1000);
    $("#first-block,#third-block,f#orth-block,#fifth-block,#last-block").hide(1000);
  	});
  	$("#span3").click(function() {
    $("#third-block").show(1000);
    $("#first-block,#second-block,#forth-block,#fifth-block,#last-block").hide(1000);
  	});
  	$("#span4").click(function() {
    $("#forth-block").show(1000);
    $("#first-block,#second-block,#third-block,#fifth-block,#last-block").hide(1000);
  	});
  	$("#span5").click(function() {
    $("#fifth-block").show(1000);
    $("#first-block,#second-block,#third-block,#forth-block,#last-block").hide(1000);
  	});
  	$("#burger1").click(function() {
    $("#msuqani").show(1000);
    $(".person,#magali").hide(1000);
  	});
  	$("#stafilo1").click(function() {
    $("#magali").show(1000);
    $(".person,#msuqani").hide(1000);
  	});
    $("#tren1").click(function() {
    $("#magali1").show(1000);
    $(".person1,#msuqani1").hide(1000);
    });
    $("#pad1").click(function() {
    $("#msuqani1").show(1000);
    $(".person1,#magali1").hide(1000);
    });
    $("#mta1").click(function() {
    $("#mtagif").show(1000);
    $(".person2,#sigaretigif").hide(1000);
    });
    $("#sigareti").click(function() {
    $("#sigaretigif").show(1000);
    $(".person2,#mtagif").hide(1000);
    });
    $("#eqimi1").click(function() {
    $("#eqimigif").show(1000);
    $(".person3,#gugligif").hide(1000);
    });
    $("#gugli1").click(function() {
    $("#gugligif").show(1000);
    $(".person3,#eqimigif").hide(1000);
    });
    $("#wyali1").click(function() {
    $("#wyaligif").show(1000);
    $(".person4,#ludigif").hide(1000);
    });
    $("#ludi1").click(function() {
    $("#ludigif").show(1000);
    $(".person3,#wyaligif").hide(1000);
    });
    $('#next').click(function() {
    $('.current').removeClass('current').hide()
        .next().show().addClass('current');
    if ($('.current').hasClass('last')) {
        $('#next').attr('disabled', true);
    }
    });
});

