cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/coocaa-plugin-coocaaosapi/www/coocaaosapi.js",
        "id": "coocaa-plugin-coocaaosapi.coocaaosapi",
        "clobbers": [
            "coocaaosapi"
        ]
    },
    {
        "file": "plugins/coocaa-plugin-dynamicpluginloader/www/dynamicpluginloader.js",
        "id": "coocaa-plugin-dynamicpluginloader.dynamicpluginloader",
        "clobbers": [
            "dynamicpluginloader"
        ]
    },
    {
        "file": "plugins/coocaa-plugin-dynamicpluginloader/www/pluginlistconfig.js",
        "id": "coocaa-plugin-dynamicpluginloader.pluginlistconfig",
    },
   {
        "file": "plugins/com.lampa.startapp/www/startApp.js",
        "id": "com.lampa.startapp.startapp",
        "merges": [
            "navigator.startApp"
            ]
    },
    {
        "file": "plugins/cordova-plugin-broadcaster/www/broadcaster.js",
        "id": "cordova-plugin-broadcaster.broadcaster",
        "clobbers": [
            "broadcaster"
        ]
    },
    /*
        * dynamic plugin
        */

];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "coocaa-plugin-coocaaosapi": "1.0.0",
    "coocaa-plugin-dynamicpluginloader": "1.0.0",
    "com.lampa.startapp": "0.0.6",
    "cordova-plugin-broadcaster": "2.0.6"
    /*
        * dynamic plugin
        */
};
// BOTTOM OF METADATA
});