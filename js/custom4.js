// JavaScript Document

//Author Name: Saptarang
//Author URI: http://www.saptarang.org
//Themeforest: http://themeforest.net/user/saptarang?ref=saptarang
//Creation Date: 15th December, 2013
//Description: A default Javascript for Voyage Responsive Tourism Landing Page Template, Designed & Developed By Saptarang.
	
/* CUSTOM PARAMETERS */

/* ==================================  GLOBAL  ==================================== */

			var site_color = "92576b"; // This is global main color for your template.
			
			var dark_color = "3b3839" // This is the color used for dark blocks in the layout.
			
			var semi_dark_color = "f7bd5f" // This is color used for semi dark backgrounds. e.g. Section Title
			
			var light_color = "ede7e9" // This is the color used for light color backgrounds.
			
			var Heading_Font = "Roboto Slab"; // thats your special Heading font
			
			var Site_Font = "Asap"; // thats your special body content font
			
/* ================================  CONTACT PAGE  =================================== */
			
	/* SET CONTACT FORM SUCCESS MESSAGE */
	
			var submitMessage = "Your form has been submitted successfully.";
			
			var successParagraph = "We'll respond to your message within 24 hours. <br> Please call <b>123.456.789</b> for any urgent queries. Thank You!";
			
			var successBoxColor = "f9ffef"; // Background color for the success box
			
			var successBoxBorderStyle = "solid"; // Border Style  -  Example: solid, dotted, dashed, double
			
			var successBox_Border_Color = "bede8f"; // Border color for success box
			
			var textColor = "7a994c"; // text color for success box
			
/* ================================  REPLACE GOOGLE FONT CODE HERE  =================================== */

// Google Web Fonts
	WebFontConfig = {
		google: { families: [ 'Asap:400,700,400italic,700italic', 'Roboto+Slab:400,100,300,700:latin' ] }
	  };
	  (function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	  })();