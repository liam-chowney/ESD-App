

                // necessary variables
                var map;
                var infoWindow;



                // markersData variable stores the information necessary to each marker
                var markersData = [
                   {
                      lat: 51.630151,
                      lng: -0.755353,
                      name: "Mary Christie Hostel",
                      address1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      address2: "consectetur adipiscing elit.",
                      postalCode: "HP13 5RB",
                      markerLink: "marker1.html"// don't insert comma in the last item of each marker
                   },
                   {
                      lat: 51.625370,
                      lng: -0.742435,
                      name: "Hen and Chicken",
                      address1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      address2: "consectetur adipiscing elit.",
                      postalCode: "HP13 5RB",
                      markerLink: "marker2.html"// don't insert comma in the last item of each marker
                   },
                   {
                      lat: 51.636330,
                      lng: -0.762734,
                      name: "Wycombe Abbey",
                      address1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      address2: "consectetur adipiscing elit.",
                      postalCode: "HP13 5RB",
                      markerLink: "marker3.html"// don't insert comma in the last item of each marker
                   } // don't insert comma in the last item
                ];


                function initialize() {
                   var mapOptions = {
                          zoom: 10,
                          center: new google.maps.LatLng(51.638511,-0.807860),
                          mapTypeId: google.maps.MapTypeId.ROADMAP
                        };

                   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
                   var GeoMarker = new GeolocationMarker(map); //current location from script folder

                   // a new Info Window is created
                   infoWindow = new google.maps.InfoWindow();

                   // Event that closes the Info Window with a click on the map
                   google.maps.event.addListener(map, 'click', function() {
                      infoWindow.close();
                   });

                   // Finally displayMarkers() function is called to begin the markers creation
                   displayMarkers();
                }
                google.maps.event.addDomListener(window, 'load', initialize);



                // This function will iterate over markersData array
                // creating markers with createMarker function
                function displayMarkers(){

                   // this variable sets the map bounds according to markers position
                   var bounds = new google.maps.LatLngBounds();

                   // for loop traverses markersData array calling createMarker function for each marker 
                   for (var i = 0; i < markersData.length; i++){

                      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
                      var name = markersData[i].name;
                      var address1 = markersData[i].address1;
                      var address2 = markersData[i].address2;
                      var postalCode = markersData[i].postalCode;
                      var markerLink = markersData[i].markerLink;

                      createMarker(latlng, name, address1, address2, postalCode,markerLink);

                      // marker position is added to bounds variable
                      bounds.extend(latlng);  
                   }

                   // Finally the bounds variable is used to set the map bounds
                   // with fitBounds() function
                   map.fitBounds(bounds);
                }

                // This function creates each marker and it sets their Info Window content
                function createMarker(latlng, name, address1, address2, postalCode,markerLink){
                   var marker = new google.maps.Marker({
                      map: map,
                      position: latlng,
                      title: name
                   });

                   // This event expects a click on a marker
                   // When this event is fired the Info Window content is created
                   // and the Info Window is opened.
                   google.maps.event.addListener(marker, 'click', function() {

                      // Creating the content to be inserted in the infowindow
                      var iwContent = '<div id="iw_container">' +
                            '<div class="iw_title">' + name + '</div>' +
                         '<div class="iw_content">' + address1 + '<br />' +
                         address2 + '<br />' +
                         postalCode + '<br />' + '<a href="' + markerLink + '">Go to Location' + '</a></div></div>';

                      // including content to the Info Window.
                      infoWindow.setContent(iwContent);

                      // opening the Info Window in the current map and at the current marker location.
                      infoWindow.open(map, marker);
                   });
                }