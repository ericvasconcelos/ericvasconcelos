$(function () {

	$("html").niceScroll({
		cursorcolor: "#666",
		cursoropacitymin: 1
	});

	//Ancora
	// $(".navigation").find("a").("click", function(){
	// 	var alvo = $(this).attr("href").split("#").pop();
	// 	$("html, body").animate({scrollTop: $("#"+alvo).offset().top - 20 }, 1000);
	// 	return false;
	// });
	
	$("#main").load("ajax/sobre.html section");

	$(".navigation").find("a").on("click", function(e){
		e.preventDefault();
		var alvo = $(this).attr("href").split("#").pop();

		$("#main").load("ajax/"+ alvo +".html");
	});

});
