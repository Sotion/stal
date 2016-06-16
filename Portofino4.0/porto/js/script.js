$( document ).on( "pagecreate", function() {
			$( "body > [data-role='panel']" ).panel();
			$( "body > [data-role='panel'] [data-role='listview']" ).listview();
		});
		$( document ).one( "pageshow", function() {
			$( "body > [data-role='header']" ).toolbar();
			$( "body > [data-role='header'] [data-role='navbar']" ).navbar();
		});
		$(function() {
			$('#datepicker').datepicker({
				changeMonth: true,
				changeYear: true,
				yearRange: '1920:2015',
				dateFormat : 'dd-mm-yy',
				defaultDate: new Date(1985, 00, 01)
			});
		});
		$(function() {
			$('#openUrzadzeniePage').click(function(){
				$('#deviceCordova').text(device.cordova);
				$('#devicePlatform').text(device.platform);
				$('#deviceUUID').text(device.uuid);
				$('#deviceModel').text(device.model);
				$('#deviceVersion').text(device.version);
			});
		});
		$(function() {
			$('#openDodatkowaPage').click(function(){
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