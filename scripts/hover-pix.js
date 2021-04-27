	$(document).ready(function(){ // takes two function for mouseenter and mouseleave
	    $(".gallery-item").hover(function(){
	        $(this).addClass("highlight"); //adds a class
	    }, function(){
	        $(this).removeClass("highlight"); //removes 
        });
	    $(".gallery-item-tall").hover(function(){
	        $(this).addClass("highlight"); //adds a class
	    }, function(){
	        $(this).removeClass("highlight"); //removes 
        });    });