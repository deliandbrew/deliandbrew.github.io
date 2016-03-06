$(document).ready(function(){

 	var d = new Date();
	var theDay = d.getDay();
	var todaymsg = "";
	switch (theDay)
	{
		case 1:
		  todaymsg = "<p class=\"big\">It&rsquo;s Monday over here and we&rsquo;re open from 6am &ndash; 9pm.</p><ul><li>Sub special: <a href=\"#specials\">Curby 3 Style</a></li><li>Turkey special: <a href=\"#specials\">The Wake Up</a></li></ul>";
		  break;
		case 2:
		  todaymsg = "<p class=\"big\">It&rsquo;s Tuesday over here and we&rsquo;re open from 6am &ndash; 9pm.</p><ul><li>Sub special: <a href=\"#specials\">The Engine 7</a></li><li>Turkey special: <a href=\"#specials\">The Ragin Cajun</a></li></ul>";
		  break;
		case 3:
		  todaymsg = "<p class=\"big\">It&rsquo;s Wednesday over here and we&rsquo;re open from 6am &ndash; 9pm.</p><ul><li>Sub special: <a href=\"#specials\">The Rachel</a></li><li>Turkey special: <a href=\"#specials\">The Killer Keller</a></li></ul>";
		  break;
		case 4:
		  todaymsg = "<p class=\"big\">It&rsquo;s Thursday over here and we&rsquo;re open from 6am &ndash; 9pm.</p><ul><li>Sub special: <a href=\"#specials\">The O'Shea</a></li><li>Turkey special: <a href=\"#specials\">The Mardi Gras</a></li></ul>";
		  break;
		case 5:
		  todaymsg = "<p class=\"big\">It&rsquo;s Friday over here and we&rsquo;re open from 6am &ndash; 9pm.</p><ul><li>Sub special: <a href=\"#specials\">The Stugotz</a></li><li>Turkey special: <a href=\"#specials\">The Green Giant</a></li></ul>";
		  break;
		case 6:
		  todaymsg = "<p class=\"big\">It&rsquo;s Saturday over here and we&rsquo;re open from 8am &ndash; 9pm.</p>";
		  break;
		case 0:
		  todaymsg = "<p class=\"big\">It&rsquo;s Sunday over here and we&rsquo;re open from 9am &ndash; 7pm.</p>";
		  break;
	}

 	$("#hourstoday").html(todaymsg);

	$("a[href^=#]").click(function(event){
		event.preventDefault();
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		$('html, body').animate({scrollTop:target_top}, 1000);
	});
});
























