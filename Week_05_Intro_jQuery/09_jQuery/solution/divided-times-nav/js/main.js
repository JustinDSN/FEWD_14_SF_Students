$(document).ready(function(){
		
	// International Link
	$('#primary-nav .international').on('click', function(e){
		e.preventDefault();
		$('#primary-nav .international').siblings().removeClass('active');
		$('#primary-nav .international').toggleClass('active');
		if($('#primary-nav .international').hasClass('active')) {
			if($('#slide-down').hasClass('open')) {
				$('#slide-down .drop.open').hide().removeClass('open');
				$('.drop.international').show().addClass('open');
			} else {
				$('#slide-down .drop').hide();
				$('.drop.international').show().addClass('open');
				$('#slide-down').slideDown(150).addClass('open');			
			}
		} else {
			$('#slide-down').slideUp(150).removeClass('open');
		}
	});
		
	// Politics Link
	$('#primary-nav .politics').on('click', function(e){
		e.preventDefault();
		$('#primary-nav .politics').siblings().removeClass('active');
		$('#primary-nav .politics').toggleClass('active');
		if($('#primary-nav .politics').hasClass('active')) {
			if($('#slide-down').hasClass('open')) {
				$('#slide-down .drop.open').hide().removeClass('open');
				$('.drop.politics').show().addClass('open');
			} else {
				$('#slide-down .drop').hide();
				$('.drop.politics').show().addClass('open');
				$('#slide-down').slideDown(150).addClass('open');			
			}
		} else {
			$('#slide-down').slideUp(150).removeClass('open');
		}
	});
		
	// Business Link
	$('#primary-nav .business').on('click', function(e){
		e.preventDefault();
		$('#primary-nav .business').siblings().removeClass('active');
		$('#primary-nav .business').toggleClass('active');
		if($('#primary-nav .business').hasClass('active')) {
			if($('#slide-down').hasClass('open')) {
				$('#slide-down .drop.open').hide().removeClass('open');
				$('.drop.business').show().addClass('open');
			} else {
				$('#slide-down .drop').hide();
				$('.drop.business').show().addClass('open');
				$('#slide-down').slideDown(150).addClass('open');			
			}
		} else {
			$('#slide-down').slideUp(150).removeClass('open');
		}
	});
		
	// Technology Link
	$('#primary-nav .technology').on('click', function(e){
		e.preventDefault();
		$('#primary-nav .technology').siblings().removeClass('active');
		$('#primary-nav .technology').toggleClass('active');
		if($('#primary-nav .technology').hasClass('active')) {
			if($('#slide-down').hasClass('open')) {
				$('#slide-down .drop.open').hide().removeClass('open');
				$('.drop.technology').show().addClass('open');
			} else {
				$('#slide-down .drop').hide();
				$('.drop.technology').show().addClass('open');
				$('#slide-down').slideDown(150).addClass('open');			
			}
		} else {
			$('#slide-down').slideUp(150).removeClass('open');
		}
	});
		
	// Culture Link
	$('#primary-nav .culture').on('click', function(e){
		e.preventDefault();
		$('#primary-nav .culture').siblings().removeClass('active');
		$('#primary-nav .culture').toggleClass('active');
		if($('#primary-nav .culture').hasClass('active')) {
			if($('#slide-down').hasClass('open')) {
				$('#slide-down .drop.open').hide().removeClass('open');
				$('.drop.culture').show().addClass('open');
			} else {
				$('#slide-down .drop').hide();
				$('.drop.culture').show().addClass('open');
				$('#slide-down').slideDown(150).addClass('open');			
			}
		} else {
			$('#slide-down').slideUp(150).removeClass('open');
		}
	});
		
	// Blogs Link
	$('#primary-nav .blogs').on('click', function(e){
		e.preventDefault();
		$('#primary-nav .blogs').siblings().removeClass('active');
		$('#primary-nav .blogs').toggleClass('active');
		if($('#primary-nav .blogs').hasClass('active')) {
			if($('#slide-down').hasClass('open')) {
				$('#slide-down .drop.open').hide().removeClass('open');
				$('.drop.blogs').show().addClass('open');
			} else {
				$('#slide-down .drop').hide();
				$('.drop.blogs').show().addClass('open');
				$('#slide-down').slideDown(150).addClass('open');			
			}
		} else {
			$('#slide-down').slideUp(150).removeClass('open');
		}
	});
		
});