$(document).ready(function(){
	$(".filter1").addClass("active-tab");
	
	// when a tab is pressed
	$(".filter1").click(function(){
		$(".filter1").addClass("active-tab");
		$(".filter2").removeClass("active-tab");
		$(".filter3").removeClass("active-tab");
	});
	
	$(".filter2").click(function(){
		$(".filter2").addClass("active-tab");
		$(".filter1").removeClass("active-tab");
		$(".filter3").removeClass("active-tab");
	});
	
	$(".filter3").click(function(){
		$(".filter3").addClass("active-tab");
		$(".filter2").removeClass("active-tab");
		$(".filter1").removeClass("active-tab");
	});
});