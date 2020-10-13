/* PRELOADER */
setTimeout(function(){
	$('.loader-bg').fadeToggle();
}, 2000);

/* IR ARRIBA */
$(document).ready(function(){
 
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
 
});

/* TYPED */
const typed = new Typed('.typed', {
    strings: [
        '<b>Juan Zamora</b>',
        '<b>Editor de vídeo</b>',
        '<b>Fotógrafo</b>',
        '<b>Diseñador web</b>',
        '<b>Ilustrador</b>'
    ],
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

/* SMOOTH SCROLL */
var scroll = new SmoothScroll('a[href*="#"]', {
	// Function. Custom easing pattern
	// If this is set to anything other than null, will override the easing option above
	customEasing: function (time) {

		// return <your formulate with time as a multiplier>

		// Example: easeInOut Quad
		return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

	}
});

/* SHOW BLANDAS */
$("#blandasshow").hide();
function MostrarBlandas(){
	let text = "";
	if($('#vermas1').text() === "+"){
		$("#blandasshow").show();
		text = "-";
	}else{
		$("#blandasshow").hide();
		text = "+";
	}

	$("#vermas1").html(text);

}

/* SHOW TECNICAS */
$("#tecnicasshow").hide();
function MostrarTecnicas(){
	let text = "";
	if($('#vermas2').text() === "+"){
		$("#tecnicasshow").show();
		text = "-";
	}else{
		$("#tecnicasshow").hide();
		text = "+";
	}

	$("#vermas2").html(text);

}

/* CAROUSEL */
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 770,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 1,
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 1050,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			  }
			}
		  ]
	});
});

/* PORTAFOLIO */
const grid = new Muuri('.grid', {
	layout: {
	    rounding: false,
	}
      });
      
      window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');
      
	// Agregué los Listener de los enlaces para filtrar por categoría.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach( (elemento) => {
	    elemento.addEventListener('click', (evento) => {
	        evento.preventDefault();
	        enlaces.forEach((enlace) => enlace.classList.remove('activo'));
	        evento.target.classList.add('activo');
      
	        const categoria = evento.target.innerHTML.toLowerCase();
	        categoria === 'todo' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
	    });
	});
      
	// Agregué un Listener para las imágenes.
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach((elemento) => {
      
	    elemento.addEventListener('click', () => {
	        const ruta = elemento.getAttribute('src');
	        const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
      
	        overlay.classList.add('activo');
	        document.querySelector('#overlay img').src = ruta;
	        document.querySelector('#overlay .descripcion').innerHTML = descripcion;
	    });
	});
      
	// Event Listener del botón de cerrar.
	document.querySelector('#btn-cerrar-popup').addEventListener('click',  () => {
	    overlay.classList.remove('activo');
	});
      
	//Event Listener del overlay
	overlay.addEventListener('click', (evento) => {
	    evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});
      });