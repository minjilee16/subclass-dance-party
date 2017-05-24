$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });


  $('.lineUp').on('click', function () {
    var top = 10
      for ( var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition( top, 100 );
      if( dancers instanceof  BlinkyDancer ) {
        window.dancers[i].setPosition( top, 300 ); 
      } else if ( dancers instanceof SuperHeroDancer ){
        window.dancers[i].setPosition( top, 500 ); 
      } else if ( dancers instanceof BouncyDancer ) {
        window.dancers[i].setPosition( top, 800 );
      }
      top += 50; 
      window.dancers[i].lineUp();
    }
  });


  $('.changeBGColor').on('click', function () {
    var changeColor = {}; 
    var colorArr = [ 'pink', 'blue', 'lightgreen', 'yellow', 'red' ]; 
    changeColor['background-color'] = colorArr[ Math.floor( Math.random() * colorArr.length ) ]; 
    $('body').css(changeColor);
  });


  // $('.changeBGimage').on('click', function () {
  //   var changeImages = {}; 
  //   var images = [ 'url(http://wallpapercave.com/wp/r1C97S0.jpg)', 'url(https://s-media-cache-ak0.pinimg.com/originals/75/ac/a3/75aca3b12c9be4c0d29e6d526d420267.png)', 'url(https://images.template.net/wp-content/uploads/2015/09/30094036/League-of-Light-Cool-Backgrounds11.jpg)', 'url(https://s-media-cache-ak0.pinimg.com/originals/bf/3f/08/bf3f087b42354313fcf9f8c81f69e8cd.jpg)', 'url(http://www.amazingwallpaperz.com/wp-content/uploads/Leopard-Cool-Backgrounds-Wallpapers.jpg)']; 
  //   changeImages['background-image'] = images[ Math.floor( Math.random() * images.length ) ]; 
  //   $('body').css(changeImages);
  // });
});

