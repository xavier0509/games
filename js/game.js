var app = {
	canonical_uri:function(src, base_path) 
	{
        var root_page = /^[^?#]*\//.exec(location.href)[0],
		root_domain = /^\w+\:\/\/\/?[^\/]+/.exec(root_page)[0],
		absolute_regex = /^\w+\:\/\//;
		// is `src` is protocol-relative (begins with // or ///), prepend protocol  
		if (/^\/\/\/?/.test(src)) 
		{  
		src = location.protocol + src; 
		}  
    // is `src` page-relative? (not an absolute URL, and not a domain-relative path, beginning with /)  
		else if (!absolute_regex.test(src) && src.charAt(0) != "/")  
		{  
			// prepend `base_path`, if any  
			src = (base_path || "") + src; 
		}
    // make sure to return `src` as absolute  
		return absolute_regex.test(src) ? src : ((src.charAt(0) == "/" ? root_domain : root_page) + src);  
	},
	
	rel_html_imgpath:function(iconurl)
	{
        console.log(app.canonical_uri(iconurl.replace(/.*\/([^\/]+\/[^\/]+)$/, '$1')));
		return app.canonical_uri(iconurl.replace(/.*\/([^\/]+\/[^\/]+)$/, '$1'));
	},

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        app.triggleButton();

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelectorAll('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        for( var i = 0 , j = receivedElement.length ; i < j ; i++ ){
            receivedElement[i].setAttribute('style', 'display:block;');
        }
      /*receivedElement.setAttribute('style', 'display:block;');*/
        document.getElementById('button1').focus();
        console.log('Received Event: ' + id);
    },
    triggleButton:function(){
        cordova.require("coocaa-plugin-coocaaosapi.coocaaosapi");
        
        document.getElementById("button1").addEventListener("click", function (){
            // var detailid = eval(document.getElementById('appdetailid')).value;
            // console.log(detailid);
            coocaaosapi.startAppStoreDetail("24216",function(message) {console.log(message); },function(error) { console.log(error);});
        },false);

        document.getElementById("button1").addEventListener("focus", function (){
            // alert("button1 focus");
            var btnfocuspnguri = app.rel_html_imgpath(__uri('../images/button-focus.png'));
            document.getElementById('img1').src=btnfocuspnguri;
        },false);

        document.getElementById("button1").addEventListener("blur", function (){
            // alert("button1 blur");
			var btnpnguri = app.rel_html_imgpath(__uri('../images/button.png'));
            document.getElementById('img1').src=btnpnguri;
        },false);

        document.getElementById("button2").addEventListener("click", function (){
             // alert("button2 click");
            coocaaosapi.startGameArsenal(function(message) {console.log(message); },function(error) { console.log(error);});
        },false);

        document.getElementById("button2").addEventListener("focus", function (){
            // alert("button2 focus");
			 var btnfocuspnguri = app.rel_html_imgpath(__uri('../images/button-focus.png'));
            document.getElementById('img2').src=btnfocuspnguri;
        },false);

        document.getElementById("button2").addEventListener("blur", function (){
            // alert("button2 blur");
			var btnpnguri = app.rel_html_imgpath(__uri('../images/button.png'));
            document.getElementById('img2').src=btnpnguri;
        },false);
    }
};

app.initialize();