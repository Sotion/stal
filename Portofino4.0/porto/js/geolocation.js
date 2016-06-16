		$(function() {
			$('#introsetting').click(function(){
				function onSuccess(position) {
					var element = document.getElementById('geolocation');
					element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
					'Longitude: ' + position.coords.longitude     + '<br />' +
					'<hr />'      + element.innerHTML;
				}
				function onError(error) {
					alert('code: '    + error.code    + '\n' +
					'message: ' + error.message + '\n');
				}
				var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 })
			});
		});
		document.addEventListener("deviceready", onDeviceDeady, false);
		function onDeviceReady(){
			navigator.geolocation.getCurrentPosition(onSuccess, onError);
		}