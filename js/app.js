$(document).ready( function(){

		$('.tab_link').on('click', function(e){
			
			e.preventDefault();

			var itemTabLink = $(this).closest('.tab_link'),
				contentItem = $('.tab_item'),
				itemPosition = itemTabLink.index();

			contentItem.eq( itemPosition ).add( itemTabLink ).addClass('active').siblings().removeClass('active');
		});




		$('.news_link').on('click', function(e){
			
			e.preventDefault();

			var itemNewsLink = $(this).closest('.news_link'),
				contentItem = $('.news_item'),
				itemPosition = itemNewsLink.index();

			contentItem.eq( itemPosition ).add( itemNewsLink ).addClass('active').siblings().removeClass('active');
		});




		$('.maps_button').on('click', function(e){
			
			e.preventDefault();

			var mapsActiveButton = $(this).closest('.maps_button'),
				wrapperPosition = mapsActiveButton.parents('.maps_wrapper').index();

			$('.maps_button').addClass('active');
			mapsActiveButton.removeClass('active');

			$('.maps_content').removeClass('active');
			$('.maps_content').eq(wrapperPosition).addClass('active');

		});



		$('.sm-button-menu').on('click', function(e){
			
			e.preventDefault();

			if ($('.sm-button-menu').hasClass('close')) {

				$('.sm-button-menu').removeClass('close');
				$('.sm-button-close').css('display', 'none');
				$('.sm-button-open').css('display', 'block');
				$('.menu').addClass('sd-hidden');
			}
			else {

				$('.sm-button-menu').addClass('close');
				$('.sm-button-close').css('display', 'block');
				$('.sm-button-open').css('display', 'none');
				$('.menu').removeClass('sd-hidden');
			}

		});

		


		var sliderSettings = {
			controls: true,
			randomStart: true,
			auto: true,
			tickerHover: true,
			slideWidth: 250,
			mode: 'horizontal',
			pager: false,
			minSlides: 1,
			maxSlides: 4,
			moveSlides: 1,
			slideMargin: 60
		};

		$('.slider_1').bxSlider(sliderSettings);
		$('.slider_2').bxSlider(sliderSettings);


		$('.slider_images').bxSlider({
			controls: false,
			auto: true,
			tickerHover: true,
			mode: 'horizontal'
		});

});