    /* Javascript | Jquery */

    // Need to give all genre's attribute of = "genre-name"
/// The plan is to store the initial *unfiltered* movie list from The Movie DB in the initialPlaylist array 
var initialPlaylist = [];
/// Then we need to filter initialPlaylist into filteredPlaylistArrayt
var filteredPlaylist = [];
var userProfile = [];

    // FRONT END TO DO - In order for this onclick to work each dropdown item needs to have the class "genre" and a value="genreName"
    $('.genre').on('click', function(){
        // checks to make sure userProfile is empty then adds the value of the drop down genre selected to the empty userProfile array
        if(userProfile.length === 0){
            userProfile.unshift($(this).val());
            questionStartFromSecond()
        }

    });


    function questionsEngage(){
        // NEED TO CHANGE TO PROPER DIV ID
        $('#QUESTION-DIV').empty();

        if(userProfile.length === 0){

            var genreChoicesArray = ["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","Fantasy","History","Horror","Music","Mystery","Romance","Science Fiction","TV Movie","Thriller","War","Western"];
            var questionOneDiv = $('<div>').addClass('question-one-div');

            var questionOneText = $('<p>').addClass('question-one-text').text('Choose a genre');
            var questionOneButtonContainer = $('<div>').addClass('question-one-button-div');

            for(var i = 0; i < genreChoicesArray.length ; i++){
                var button = $('<button>').addClass('genre-buttons-question-one').text(genreChoicesArray[i]).attr('value', genreChoicesArray[i]);
                questionOneButtonContainer.append(button)
            }

        }

        var questionTwoDiv = $('<div>').addClass('question-two-div');
        // NEED TO GET TO GATHER WITH TEAM TO DISCUSS HOW WE WANT TO CHOOSE THE YEAR RANGE - INPUT BOXES ? RADIO BUTTONS ? SOME TYPE OF ADDON THAT ALLOWS US TO CHOOSE IN A RANGE ALL FANCY
        var questionTwoText =$('<p>').addClass('question-two-html').text("Pick A Year Range: OPTION 1 : OPTION 2");
        questionTwoDiv.append(questionTwoHTML);


    }



    // This butoon creates a new playlist if the user clicks on the create new playlist button OR is new to the site
    function createNewPlaylist(){

        var genreChoicesArray = ["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","Fantasy","History","Horror","Music","Mystery","Romance","Science Fiction","TV Movie","Thriller","War","Western"];
        var questionOneDiv = $('<div>').addClass('question-one-div');

        var questionOneText = $('<p>').addClass('question-one-text').text('Choose a genre');
        var questionOneButtonContainer = $('<div>').addClass('question-one-button-div');

        // This will Add buttons into questionOneButtonContainer that can be styles accordingly
        for(var i = 0; i < genreChoicesArray.length ; i++){
                var button = $('<button>').addClass('genre-buttons-question-one').text(genreChoicesArray[i]).attr('value', genreChoicesArray[i]);
                questionOneButtonContainer.append(button)
        }
        
    }


// This line renders any previously created playlists to the screen
    function renderPlaylist(){

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
      }

    // This line will look for any playlists added and will change the playlist when clicked
    $(document).on("click", ".individualPlaylist", changePlaylist)  

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
