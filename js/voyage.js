// JavaScript Document

//Author Name: Saptarang
//Author URI: http://www.saptarang.org
//Themeforest: http://themeforest.net/user/saptarang?ref=saptarang
//Creation Date: 15th December, 2013
//Description: A default Javascript for Voyage Tourism Responsive Landing Page Template, Designed & Developed By Saptarang.

$(document).ready(function() {
	
	// Global Color
	$('head style').append('h1, h2, h3, h4, h5, h6  {font-family:"'+Heading_Font+'"; } html, body, div, p, table, tr, td, th, tbody, tfoot, ul, li, ol, dl, dd, dt, fieldset, blockquote, cite, input, select, textarea, button, a, section, article, aside, header, footer, nav,a.carousel-control {font-family:"'+Site_Font+'"; }  #top, .pic_box:hover h3, #copyright, h3.section-title, input.btn-custom, a.btn-custom {background-color:#'+site_color+';} #headline, #location, .panel-default > .panel-heading a span, #imptips, #footer, #contact,.navbar, #quotes .carousel-inner .item blockquote cite span, #partners  {background-color:#'+dark_color+';} #facilities, #itinerary, #quotes {background-color:#'+light_color+';}   a, a:hover, .unordered-list li:before, .grid li figcaption h5 {color:#'+site_color+';} .panel-heading h4 a, #subscribe, #home .carousel-caption h3, a.top  {background-color:#'+semi_dark_color+';}  #headline i, #location i, #imptips i, #quotes .quote-box i.fa-quote-right, #contact i, #facilities i {color:#'+semi_dark_color+'} #location iframe + small a, #location iframe + small a * {color:#'+site_color+';} h3, h5, #home nav li a:hover {color:#'+dark_color+';}  #top {border-color:#'+dark_color+';} ::selection {background-color:#'+dark_color+'; color:#fff;} ::-moz-selection {background-color:#'+dark_color+'; color:#fff;} ');
	
	// Carousel
	function captionReset() {
			$('.carousel .active').each(function() {
					$(this).find('.carousel-caption h3').animate({marginLeft:'25.250em', opacity:'0'}, 200);	
					$(this).find('.carousel-caption h6').animate({marginLeft:'-25.250em', opacity:'0'}, 200);		
			});
	}
	function carouselCustom() {
			$('.carousel .active').each(function() {
				$(this).find('.carousel-caption h3, .carousel-caption h6').animate({marginLeft:'0', opacity:'1'}, 400);	
				$(this).find('.carousel-caption h6').animate({marginLeft:'0', opacity:'1'}, 400);	
			});
	}
	// Set First Slide Caption to Transparent
	$('.carousel-caption h3, .carousel-caption h6').css("opacity", "0");
	$('#home .carousel-caption h3').after('<br />');
	
	// first slide show
	carouselCustom();
	
	$('#image-slider').bind('slide.bs.carousel', function (e) {
		captionReset();
	});
	$('#image-slider').bind('slid.bs.carousel', function (e) {
		carouselCustom();
	});
	
	// Quotes Arrow
	$('#quotes blockquote').before('<i class="fa fa-quote-right"></i>');
	$('#quotes blockquote').append('<span class="arrow"></span>');

	
	// Fixed Top
	$(window).scroll(function() {
		
		if ($(window).scrollTop() > 1000) { 
			$('a.top').fadeIn('slow'); 
		} else { 
			$('a.top').fadeOut('slow');
		}
		
	});

	//page Scroll
	$('nav a[href^=#], a.top[href^=#]').click(function() {
			$('html,body').animate({
            scrollTop: $(this.hash).offset().top - 110},
            1000);	
			event.preventDefault();
	});
	// Tooltip
	$('a.tips').tooltip();
	
// Subscription Form Validation
	$('#subscribeForm').submit(function() {
		if($('#emailSubscribe').val() != "") {
			var subEmail = $('#emailSubscribe').val();	
			 if(subEmail.indexOf('@') == -1 || subEmail.indexOf('.') == -1) {
				  $('#subscribeForm')
				  .append('<div class="alert alert-danger fade in">Please enter valid email address!</div>');
				  $('#subscribeForm').find('.alert').animate({ marginTop:'15px', opacity:'1'}, 300);
				  setTimeout(function() {
					  $('#subscribeForm').find('.alert').animate({ marginTop:'-10px', opacity:'0'}, 300);
				  }, 3000);
				  setTimeout(function() {
					  $('#subscribeForm').find('.alert').remove();
				  }, 3300);
			  } else {
				  $('#subscribeForm')
				  .append('<div class="alert alert-success fade in"><strong>Thank You!</strong> Your email address has been added in our list.</div>');
				 $('#subscribeForm').find('.alert').animate({ marginTop:'15px', opacity:'1'}, 300);
				  setTimeout(function() {
					  $('#subscribeForm').find('.alert').animate({ marginTop:'-10px', opacity:'0'}, 300);
				  }, 3000);
				  setTimeout(function() {
					  $('#subscribeForm').find('.alert').remove();
				  }, 3300);
			  }
		} else {
			  $('#subscribeForm')
			  .append('<div class="alert alert-danger">Please enter your email address!</div>');
			  $('#subscribeForm').find('.alert').animate({ marginTop:'15px', opacity:'1'}, 300);
				  setTimeout(function() {
					  $('#subscribeForm').find('.alert').animate({ marginTop:'-10px', opacity:'0'}, 300);
				  }, 3000);
				  setTimeout(function() {
					  $('#subscribeForm').find('.alert').remove();
				  }, 3300);
			
		}
		 return false;
	});	
	
	// Contact Form
				 $('.loader').hide();
				 $("input, textarea").focus(function() {
					$(this).prev("label").hide();
					$(this).prev().prev("label").hide();	 		 	
				});
				 
				$("#contact_form").submit(function() {
						  // validate and process form here
						  var name = $("#name").val();
								if (name == "") {
								$('#name').addClass('reqfld');
								$('<span class="error" style="display:none; margin-top:0px;">Required!</span>').insertBefore('#name').fadeIn(400);
								$("#name").focus(function() {  $('#name').removeClass('reqfld');  $(this).prev().fadeOut(400);});
								return false;
						  } 
							
						  var phone = $("#phone").val();
								if (phone == "") {
								$('#phone').addClass('reqfld');
								$('<span class="error" style="display:none;">Required!</span>').insertBefore('#phone').fadeIn(400);
								$("#phone").focus(function() {  $('#phone').removeClass('reqfld');  $(this).prev().fadeOut(400);});
								return false;
						  }
						  
						  var email = $("#email").val();
						  if (email == "") {
								$('#email').addClass('reqfld');
								$('<span class="error" style="display:none;">Required!</span>').insertBefore('#email').fadeIn(400);
								$("#email").focus(function() {  $('#email').removeClass('reqfld');  $(this).prev().fadeOut(400);});
								return false;
						   } else if(email.indexOf('@') == -1 || email.indexOf('.') == -1) {
								$('#email').addClass('reqfld');
								$('<span class="error" style="display:none;">Invalid Email Address!</span>').insertBefore('#email').fadeIn(400);
								$("#email").focus(function() {  $('#email').removeClass('reqfld');  $(this).prev().fadeOut(400);});
								return false;
						  }
						  
						  var comment = $("#comment").val();
								if (comment == "") {
								$('#comment').addClass('reqfld');
								$('<span class="error" style="display:none;">Required!</span>').insertBefore('#comment').fadeIn(400);
								$("#comment").focus(function() {  $('#comment').removeClass('reqfld');  $(this).prev().fadeOut(400);});
								return false;
						  }
						  
						  $('#contact_form').animate({opacity:'0.3'}, 500);
						  
						  var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone + '&comment=' + comment;
						  //alert (dataString);return false;
						  $.ajax({
							type: "POST",
							url: "form/contact.php",
							data: dataString,
							success: function() {
							  $("#contact_form").animate({opacity:'1'}, 500);
							  $('.loader').hide();
							  $("<div id='success' class='alert alert-success' style='border:#"+successBox_Border_Color+" 1px "+successBoxBorderStyle+"; background:#"+successBoxColor+";' ></div>").insertAfter('#contact_form');
							  $('#contact_form').slideUp(300);
							  $('#success').html("<h5 style='color:#"+textColor+";'>"+submitMessage+"</h5><p style='color:#"+textColor+";'>"+successParagraph+"</p>")
							  .hide().delay(300)
							  .fadeIn(1500);
							}
						  });
						  return false;
				});
	
			// Content Effects
			new cbpScroller(document.getElementById('cbp-so-scroller'));
				
				
});
