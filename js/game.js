var app = {

    function findCordovaPath() {
    var path = null;
    var scripts = document.getElementsByTagName('script');
    var term = __uri("donothashme.js");
    for (var n = scripts.length-1; n>-1; n--) {
        var src = scripts[n].src.replace(/\?.*$/, ''); // Strip any query param (CB-6007).
        if (src.indexOf(term) == (src.length - term.length)) {
            path = src.substring(0, src.length - term.length) + '/';
            break;
        }
    }
    return path;
    }

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
            var focusuri = findCordovaPath() + __uri('images/button-focus.png');
            document.getElementById('img1').src=focusuri;
        },false);

        document.getElementById("button1").addEventListener("blur", function (){
            // alert("button1 blur");
            document.getElementById('img1').src=__uri('images/button.png');
        },false);

        document.getElementById("button2").addEventListener("click", function (){
             // alert("button2 click");
            coocaaosapi.startGameArsenal(function(message) {console.log(message); },function(error) { console.log(error);});
        },false);

        document.getElementById("button2").addEventListener("focus", function (){
            // alert("button2 focus");
            var focusuri = __uri("images/button-focus.png");
            document.getElementById('img2').src=focusuri;
        },false);

        document.getElementById("button2").addEventListener("blur", function (){
            // alert("button2 blur");
            var btnuri = __uri("images/button.png");
            document.getElementById('img2').src=btnuri;
        },false);
    }
};

app.initialize();