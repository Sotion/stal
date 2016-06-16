function checkConnection() {
    var networkState = navigator.connection.type;
    var myConnect = document.getElementById('Connection');

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    myConnect.innerHTML = 'Connection type: ' + states[networkState];

}
function initialize() {
    var position = new google.maps.LatLng(50.0685092,19.9550793);
    var myOptions = {
        zoom: 15,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(
        document.getElementById("mapka"),
        myOptions);

    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title:"UEK"
    });
}
function test(){
    var val = true;
    if (val){
        initialize();
    } else {
        var testowa = document.getElementById('Connection');
        var testowa2 = document.getElementById('mapka');
        testowa.innerHTML = 'coś nie dziala';
        testowa2.innerHTML = '';
    }
}
function scanBarcode(){
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            alert("We got a barcode\n" +
            "Result: " + result.text + "\n" +
            "Format: " + result.format + "\n" +
            "Cancelled: " + result.cancelled);
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
}