
 	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$('#main_vipusk-number-plus-buttons-button-arrow-up').fadeIn();
			} else {
				$('#main_vipusk-number-plus-buttons-button-arrow-up').fadeOut();
			}
		});

		$('#main_vipusk-number-plus-buttons-button-arrow-up').click(function() {
 			$('body,html').animate({scrollTop:0},1500);
		});
	});