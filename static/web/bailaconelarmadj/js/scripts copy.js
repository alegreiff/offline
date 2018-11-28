$(document).ready(function(){

    //VARIABLE GLOBAL DE LA APLICACION
    var ARMADJ = {};
    ARMADJ.character = {
        track : null,
        speed : null
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
            nframes: 127,
            fps: 13,
            trackfullpath: "audio/pista2"
        },
        char3 : {
            imgfullpath : "img/sprites/rana.png",
            width: 500,
            height: 500,
            cols: 8,
            rows: 7,
            nframes: 56,
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


    //BOTON SALTAR VIDEO DE PRESENTACION
    $(document).on( "click", "#NAV_SaltaEstaAnimacion", function() {
        $(".overlay").fadeOut("fast", function () {
            ARMADJ.video = $(".overlay .content iframe").detach();
            playAudio("NAV_scratch", "NAV_ahora-baila-con-armadj");
            ARMADJ.inactive = setTimer("NAV_instrucciones", 40000, true);
        });
    });

    //VER VIDEO DE PRESENTACION
    $(".a-bailar").on('click', function() {
        $(".overlay").fadeIn("fast", function () {
            ARMADJ.video.appendTo(".overlay .content");
            clearTimer(ARMADJ.inactive);
        });
    });

    //AUDIOS EN "MOUSE OVER"
    $('.audio:not(.planeta)').mouseenter(function() {
        ARMADJ.src= $(this).attr("id");
        playAudio(ARMADJ.src, false)
    });


    //REPRODUCCION DE AUDIOS
    function playAudio (src, next) {
        ARMADJ.srclink = (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) ? "audio/"+src +".ogg" : "audio/"+src +".mp3";
        //ARMADJ.srctype = (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) ? "audio/ogg" : "audio/mpeg";
        $('.audiosource').attr("src",ARMADJ.srclink);
        //$('.audiosource').attr("type",ARMADJ.srctype);
        $('#recurso_audio').attr("src",ARMADJ.srclink)[0].play();
        document.getElementById("recurso_audio").onended = null;
        if (next)
        {
            document.getElementById("recurso_audio").onended = function(){
                playAudio (next, false);
            };
        }
        return false;
    }


    //CONTADORES
    function setTimer (audio, time, repeat) {
        if (repeat)
            return window.setInterval(function() { playAudio(audio, false); }, time);
        else
            return window.setTimeout(function() { playAudio(audio, false); }, time);
    }

    function clearTimer (timeoutid) {
        window.clearTimeout(timeoutid);
        window.clearInterval(timeoutid);
    }


    //SELECCION PERSONAJE
    $(".personaje").on('click', function() {
        if (ARMADJ.character.track === null && ARMADJ.character.speed === null) {
            //SE RETIRA ARMADILLO Y SE CARGA PLANETA NORMAL CON EL PERSONAJE ELEGIDO
            clearTimer(ARMADJ.inactive);
            ARMADJ.character.track = $(this).attr("data-personaje");
            $('.planeta').mouseenter(function() {
                ARMADJ.src= $(this).attr("id");
                playAudio(ARMADJ.src, false)
            });
            $(".armadillo").velocity({
                left: "100%"
                }, 1000, "swing", function() {
                    $(".cabina-dj").fadeIn("fast");
                    $(".planetas").css('display', 'block');
                    //CARGA PERSONAJE
                    loadCharacter();
            });
        }
        else {
            //SE CARGA EL PERSONAJE ELEGIDO EN EL PLANETA ACTUAL
            clearTimer(ARMADJ.inactive);
            ARMADJ.character.track = $(this).attr("data-personaje");
            //CARGA PERSONAJE
            animateChar();
            clearTimer(ARMADJ.emotion);
            clearTimer(ARMADJ.changeplanet);
            clearTimer(ARMADJ.changechar);
            ARMADJ.emotion = setTimer("NAV_asi-es", 5000, false);
            ARMADJ.changeplanet = setTimer("NAV_puedes-ir-a-bailar", 30000, true);
            //REPRODUCE AUDIO
            playTrack();
        }
    });


    //SELECCION PLANETA
    $(".planeta").on('click', function() {
        if (ARMADJ.character.track === null && ARMADJ.character.speed === null) {
            //SUENA AUDIO INSTRUCCIONES
            clearTimer(ARMADJ.inactive);
            playAudio("NAV_instrucciones", false);
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
            animateChar();
            playTrack();
        }
    });



    //ANIMACION PERSONAJES
    function animateChar () {
        if (ARMADJ.character.speed !== null)
            $("#personajes").jsMovie("destroy");
        else
            ARMADJ.character.speed = "1";
        if (ARMADJ.character.track !== null) {
            ARMADJ.fps = Math.round(eval("ARMADJ.sprites.char"+ARMADJ.character.track+".fps") * ARMADJ.character.speed);
            console.log(ARMADJ.fps);
            $('#personajes').jsMovie({
                images : [eval("ARMADJ.sprites.char"+ARMADJ.character.track+".imgfullpath")],
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
        ARMADJ.tracklink = (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) ? eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+".ogg" : eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+".mp3";
        //ARMADJ.tracktype = (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) ? "audio/ogg" : "audio/mpeg";
        $('.tracksource').attr("src",ARMADJ.tracklink);
        $('.tracksource').attr("type",ARMADJ.tracktype);
        $('#pista_cancion').attr("src",ARMADJ.tracklink)[0].play();
        //document.getElementById('pista_cancion').playbackRate = parseFloat(ARMADJ.character.speed);
        document.getElementById('pista_cancion').addEventListener('ended', function(){
            this.currentTime = 0;
            this.play();
            //document.getElementById('pista_cancion').playbackRate = parseFloat(ARMADJ.character.speed);
        }, false);
        return false;
    }



    //PRECARGADOR
    function loadCharacter() {
        /*$("#cargador").css('display', 'block');
        var preload = new createjs.LoadQueue();
        preload.addEventListener("fileload", handleFileComplete);
        preload.loadManifest([eval("ARMADJ.sprites.char"+ARMADJ.character.track+".imgfullpath"), (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) ? eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+".ogg" : eval("ARMADJ.sprites.char"+ARMADJ.character.track+".trackfullpath")+".mp3"]);*/
    }

    function handleFileComplete(event) {
        /*$("#cargador").css('display', 'none');
        animateChar();
        clearTimer(ARMADJ.emotion);
        clearTimer(ARMADJ.changeplanet);
        clearTimer(ARMADJ.changechar);
        ARMADJ.emotion = setTimer("NAV_asi-es", 5000, false);
        ARMADJ.changeplanet = setTimer("NAV_puedes-ir-a-bailar", 30000, true);
        //REPRODUCE AUDIO
        playTrack();*/
    }





});

