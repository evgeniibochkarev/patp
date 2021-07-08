$( document ).ready(function() {
	$('.bus_anfas').on('click', function(){
		$($(this).parent()[0].children).each(function(i, e){
			$(e).removeClass('active');
		})
		$(this).addClass('active');
		$('#panelsStayOpen-collapseTwo').collapse('show');
		$('#schedule_route').focus();
		
		
		
		
		let destination = $('#schedule_route').offset().top - 70;
        $('html').animate({ scrollTop: destination }, 0);
		
		
		
        
	})
	
	

})

