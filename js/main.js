(function ($) { // Función anónima autoinvocada que recibe jQuery como parámetro
	"use strict"; // Modo estricto de JavaScript para mejores prácticas y seguridad

	// Selección de elementos del DOM
	var nav = $('nav'); // Selecciona el elemento <nav>
	var navHeight = nav.outerHeight(); // Obtiene la altura del elemento <nav>

	// Evento de clic en el botón de menú responsive
	$('.navbar-toggler').on('click', function() {
		if( ! $('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce'); // Añade la clase 'navbar-reduce' a '#mainNav'
		}
	})

	// Preloader
	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader').delay(100).fadeOut('slow', function () {
				$(this).remove(); // Oculta y remueve el preloader después de la carga de la ventana
			});
		}
	});

	// Botón de regreso arriba
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow'); // Muestra el botón de regreso arriba si el desplazamiento es mayor a 100px
		} else {
			$('.back-to-top').fadeOut('slow'); // Oculta el botón de regreso arriba si el desplazamiento es menor a 100px
		}
	});

	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo'); // Desplazamiento suave hacia arriba al hacer clic
		return false;
	});

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0 // Desplazamiento suave hacia arriba al hacer clic en elementos con clase '.scrolltop-mf'
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({ // Inicialización del plugin de contador animado
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	// Desplazamiento suave al hacer clic en enlaces del menú de navegación
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5) // Ajuste para el desplazamiento suave
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Cierre del menú responsive al hacer clic en enlaces
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({ // Inicialización del plugin de scrollspy para resaltar elementos de la barra de navegación
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	// Cambio de apariencia de la barra de navegación al hacer scroll
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce'); // Añade la clase 'navbar-reduce' cuando el desplazamiento supera cierta cantidad de píxeles
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans'); // Añade la clase 'navbar-trans' cuando el desplazamiento es menor a cierta cantidad de píxeles
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo"); // Muestra el botón de regreso arriba cuando el desplazamiento es mayor a cierta cantidad de píxeles
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo"); // Oculta el botón de regreso arriba cuando el desplazamiento es menor a cierta cantidad de píxeles
		}
	});

	/*--/ Star Typed /--*/
	// Inicialización del plugin Typed para efecto de escritura automática
	if ($('.text-slider').length == 1) {
		var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	// Inicialización del plugin Owl Carousel para carrusel de testimonios
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery); // Fin de la función y pasando jQuery como parámetro
