var app = {
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
            document.getElementById('img1').src="images/button-focus.png";
        },false);

        document.getElementById("button1").addEventListener("blur", function (){
            // alert("button1 blur");
            document.getElementById('img1').src="images/button.png";
        },false);

        document.getElementById("button2").addEventListener("click", function (){
             // alert("button2 click");
            coocaaosapi.startGameArsenal(function(message) {console.log(message); },function(error) { console.log(error);});
        },false);

        document.getElementById("button2").addEventListener("focus", function (){
            // alert("button2 focus");
            document.getElementById('img2').src="images/button-focus.png";
        },false);

        document.getElementById("button2").addEventListener("blur", function (){
            // alert("button2 blur");
            document.getElementById('img2').src="images/button.png";
        },false);
    }
};

app.initialize();