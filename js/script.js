
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("my_audio");
    audio.volume = 0.20; // Set the volume to 10% (minimum but audible)
    audio.play().catch(error => console.log("Autoplay blocked by browser:", error));
});


    $(document).ready(function () {
        $('body').sakura({
            className: 'sakura',   // Adds class for styling
            blowAnimations: true,  // Enables swaying effect
            fallSpeed: 2,          // Adjust speed (higher = slower fall)
            maxSize: 14,           // Maximum petal size
            minSize: 9,            // Minimum petal size
            newOn: 300,            // Frequency of new petals (lower = more petals)
            swayAnimations: true   // Enables side swaying
        });
    });



$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi me zaroor aana');
});

// Set the date we're counting down to
var countDownDate = new Date("May 19, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 19th May, 2025!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Praveen Indhumathi', styles1, styles2);

console.log(
    `%Thirukalyanam is not just two hearts joining, it's two families becoming one!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)



