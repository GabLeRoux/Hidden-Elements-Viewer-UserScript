// ==UserScript==
// @name        Hidden html objects shower
// @namespace   hs_
// @description Show and hide some hidden html objects
// @version     0.1a
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// ==/UserScript==

$(document).ready(function()
{
	hs_injectCSS();
	hs_appendSidebar();
	fix_hs_Sidebar_Height();
	hs_attach_handlers();
	hs_refresh();
});


/* CSS that will be used by the sidebar */
function hs_injectCSS()
{
	var newCSS =
	'<style id="hiddenShower" type="text/css">\
	#hs_list {\
		list-style: none;\
		margin:0;\
		padding:0;\
	}\
	#hs_list > li {\
		border-top: 1px solid #fff;\
		border-bottom: 1px solid #aaa;\
		padding: 5px;\
	}\
	#hs_list > li:first-child {\
		border-top: none;\
	}\
	#hs_list > li:last-child {\
		border-bottom: none;\
	}\
	#hs_sidebar_container\
	{\
		color: #000;\
		width: 300px;\
		float:left;\
		position: fixed;\
		left: 0;\
		top: 0;\
		border-right: 1px solid;\
		overflow: hidden;\
		-webkit-box-shadow: 5px 0px 5px -3px;\
		-moz-box-shadow: 5px 0px 5px -3px;\
		box-shadow: 5px 0px 5px -3px;\
		z-index: 100;\
		opacity: 0.9;\
		-webkit-opacity: 0.9;\
		-moz-opacity: 0.9;\
		background: #fff url(data:image/png;base64,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) repeat;\
	}\
	#hs_sidebar_container h1\
	{\
		text-align: center;\
		size: 18px;\
		color: black;\
		margin: 10px 0;\
		padding: 0;\
	}\
	#hs_sidebar_content {\
		overflow-y: scroll;\
		width: 322px;\
	}\
	.hs_btn {\
		-moz-transition: all 0.5s ease-in-out 0s;\
		background-repeat: repeat-x;\
		border-bottom: 1px solid rgba(0, 0, 0, 0.25);\
		border-radius: 10px 10px 10px 10px;\
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);\
		display: inline-block;\
		margin: 3px;\
		outline: 0 none;\
		position: relative;\
		text-decoration: none;\
		text-shadow: 0 1px 2px #FFFFFF;\
		font-size: 14px;\
		line-height: 1em;\
		padding: 9px 14px;\
	}\
	.hs_btn:hover {\
		box-shadow: 0 1px 5px #939393;\
		opacity: 0.8;\
		-moz-opacity: 0.8;\
		-webkit-opacity: 0.8;\
		text-shadow: 0 1px 2px #FFFFFF;\
	}\
	.hs_toggle {\
		background: url(data:image/png;base64,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) no-repeat;\
		display: block;\
		float: right;\
		height: 16px;\
		width: 32px;\
	}\
	.hs_toggle_hide {\
		background-position: bottom center;\
	}\
	.hs_toggle_hide:hover {\
		background-position: top center;\
	}\
	.hs_toggle_show {\
 		background-position: top center;\
	}\
	.hs_toggle_show:hover {\
		background-position: bottom center;\
	}\
	#hs_toggle_sidebar {\
		background: url(data:image/png;base64,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) no-repeat;\
	    background-position: right center;\
		width: 16px;\
		height: 32px;\
	    left: 293px;\
	    position: fixed;\
	    top: 10px;\
	    z-index: 1000;\
	}\
	#hs_toggle_sidebar:hover {\
		background-position: left center;\
	}\
	.hs_badge {\
		background-color: #999999;\
		border-radius: 9px 9px 9px 9px;\
    	padding: 1px 9px 2px;\
    	color: #FFFFFF;\
	    font-size: 10.998px;\
	    font-weight: bold;\
	    line-height: 14px;\
	    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\
	    vertical-align: baseline;\
	    white-space: nowrap;\
	}\
	.hs_red {\
		background-color: #B94A48 !important;\
	}\
	.hs_hidden_unhide {\
		width: 100% !important;\
		height: 100% !important;\
	}\
	.hs_opacity_unhide {\
		opacity: 1 !important;\
	}\
	.hs_display_unhide {\
		display: block !important;\
	}\
	.hs_visibility_unhide {\
		visibility: visible !important;\
	}\
	</style>';

	/* Let's add the css in the head tag ;) */
$('head').append(newCSS);

}

/* Adds the sidebar layout in the body of the page */
function hs_appendSidebar()
{
	var sidebarLayout =
	'<div id="hs_sidebar_container">\
		<div id="hs_sidebar_content">\
			<h1>Hidden Shower</h1>\
			<div align="center">\
				<a href="#" id="hs_refresh" class="hs_btn">Refresh</a>\
				<a href="#" id="hs_show_all" class="hs_btn">Show all</a>\
				<a href="#" id="hs_hide_all" class="hs_btn">Hide all</a>\
			</div>\
			<p>Hidden objects: <span id="hs_counter" class="hs_badge"></span></p>\
			<ul id="hs_list">\
			</ul>\
		</div>\
	</div>\
	<a href="#" id="hs_toggle_sidebar"></a>\
	';

	$('body').prepend(sidebarLayout);
}

/* Action to perform, todo: do someting with this */
function hs_hideOrShow(theButton, theVictim)
{
	theVictim.on("click", function(e)
	{
		e.preventDefault();
		alert("you clicked " + this)
	});
}

/* actions that will be written  */
function hs_attach_handlers()
{
	var sidebar = $('#hs_sidebar_container');
	var sidebarlength = sidebar.outerWidth();

	$("#hs_toggle_sidebar").on("click", function() {
	    // Prevent action while animating or when sidebar is hidden
	    if (sidebar.is(":animated")) {
	    	return false;
	    }
	    else {
	    	if (sidebar.is(":hidden"))
	    	{
	    		$(this).css({
	    			"background-position": "right"
	    		});
		    	$(this).animate({
		    		"left": "+=" + sidebarlength + "px"
		    	}, "slow");
		    	sidebar.animate({
		    		"margin-left": "+=" + sidebarlength + "px",
		    		opacity: "show"
		    	}, "slow");
		    }
		    else
		    {
		    	$(this).css({
	    			"background-position": "left"
	    		});
		    	$(this).animate({
		    		"left": "-=" + sidebarlength + "px"
		    	}, "slow");
		    	sidebar.animate({
		    		"margin-left": "-=" + sidebarlength + "px",
		    		opacity: "hide"
		    	}, "slow");
		    }
	    }
	});

	$("#hs_refresh").on("click", function(e)
	{
		e.preventDefault(e);
		hs_refresh();
	});
	
	$(".hs_hide").on("click", function(e)
	{
		e.preventDefault(e);
		hs_refresh();
	});

	$(".hs_show").on("click", function(e)
	{
		e.preventDefault(e);
		hs_refresh();
	});

	$("#hs_show_all").on("click", function(e)
	{
		e.preventDefault(e);
		hs_show_all();
	});

	$("#hs_hide_all").on("click", function(e)
	{
		e.preventDefault(e);
		hs_hide_all();
	});

}

function hs_isHidden()
{

}

function hs_refresh()
{
	hs_target = $('body *');
	var hiddenType = "";
	/* Counter */
	var hs_counter = hs_target.filter(function()
	{
		if ($(this).is(':hidden')) 
			$(this).addClass('hs_hidden');
		if ($(this).css('visibility') === 'hidden') 
			$(this).addClass('hs_visibility');
		if ($(this).css('display') === 'none') 
			$(this).addClass('hs_display');
		if ($(this).css('opacity') === '0') 
			$(this).addClass('hs_opacity');

		if ($(this).hasClass('hs_hidden') || $(this).hasClass('hs_visibility') || $(this).hasClass('hs_display') || $(this).hasClass('hs_opacity'))
			return true;
		else
			return false;
	})
	if (hs_counter.size() > 0)
	{
		$("#hs_counter").addClass("hs_red");
	}
	else {
		$("#hs_counter").removeClass("hs_red");
	}
	$("#hs_counter").html(hs_counter.size());

	/* List of elements */
	var result = "";
	hs_counter.each( function(index){
		
		var hs_classes = $(this).attr("class").split(' ');
		var hs_original_classes = [''];

		result +=	"<li>" + index + ": &lt;" + this.tagName.toLowerCase() + " ";
		
		if ($(this).attr("id") != null)
			result += "id='" + $(this).attr("id") + "' ";

		if (hs_classes != null)
		{
			var i = 0, j = 0;
			for (i; i < hs_classes.length; i++)
			{
				if (hs_classes[i] != 'hs_hidden' && hs_classes[i] != 'hs_visibility' && hs_classes[i] != 'hs_display' && hs_classes[i] != 'hs_opacity' && hs_classes[i] != 'hs_hidden_unhide' && hs_classes[i] != 'hs_visibility_unhide' && hs_classes[i] != 'hs_display_unhide' && hs_classes[i] != 'hs_opacity_unhide')
				{
					hs_original_classes[j] = hs_classes[i];
					j++;
				}
			}
			if (j > 0)
			{
				result += "class='";
				result += hs_original_classes;
				result += "'";
			}
		}
		
		result += 	"&gt";
		
		/* if objets are already visible */
		if($(this).is('.hs_hidden_unhide') || $(this).is('.hs_visibility_unhide')  || $(this).is('.hs_opacity_unhide') || $(this).is('.hs_display_unhide'))
			result += 	"<a href='#' class='hs_toggle hs_toggle_hide'></a>";
		else
			result += 	"<a href='#' class='hs_toggle hs_toggle_show'></a>";

		// result += 		"<ul>";
		// result += 			"<li>TagName: " + this.tagName + "</li>";
		// result +=			"<li>Id: " + $(this).attr("id") + "</li>";
		// result +=			"<li>Class: " + $(this).attr("class") + "</li>";
		// result +=			"<li>Index: " + $(this).index() + "</li>";
		// result +=		"</ul>";
		result +=	"</li>";
	});
	$("#hs_list").html(result);
}

/* Triggered by the show all button */
function hs_show_all()
{
	$('.hs_hidden').addClass("hs_hidden_unhide");
	$('.hs_visibility').addClass("hs_visibility_unhide");
	$('.hs_display').addClass("hs_display_unhide");
	$('.hs_opacity').addClass("hs_opacity_unhide");
	hs_refresh();
}

/* Triggered by the hide all button */
function hs_hide_all()
{
	$('.hs_hidden').removeClass("hs_hidden_unhide");
	$('.hs_visibility').removeClass("hs_visibility_unhide");
	$('.hs_display').removeClass("hs_display_unhide");
	$('.hs_opacity').removeClass("hs_opacity_unhide");
	hs_refresh();
}

function fix_hs_Sidebar_Height()
{
	$('#hs_sidebar_container').css("height", $(window).outerHeight());
	$('#hs_sidebar_content').css("height", $(window).outerHeight());
}


$(window).resize(function()
{
	fix_hs_Sidebar_Height();
})