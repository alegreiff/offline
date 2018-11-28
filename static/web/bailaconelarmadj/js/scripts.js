//VARIABLE GLOBAL DE LA APLICACION
var ARMADJ = {};

var scriptYoutube = document.createElement("script");
scriptYoutube.src = "https://www.youtube.com/iframe_api";
document.getElementsByTagName('script')[0].parentNode.insertBefore(scriptYoutube, document.getElementsByTagName('script')[0]);

//VIDEO INTRO
function onYouTubePlayerAPIReady() {
    ARMADJ.introPlayer = new YT.Player('video-intro', {
        height: '390',
        width: '640',
        videoId: 'GEwBnAAiEb0',
        playerVars:{
            autoplay: '1',
            controls: '0',
            loop: '0',
            disabekb: '1',
            iv_load_policy: '3',
            modestbranding: '1',
            rel: '0',
            showinfo: '0',
            autohide: '0',
            fs: '1',
            enablejsapi: '1',
            //origin: "http://" + window.location.host
            //origin: window.location.protocol + "//" + window.location.host
            //origin: window.location.protocol + "//" + window.location.host
        },
        events: {
            'onReady': onAutoPlay,
            'onStateChange': onFinish
        }
    });

    var intro = document.getElementById("video-intro");
    //intro.src = intro.src.replace("http://","https://");
    //console.log(intro.src);
}

function onAutoPlay(event) {
    //event.target.playVideo();
}
function onFinish(event) {

    if(event.data == YT.PlayerState.PLAYING)
    {
        document.getElementById("NAV_SaltaEstaAnimacion").style.display = "block";
    }
    if(event.data === 0) {
        ARMADJ.saltarIntro();
        document.getElementById("NAV_SaltaEstaAnimacion").style.display = "none";
    }
}


$(document).ready(function(){

    console.log("ready");
    window.setTimeout(function(){






    ARMADJ.character = {
        track : null,
        speed : null,
        suffix : ""
    };
    ARMADJ.sprites = {
        char1 : {
            imgfullpath : "img/sprites/camaleona.png",
            width: 500,
            height: 500,
            cols: 8,
            rows: 8,
            nframes: 63,
            fps: 12,
            trackfullpath: "audio/pista1"
        },
        char2 : {
            imgfullpath : "img/sprites/olinguito.png",
            width: 672,
            height: 500,
            cols: 8,
            rows: 16,
            nframes: 128,
            fps: 13,
            trackfullpath: "audio/pista2"
        },
        char3 : {
            imgfullpath : "img/sprites/rana.png",
            width: 500,
            height: 500,
            cols: 8,
            rows: 5,
            nframes: 38,
            fps: 12,
            trackfullpath: "audio/pista3"
        },
        char5 : {
            imgfullpath : "img/sprites/saimiri.png",
            width: 731,
            height: 525,
            cols: 8,
            rows: 9,
            nframes: 69,
            fps: 12,
            trackfullpath: "audio/pista5"
        },
        char4 : {
            imgfullpath : "img/sprites/perezoso.png",
            width: 700,
            height: 500,
            cols: 8,
            rows: 7,
            nframes: 55,
            fps:12,
            trackfullpath: "audio/pista4"
        }
    };


    //AUTOAJUSTE DE LA APLICACIÓN
    if (device.desktop())
        console.log("Desktop");

    ARMADJ.wrapper = document.querySelector('#wrapper');
    ARMADJ.container = document.querySelector('#container-general');
    fit(ARMADJ.container, ARMADJ.wrapper, {
        hAlign: fit.CENTER,
        vAlign: fit.CENTER,
        cover: false,
        watch: true,
        apply: true
    });

    ARMADJ.saltarIntro = function () {
        $(".overlay").fadeOut("fast", function () {
            ARMADJ.introPlayer.stopVideo();
            playAudio("NAV_ahora-baila-con-armadj");
            ARMADJ.inactive = setTimer("NAV_instrucciones", 40000, true);
        });
    }

    //BOTON SALTAR VIDEO DE PRESENTACION
    /*$("#NAV_SaltaEstaAnimacion").on('click', function() {
        ARMADJ.saltarIntro();
    });*/


    //VER VIDEO DE PRESENTACION
    $(".a-bailar").bind('click', function() {
        $(".overlay").fadeIn("fast", function () {
            if (ARMADJ.character.speed !== null)
                $("#personajes").jsMovie("destroy");
            if (typeof ARMADJ.sound1 != "undefined")
                ARMADJ.sound1.unload();
            if (typeof ARMADJ.sound2 != "undefined")
                ARMADJ.sound2.unload();
            ARMADJ.introPlayer.seekTo(0)
            ARMADJ.introPlayer.playVideo();
            clearTimer(ARMADJ.inactive);
            clearTimer(ARMADJ.emotion);
            clearTimer(ARMADJ.changeplanet);
            clearTimer(ARMADJ.changechar);
            ARMADJ.character.track = null;
            ARMADJ.character.speed = null;
            ARMADJ.character.suffix = "";
            $(".planetas").css('display', 'none');
            $(".armadillo").css('left', '20%');
            $( ".planeta" ).removeClass(function() { //Se remueve el ritmo del planeta
                return "ritmo"+$(this).attr("data-suffix");
            });
            $('.planeta').unbind("mouseenter");
        });
    });

    //AUDIOS EN "MOUSE OVER"
    $('.audio:not(.planeta)').mouseenter(function() {
        ARMADJ.src= $(this).attr("id");
        playAudio(ARMADJ.src);
    });


    //REPRODUCCION DE AUDIOS
    function playAudio (src) {
        if (typeof ARMADJ.sound1 != "undefined")
            ARMADJ.sound1.stop();
        ARMADJ.sound1 = new Howl({
            urls: ["audio/"+src +".mp3", "audio/"+src +".ogg"],
            autoplay: true,
            });
        //ARMADJ.sound1.play();
        return false;
    }


    //CONTADORES
    function setTimer (audio, time, repeat) {
        if (repeat)
            return window.setInterval(function() { playAudio(audio); }, time);
        else
            return window.setTimeout(function() { playAudio(audio); }, time);
    }

    function clearTimer (timeoutid) {
        window.clearTimeout(timeoutid);
        window.clearInterval(timeoutid);
    }


    //SELECCION PERSONAJE
    $(".personaje").bind('click', function() {
        if (ARMADJ.character.track === null && ARMADJ.character.speed === null) {
            //SE RETIRA ARMADILLO Y SE CARGA PLANETA NORMAL CON EL PERSONAJE ELEGIDO
            clearTimer(ARMADJ.inactive);
            ARMADJ.character.track = $(this).attr("data-personaje");
            $('.planeta').bind("mouseenter", function() {
                ARMADJ.src= $(this).attr("id");
                playAudio(ARMADJ.src)
            });
            $(".armadillo").velocity({
                left: "100%"
                }, 1000, "swing", function() {
                    $(".cabina-dj").fadeIn("fast");
                    $(".planetas").css('display', 'block');
                    $(".planeta3").addClass('ritmo');
                    //CARGA PERSONAJE
                    loadCharacter();
            });
        }
        else {
            //SE CARGA EL PERSONAJE ELEGIDO EN EL PLANETA ACTUAL
            clearTimer(ARMADJ.inactive);
            ARMADJ.character.track = $(this).attr("data-personaje");
            //CARGA PERSONAJE
            loadCharacter();
        }
    });


    //SELECCION PLANETA
    $(".planeta").bind('click', function() {
        if (ARMADJ.character.track === null && ARMADJ.character.speed === null) {
            //SUENA AUDIO INSTRUCCIONES
            clearTimer(ARMADJ.inactive);
            playAudio("NAV_instrucciones");
            ARMADJ.inactive = setTimer("NAV_instrucciones", 40000, true);
        }
        else {
            //SE CARGA EL PLANETA ELEGIDO CON EL PERSONAJE ACTUAL
            clearTimer(ARMADJ.emotion);
            clearTimer(ARMADJ.changeplanet);
            clearTimer(ARMADJ.changechar);
            ARMADJ.emotion = setTimer("NAV_asi-es", 5000, false);
            ARMADJ.changechar = setTimer("NAV_muy-bien-hecho", 30000, true);
            ARMADJ.planet = $(this).attr("data-planeta");
            $(".planetas").css('background-image', 'url(img/planetas/planeta'+ARMADJ.planet+'.png)');
            ARMADJ.character.speed = $(this).attr("data-speed");
            ARMADJ.character.suffix = $(this).attr("data-suffix");
            $( ".planeta" ).removeClass(function() { //Se remueve el ritmo del planeta
                return "ritmo"+$(this).attr("data-suffix");
            });
            $(this).addClass('ritmo'+ARMADJ.character.suffix)  //Se activa el movimiento del planeta al ritmo.
            loadCharacter();
        }
    });



    //ANIMACION PERSONAJES
    function animateChar (image) {
        if (ARMADJ.character.track !== null) {
            ARMADJ.fps = Math.round(eval("ARMADJ.sprites.char"+ARMADJ.character.track+".fps") * ARMADJ.character.speed);
            $('#personajes').jsMovie({
                images : [image.src],
                folder : '',
                grid: {
                    width: eval("ARMADJ.sprites.char"+ARMADJ.character.track+".width"),
                    height: eval("ARMADJ.sprites.char"+ARMADJ.character.track+".height"),
                    columns: eval("ARMADJ.sprites.char"+ARMADJ.character.track+".cols"),
                    rows: eval("ARMADJ.sprites.char"+ARMADJ.character.track+".rows")
                },
                width: eval("ARMADJ.sprites.char"+ARMADJ.character.track+".width"),
                height: eval("ARMADJ.sprites.char"+ARMADJ.character.track+".height"),
                fps: ARMADJ.fps,
                playOnLoad: true,
                nframes: eval("ARMADJ.sprites.char"+ARMADJ.character.track+".nframes")
            });
        }
    }


    //REPRODUCCION DE PISTAS
    function playTrack () {
        if (typeof ARMADJ.sound2 != "undefined")
            ARMADJ.sound2.stop();
        ARMADJ.sound2 = new Howl({
            urls: [eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+ARMADJ.character.suffix+".mp3", eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+ARMADJ.character.suffix+".ogg"],
            autoplay: true,
            loop: true
        });
        //ARMADJ.sound2.play();
        return false;

        //ARMADJ.tracklink = (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) ? eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+".ogg" : eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+".mp3";
        //ARMADJ.tracktype = (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) ? "audio/ogg" : "audio/mpeg";

        //document.getElementById('audio_mp3').src = eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+".mp3";
        //document.getElementById('audio_ogg').src = eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+".ogg";
        //document.getElementById("pista_cancion").load();
        //document.getElementById("pista_cancion").play();
        //document.getElementById('pista_cancion').playbackRate = parseFloat(ARMADJ.character.speed);
        //document.getElementById('pista_cancion').addEventListener('ended', function(){
            //this.currentTime = 0;
            //this.play();
            //document.getElementById('pista_cancion').playbackRate = parseFloat(ARMADJ.character.speed);
        //}, false);
        //return false;
    }



    //PRECARGADOR
    function loadCharacter() {
        if (ARMADJ.character.speed !== null)
            $("#personajes").jsMovie("destroy");
        else{
            ARMADJ.character.speed = "1";
            ARMADJ.character.suffix = "";
        }
        if (typeof ARMADJ.sound2 != "undefined")
            ARMADJ.sound2.unload();
        $("#cargador").css('display', 'block');
        preload = new createjs.LoadQueue();
        preload.addEventListener("complete", handleComplete);
        preload.loadFile({id:"image", src:eval("ARMADJ.sprites.char"+ARMADJ.character.track+".imgfullpath")});
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            preload.loadFile({id:"sound3", src:eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+".ogg"});
            preload.loadFile({id:"sound2", src:eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+"_lento.ogg"});
            preload.loadFile({id:"sound1", src:eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+"_muylento.ogg"});
            preload.loadFile({id:"sound4", src:eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+"_rapido.ogg"});
            preload.loadFile({id:"sound5", src:eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+"_muyrapido.ogg"});
        }
        else {
            preload.loadFile({id:"sound3", src:eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+".mp3"});
            preload.loadFile({id:"sound2", src:eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+"_lento.mp3"});
            preload.loadFile({id:"sound1", src:eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+"_muylento.mp3"});
            preload.loadFile({id:"sound4", src:eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+"_rapido.mp3"});
            preload.loadFile({id:"sound5", src:eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+"_muyrapido.mp3"});
        }
    }

    function handleComplete() {
        $("#cargador").css('display', 'none');
        animateChar(preload.getResult("image"));
        clearTimer(ARMADJ.emotion);
        clearTimer(ARMADJ.changeplanet);
        clearTimer(ARMADJ.changechar);
        ARMADJ.emotion = setTimer("NAV_asi-es", 5000, false);
        ARMADJ.changeplanet = setTimer("NAV_puedes-ir-a-bailar", 30000, true);
        //REPRODUCE AUDIO
        playTrack();
    }


    },1000);


});
