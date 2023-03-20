let latitude, longitude, destination;

$(document).ready(function () {
	alert("Please allow the device to know your location!")
	initGeolocation();
})

function initGeolocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	}
	else {
		alert("Sorry, your browser does not support geolocation services.");
	}
}

$(function () {
	$("#navigate-button").click(function () {
		window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
	})
})

function success(position) {
	longitude = position.coords.longitude;
	latitude = position.coords.latitude

	// Initializing Mapbox
	mapboxgl.accessToken = 'pk.eyJ1IjoiYWtzaGF0LXJhYWoiLCJhIjoiY2tyM2o2dzUwMTBqaDJ4cW1ncmlmbjJxcSJ9.vezEdR8BPdWK1cvm1acgdA';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [longitude, latitude],
		zoom: 3
	});

	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		}).on('result', function (e) {
			destination = e.result.center
		})
	);

	var img1 = document.querySelector("#puri")
	var marker1 = new mapboxgl.Marker({
		element: img1
	})
		.setLngLat([85.8179, 19.8049])
		.addTo(map);

	var img2 = document.querySelector("#badrinath")
	var marker2 = new mapboxgl.Marker({
		element: img2
	})
		.setLngLat([79.491175, 30.744695])
		.addTo(map);

	var img3 = document.querySelector("#dwarka")
	var marker3 = new mapboxgl.Marker({
		element: img3
	})
		.setLngLat([68.9674, 22.2376])
		.addTo(map);


	var img4 = document.querySelector("#rameswaram")
	var marker4 = new mapboxgl.Marker({
		element: img4
	})
		.setLngLat([79.3174, 9.2881])
		.addTo(map);
}