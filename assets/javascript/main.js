/* Javascript - Jquery */ /* API's OMDB - YOUTUBE - The Movie DB */

/* Create Additional Playlist */

var initialPlayList = [];
var filteredPlaylist = [];

    $('#CREATE-NEW-PLAYLIST-BUTTON').on("click", function(){
            createNewPlaylist()
        })


    // This butoon creates a new playlist if the user clicks on the create new playlist button OR is new to the site
    function createNewPlaylist(){

        var newButton = $('<button>');
        newButton
        
    }


// This line renders and previously created playlists to the screen
    function renderPlaylist() {

        // Deleting the gifs prior to adding new gifs
        $("#playlist-container").empty();

        for (var i = 0; i < playList.length; i++) {

          var buttonGen = $("<button>");
          // Adding a class of gif to our button
          buttonGen.addClass("playlist");
          // Adding a data-attribute
          buttonGen.attr("data-name", playList[i]);
          // Providing the initial button text
          buttonGen.text(topButtons[i]);
          // Adding the button to the buttons-view div
          $("#PLAYLIST-CONTAINER").append(buttonGen);

        }
      } // RenderPlaylist function end


    // When the user clicks on an already created playlist we switch cotents in the Data Section / The Main Video-player section / and the Purchase options section
    function changePlaylist(){
        $('DATA-SECTION').html()
        $('MAIN-VIDEO-SECTION').html()
        $('PURCHASE-SECTION').html()
    }

    function renderNewContent() {

        $('#div-main-section').empty();

        var gifName = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&limit=10&api_key=dc6zaTOxFJmzC";

        // Creating an AJAX call for the specific gif button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          for(var i = 0 ; i < 10 ; i++){

          // Creating a div to hold the gif
          var gifDiv = $("<div class='gifBlock'>").css('display','inline-block');
          // Grab the rating for the button clicked and store it in a variable

          var rating = response.data[i].rating;
          var gifImageURL = response.data[i].images.fixed_height_still.url;
          var gifGifURL = response.data[i].images.fixed_height.url;

          var gifImage = $('<img>').attr("src", gifImageURL).attr("data-animate", gifGifURL).attr("data-still", gifImageURL).attr("data-state", gifState).css('display','block').addClass('gif');
          var ratingContent = $("<p>Rating: " + rating + "</p>");

          gifDiv.append(gifImage);
          gifDiv.append(rating);

          // Putting the entire gif above the previous gifs
          $("#div-main-section").append(gifDiv);

        }

        });

}



// This line will look for any playlists added and will change the playlist when clicked
$(document).on("click", ".individualPLaylist", changePlaylist)














    var myCenter = new google.maps.LatLng(41.878114, -87.629798);

    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 12,
            scrollwheel: false,
            draggable: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

        var marker = new google.maps.Marker({
            position: myCenter,
        });

        marker.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', initialize);


    /* Smooth scrolling */
    $(document).ready(function() {
        // Add smooth scrolling to all links in navbar + footer link
        $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {

                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function() {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });
