var map;
			var defaultLatLng = new google.maps.LatLng(50.0903126,19.9439024);
            function initialize() {
            var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(50.0903126,19.9439024),
            mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById('map_canvas'),
            mapOptions);
			
			var marker = new google.maps.Marker({
            position: defaultLatLng,
            map: map,
            title: "Greetings!"
			});
            }
             
            google.maps.event.addDomListener(window, 'load', initialize);
			
			
			
		