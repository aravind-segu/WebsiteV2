function goToByScroll(id) {
  $('html,body').animate({
        scrollTop: $("#" + id).offset().top - 50
    }, 'slow');
}

var open = function() {
    $('.preloader').addClass('complete');
    $('.stopScrolling').removeClass("stopScrolling");
    $('.carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });
    var typed = new Typed('.typingText', {
        strings: ["Software Engineer . University Of Waterloo", "Passionate Developer",
            "Backend Software Engineer at Reebee", "Oracle Certified Java Developer", "MLH Hackathon Medalist", "Dean's Honour's List Student"],
        typeSpeed: 40,
        backSpeed: 20,
        backDelay: 500,
        loop: true
    });

    // $('.carousel').carousel({interval: false});
    $(".carouselCardItem").click(function(event) {
        $('.activeCarouselCard').removeClass("activeCarouselCard");
        $(this).addClass("activeCarouselCard");
    });

    $('.hideCard').hide();

    nowuiKit.initContactUs2Map();
}

$(document).ready(function(){
    setTimeout( open, 2300 );
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll >= 250){
        $("#navImage").attr("src","assets/img/asLogo.png");
    }else{
        $("#navImage").attr("src","assets/img/asLogoWhite.png");
    }
});


// $(document).on('mouseleave', '.carousel', function() {
//
//     $(this).carousel('pause');
// });


$(document).mouseup(function(e)
{
    var ecHackContainer = $("#ecHacks");
    var munchContainer = $("#munch");
    var showPicture1 = false;
    var showPicture2 = false;
    var showPicture3 = false;
    var showPicture4 = false;
    // if the target of the click isn't the container nor a descendant of the container
    if (!ecHackContainer.is(e.target) && ecHackContainer.has(e.target).length === 0
          && !munchContainer.is(e.target) && munchContainer.has(e.target).length === 0)
    {
        showPicture1 = true;
        $('#munch').hide();
    }

    var conUHackContainer = $("#conUHacks");
    var checkrContainer = $("#checkr");
    // if the target of the click isn't the container nor a descendant of the container
    if (!conUHackContainer.is(e.target) && conUHackContainer.has(e.target).length === 0
          && !checkrContainer.is(e.target) && checkrContainer.has(e.target).length === 0)
    {
      showPicture2 = true;
        $('#checkr').hide();
    }

    var hackTheValleyContainer = $("#hackTheValley");
    var findrContainer = $("#findr");
    // if the target of the click isn't the container nor a descendant of the container
    if (!hackTheValleyContainer.is(e.target) && hackTheValleyContainer.has(e.target).length === 0
          && !findrContainer.is(e.target) && findrContainer.has(e.target).length === 0)
    {
      showPicture3 = true;
        $('#findr').hide();
    }

    var hackTheNorthContainer = $("#hackTheNorth");
    var packettyContainer = $("#packetty");
    // if the target of the click isn't the container nor a descendant of the container
    if (!hackTheNorthContainer.is(e.target) && hackTheNorthContainer.has(e.target).length === 0
          && !packettyContainer.is(e.target) && packettyContainer.has(e.target).length === 0)
    {
      showPicture4 = true;
        $('#packetty').hide();
    }
    if(showPicture1 && showPicture2 && showPicture3 && showPicture4){
      $('.hackImage').show();
    }
    if(ecHackContainer.is(e.target) || ecHackContainer.has(e.target).length !== 0) {
        $('.hackImage').hide();
        $('#munch').show();
    }

    if(conUHackContainer.is(e.target) || conUHackContainer.has(e.target).length !== 0) {
        $('.hackImage').hide();
        $('#checkr').show();
    }

    if(hackTheValleyContainer.is(e.target) || hackTheValleyContainer.has(e.target).length !== 0) {
        $('.hackImage').hide();
        $('#findr').show();
    }

    if(hackTheNorthContainer.is(e.target) || hackTheNorthContainer.has(e.target).length !== 0) {
        $('.hackImage').hide();
        $('#packetty').show();
    }

});
