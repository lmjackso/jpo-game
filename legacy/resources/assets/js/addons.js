$(function(){
	
	// datepicker
	/*$("#Datepicker").datepicker({
		showOn: "button",
		buttonImage: "images/datepicker.png",
		buttonImageOnly: true
	});
	
	// slider
	$("#ageSlider").append("<div class='slider'></div>");
	$("#ageSlider label").append(" <span>18</span>");
	$("#ageSlider .slider" ).slider({
		range: "min",
		value: 27,
		min: 9,
		max: 99,
		slide: function(event, ui) {
			$("#Age").val(ui.value);
			$("#ageSlider label span").text(ui.value);
		}
	});
	$("#ageSlider label span").text($("#ageSlider .slider").slider("value") );*/
	
	// tooltip
    $("a.custom-tooltip").hover(function(e){
        this.tmptitle = this.title;
        this.title = "";
        $("body").append("<div id='custom-tooltip'>" + this.tmptitle + "<em></em></div>");
        $("#custom-tooltip").css("top", (e.pageY - 15 - $('#custom-tooltip').innerHeight()) + "px").css("left", (e.pageX - $('#custom-tooltip').innerWidth() / 2) + "px").fadeIn("fast");
    },function(e) {
        this.title = this.tmptitle;
        $("#custom-tooltip").remove();  
    });
});