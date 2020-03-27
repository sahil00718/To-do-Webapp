$("ul").on("click", "li" ,function(){
	$(this).toggleClass("selected");
});

$("ul").on("click","span",function(event){
	// alert("span clicked");
	event.stopPropagation();
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
});

$("input").keypress(function(event){
	if(event.which ===13){
		var todo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+todo+"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input").fadeToggle(700);
})