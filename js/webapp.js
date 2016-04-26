$(function(){
	<!--调用Luara-->
	document.getElementById('button1').focus();
	var wid=document.body.clientWidth;
	if (wid>2000) {
	    
	$(".box").luara({width:"2560",height:"1440",interval:5000,selected:"seleted",
		deriction:"left"});
		$("#img2").css("width","535px");
	    $("#img2").css("height","201px");
	    $("#img1").css("width","535px");
	    $("#img1").css("height","201px");
	    $("#info").css("marginTop","-300px");
	    $("#info2").css("marginTop","-300px");
	}
	else if (wid<1400) {
		$(".box").luara({width:"854",height:"480",interval:5000,selected:"seleted",
	    	deriction:"left"});
		$("#img2").css("width","357px");  //"285px"
	    $("#img2").css("height","134px");
	    $("#img1").css("width","357px");
	    $("#img1").css("height","134px");
	    $("#info").css("marginTop","-100px"); //"62px"
	    $("#info2").css("marginTop","-100px");
	    $("#info").css("fontSize","23px"); //"62px"
	    $("#info2").css("fontSize","23px");
	}
	else{
	    $(".box").luara({width:"1280",height:"720",interval:5000,selected:"seleted",
	    	deriction:"left"});
	    $("#img2").css("width","535px");
	    $("#img2").css("height","201px");
	    $("#img1").css("width","535px");
	    $("#img1").css("height","201px");
	    $("#info").css("marginTop","-160px");
	    $("#info2").css("marginTop","-160px");
	}
	
});
