


$(document).ready(function(){
var topics= ["football", "basketball", "baseball"];

for (i = 0; i < topics.length; i++) { 
  
        var $button = $('<button class="btn_refresh">'+topics[i] +'</button>');
        $('body').append($button);
  
}


function getsports ()
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + football + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {


                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var footballDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var footballImage = $('<img/>');

                    footballImage.addClass('anImg')

                    footballImage.attr('src', results[i].images.fixed_height.url);

                    footballImage.attr('data-still', results[i].images.fixed_height_still.url)

                    footballImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    footballDiv.append(p);

                    footballDiv.append(footballImage);

                    footballDiv.prependTo($('#gifs'));
                }

                $('#gifs').on('click',".anImg", function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var football = [''];

    
        //This function "adds" the buttons 

        // handles the event when clicked
        $('#theButton').on('click', function(){
            var animalButton = $("#gif-input").val();
            //adds the new animal

            var newButton = $("<button/>").addClass( "btn btn-info footballl").attr('data-name',footballButton).html(footballlButton).css({'margin': '5px'});
            
            $("#footballbuttons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + footballButton + "&api_key=dc6zaTOxFJmzC&limit=10";
                console.log(animalButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var foootballDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var animalImage = $('<img/>');

                    footballlImage.addClass('anImg')

                    footballlImage.attr('src', results[i].images.fixed_height_still.url);

                    footballlImage.attr('data-still', results[i].images.fixed_height_still.url)

                    footballlImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    footballDiv.append(p);

                    footballDiv.append(footballImage);

                    footballlDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

          
        
  
});


