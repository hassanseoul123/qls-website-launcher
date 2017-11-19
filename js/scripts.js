$(function () {
	
	 "use strict";
    
   	 //------------------- Preloader -------------------
    
      $(window).load(function () {
        $("body").addClass("loaded");
        
      });

     //-----------------------------------------------------     
	
	 //------------------- WOW Functions -------------------
	
	    new WOW().init();
	
	 //-----------------------------------------------------
	 
	 //------------------------ Menu -----------------------
	
	    $('.nav-btn').click(function(){
          $(this).toggleClass('x');
          $('.navbar').toggleClass('navbar--open');
        })
	
	 //-----------------------------------------------------

     //--------------- Match Height Functions --------------

        $(function () {
            $('.item').matchHeight();
        });

        $(function () {
            $('.item1').matchHeight();
        });

        $(function () {
            $('.item2').matchHeight();
        });

        $(function () {
            $('.item3').matchHeight();
        });

        $(function () {
            $('.itemZ').matchHeight();
        });

        $(function () {
            $('.item4').matchHeight();
        });
    
        $(function () {
            $('.item5').matchHeight();
        });
        
        $(function () {
            $('.item6').matchHeight();
        });

        //-----------------------------------------------------

        //--------------- Smooth Scroll Functions -------------

        smoothScroll.init({
            speed: 600,
            easing: 'easeInOutQuart',
            updateURL: false,
            /*offset: 50*/
        });
	
        //-----------------------------------------------------
        
        
        //------------------ Waypoint Functions ---------------

        $('.cp_pro_skills_content').waypoint(function() {
           $('.bar_border').each(function(){
                $(this).find('.bar_fill').animate({
                    width:$(this).attr('data-percent')
                },1000);
            });
            }, { offset: '95%' 
        });

        $('.cp_pro_content').waypoint(function() {
           $('.bar_border1').each(function(){
                $(this).find('.bar_fill1').animate({
                    width:$(this).attr('data-percent')
                },1000);
            });
            }, { offset: '95%' 
        });

        //-----------------------------------------------------

        //---------------------- Google Map -------------------

        function initialiseGoogleMap() {
        var latlng;
        var lat;
        var lng;
        var map = $('#map');
        var mapCanvas = map.get(0);

        if (map.data("latitude")) lat = map.data("latitude");
        if (map.data("longitude")) lng = map.data("longitude");

        latlng = new google.maps.LatLng(lat, lng);

        // Map Options
        var mapOptions = {
            zoom: 14,
            center: latlng,
            scrollwheel: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
             styles: 
                
                 [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#444444"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#46bcec"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    }
                ]
             
        };

        // Create the Map
        map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
            map: map,
            position: latlng,
            icon: 'images/marker.png'
            
        });

        // Keep Marker in Center
        google.maps.event.addDomListener(window, 'resize', function () {
            map.setCenter(latlng);
            });
        };



        /** Google Map Initialisation */
        if ($('#map').length > 0) {
            initialiseGoogleMap();
        } 


        //-------------------------------------------------------

        //---------------------- Contact Form -------------------

        $("#contactform").on('submit',function(e) {
           var name = $("#name").val();
           var email = $("#email").val();
           var message = $("#message").val();
           if (name == '') {
              $("#name").css('border-color','rgba(255, 0, 0, 0.7)');
           }
           if (email == '') {
              $("#email").css('border-color','rgba(255, 0, 0, 0.7)');
           }
           if (message == '') {
              $("#message").css('border-color','rgba(255, 0, 0, 0.7)');
           }
           else {
              $.ajax({
              url:'contact_form.php',
              data:$(this).serialize(),
              type:'POST',
              success:function(data){
              $("#success").show().fadeIn(1000); //=== Show Success Message==
              $('#contactform').each(function(){
              this.reset();
              });
           },
           error:function(data){
             $("#error").show().fadeIn(1000); //===Show Error Message====
           }
        });
        }
           e.preventDefault(); //=== To Avoid Page Refresh and Fire the Event "Click"===
       });
       
        //-----------------------------------------------------

        //---------------------- Clients Carousel -------------
        
        var clients_carousel = $(".clients-carousel");
        if( clients_carousel.length > 0 ) {
            for (var i = 0; i < clients_carousel.length; i++) {
                $(clients_carousel[i]).owlCarousel({
                    singleItem:false,
                    autoPlay: false,
                    stopOnHover: true,
                    responsive: true,
                    navigation: false,
                    pagination: false,
                    items: 5,
                    itemsDesktopSmall: [992,4],
                    itemsTabletSmall: [767,3],
                    itemsMobile: [320,1]
                });
            }
        }
      

      
});