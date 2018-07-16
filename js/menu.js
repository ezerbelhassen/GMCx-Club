  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBDeBtQNcG6n8IF78JqF6AZse4u8tV4UcA",
    authDomain: "gmcx-85d79.firebaseapp.com",
    databaseURL: "https://gmcx-85d79.firebaseio.com",
    projectId: "gmcx-85d79",
    storageBucket: "gmcx-85d79.appspot.com",
    messagingSenderId: "836287354191"
  };
  firebase.initializeApp(config);

/* ---- FLy our Section For Aria Onepage HTML Template --- */

jQuery(document).ready(function($){
	var $lateral_menu_trigger = $('.nav-trigger'),
		$content_wrapper = $('.main');

	//open-close lateral menu clicking on the menu icon
	$lateral_menu_trigger.on('click', function(event){
		event.preventDefault();

		$lateral_menu_trigger.toggleClass('is-active');
		$content_wrapper.toggleClass('is-active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
			$('body').toggleClass('overflow-hidden');
		});
		$('#ar-about').toggleClass('is-active');

		//check if transitions are not supported - i.e. in IE9
		if($('html').hasClass('no-csstransitions')) {
			$('body').toggleClass('overflow-hidden');
		}
	});

	//close lateral menu clicking outside the menu itself
	$content_wrapper.on('mouseover', function(event){
		if( !$(event.target).is('.nav-trigger, .nav-trigger span') ) {
			$lateral_menu_trigger.removeClass('is-active');
			$content_wrapper.removeClass('is-active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
			$('#ar-about').removeClass('is-active');
			//check if transitions are not supported
			if($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('overflow-hidden');
			}
		}
	});
});
