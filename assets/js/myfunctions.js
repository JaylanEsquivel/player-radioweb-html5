$(document).ready(function() {

    var myaudio = $("#audio-music")[0];

    $("#stop-btt").on("click", function () {
        myaudio.pause();
        myaudio.currentTime = 0;        
        //console.log('STOPPPPPPP');
    });
    
    $("#play-btt").on("click", function () {
        $("#play-btt").css("display", "none");
        $("#pause-btt").css("display", "inline-block");
        myaudio.play();

        myaudio.addEventListener('timeupdate',function (){
            curtime = parseInt(myaudio.currentTime, 10);
                $("#text-audio").text(secToStr(curtime));
            });


        //console.log('play');
    });

    $("#pause-btt").on("click", function () {
        $("#play-btt").css("display", "inline-block");
        $("#pause-btt").css("display", "none");
        myaudio.pause();
        //console.log('pause');
    });

    $("#plus-btt").on("click", function () {
        if (myaudio.volume < 1) myaudio.volume += 0.1;
        //console.log('plus');
    });

    $("#minus-btt").on("click", function () {
        if (myaudio.volume > 0) myaudio.volume -= 0.1;
        //console.log('minus');
    });

    function secToStr( sec_num ) {
        sec_num = Math.floor( sec_num );
        var horas   = Math.floor(sec_num / 3600);
        var minutos = Math.floor((sec_num - (horas * 3600)) / 60);
        var segundos = sec_num - (horas * 3600) - (minutos * 60);
         
        if (horas   < 10)  horas    = "0"+horas;
        if (minutos < 10)  minutos  = "0"+minutos;
        if (segundos < 10) segundos = "0"+segundos;
         
        var tempo    = horas+':'+minutos+':'+segundos;
         
        return tempo;
    }

   
});