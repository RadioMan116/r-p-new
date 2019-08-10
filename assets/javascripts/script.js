$(document).ready(function () {

	$(".main a").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});

	$("#call").on("click", function (event) {
		document.getElementById("myForm").style.display = "block";
	});

	var swiper = new Swiper('.right .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		effect: 'slide',
		// direction: 'vertical',
		pagination: {
			el: '.right .swiper-pagination'
		},
		navigation: {

			nextEl: '.right .swiper-button-next',
			prevEl: '.right .swiper-button-prev',
		},
	});
	var swiper2 = new Swiper('.work-examples .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		pagination: {
			el: '.work-examples .swiper-pagination'
		},
		navigation: {

			nextEl: '.work-examples .swiper-button-next',
			prevEl: '.work-examples .swiper-button-prev',
		},
	});
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 6,
		allowTouchMove: false,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		allowTouchMove: false,
		// navigation: {
		// 	nextEl: '.gallery-top .swiper-button-next',
		// 	prevEl: '.gallery-top .swiper-button-prev',
		// },
		thumbs: {
			swiper: galleryThumbs
		}
	});
	var swiper = new Swiper('.services__children-container', {
		effect: 'cube',
		grabCursor: true,
		cubeEffect: {
			shadow: true,
			slideShadows: true,
			shadowOffset: 20,
			shadowScale: 0.94,
		},
		navigation: {

			nextEl: '.services .swiper-button-next',
			prevEl: '.services .swiper-button-prev',
		},
		// autoplay: {
		// 	delay: 3500,
		// 	disableOnInteraction: true,
		// },
		// pagination: {
		// 	el: '.swiper-pagination',
		// },
	});

	$('#myForm form').on('submit', function () {

		var _form = $(this);


		$.post('/send.php', _form.serialize(), function (data) {


			if (data.success) {

				alert('OK');

				_form.find('input[type="text"],input[type="tel"]').val('');

			} else {

				alert('ERROR');

			}

		}, 'json');

		return false;
	});

	var token = '2025232371.1677ed0.ade052bc379842c09ee22809a5e84d21',
		num_photos = 10;

	$.ajax({
		url: 'https://api.instagram.com/v1/users/self/media/recent',
		dataType: 'jsonp',
		type: 'GET',
		data: {
			access_token: token,
			count: num_photos
		},
		success: function (data) {
			console.log(data);
			for (x in data.data) {
				$('#rudr_instafeed .swiper-wrapper').append('<div class="swiper-slide"><a data-fancybox="photo" href="' + data.data[x].images.standard_resolution.url + '"><img src="' + data.data[x].images.thumbnail.url + '"></a></div>');
				var swiper5 = new Swiper('#rudr_instafeed.swiper-container', {
					slidesPerView: 5,
					spaceBetween: 0,
					pagination: {
						el: '#rudr_instafeed .swiper-pagination'
					},
					navigation: {

						nextEl: '#rudr_instafeed .swiper-button-next',
						prevEl: '#rudr_instafeed .swiper-button-prev',
					},
				});
			}
		},
		error: function (data) {
			console.log(data);
		}
	});

});
