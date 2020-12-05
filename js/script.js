// Event pada saat link di klik
$('.page-scroll').on('click', function(e){

	// Ambil isi href
	var tujuan = $(this).attr('href');
	// Tangkap elemen ybs
	var eleTujuan = $(tujuan);

	$('html , body').animate({
		scrollTop: eleTujuan.offset().top - 50
	}, 1250, 'easeInOutBack');

	e.preventDefault();

});



// Paralax
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// Jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	// Portfolio
	if ( wScroll > $('.portfolio').offset().top - 400 ) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 500 * (i+1));
		});
	} else {
		$('.portfolio .thumbnail').removeClass('muncul');
	}

});

// About
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

