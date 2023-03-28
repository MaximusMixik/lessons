
document.addEventListener("click", function (e) {
	const targetElement = e.target;

	if (targetElement.closest('.header__burger')) {
		document.documentElement.classList.toggle('active');
		e.preventDefault();
	}

})


const swiper = new Swiper('.swiper', {
	loop: true,
	speed: 800,
		
	 
	  effect: 'fade',
  fadeEffect: {
    crossFade: true
	},
	 autoplay: {
		 delay: 5000,
	
 },

  pagination: {
		el: '.swiper-pagination',
		type:'fraction',
  },
});



