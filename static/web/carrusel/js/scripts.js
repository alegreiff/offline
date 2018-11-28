$(document).ready(function()
{
	var intervalo = 0;
	$(".jugar").bind("click", function()
	{
		$(".cont-inicio").hide();
		$(".cont-actividades").show();
		$("#container-general").css({
			"background-size":"0%"
		});
		FN_ReproducirAudio("3",false,"audioPrincipal");
	});

	$(".instrucciones").bind("click",function(){
		//reproductorYT.playVideo();
		var video = document.getElementById("videoIntro");
		FN_CargarAudios();
		video.style.display= "block";
		$(".jugar").css("display","none");
		$(".instrucciones").css("display","none");
		$("#intro-saltar-video").css("display","block");
		$("#container-general").css("background-size","0%");
	});

	$(".vereda").bind("click", function()
	{
		$(".cont-actividades").hide();
		$(".cont-vereda").show();
		FN_PararAudios();
	});

	$(".palabras-al-aire").bind("click", function()
	{
		$(".cont-actividades").hide();
		$(".cont-palabras-al-aire").show();
		FN_PararAudios();
	});

	$(".casa-del-arbol").bind("click", function()
	{
		$(".cont-actividades").hide();
		$(".cont-casa-del-arbol").show();
		FN_PararAudios();
	});

	$(".jardin").bind("click", function()
	{
		$(".cont-actividades").hide();
		$(".cont-jardin").show();
		FN_PararAudios();
	});

	$(".parque").bind("click", function()
	{
		$(".cont-actividades").hide();
		$(".cont-parque").show();
		FN_PararAudios();
	});

	$(".playa").bind("click", function()
	{
		$(".cont-actividades").hide();
		$(".cont-playa").show();
		FN_PararAudios();
	});

	$("#btnCambiarEscenario").bind("click",function(){
		FN_Reiniciar();
	});

	$("#btnOtraVez").bind("click",function(){
		FN_LimpiarEscenario();
	});

	$("#intro-saltar-video").click(function(){
		var video = document.getElementById("videoIntro");
		var repAudio = document.getElementById("audioSaltarAnimacion");
		reproductorYT.stopVideo();
		$(".cont-inicio").hide();
		$(".cont-actividades").show();
		$("#container-general").css({
		"background-size":"0%"
		});
		video.style.display= "none";
		repAudio.pause();
		FN_ReproducirAudio("3",false,"audioPrincipal");
	});

	if((navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/android/i)) || (navigator.userAgent.match(/Windows Phone/i)))
	{//es iPad, iPhone, iPod o android
		// $(".jugar").css("display","block");
		// $(".instrucciones").css("display","block");
	}
	else
	{

		$(".jugar").mouseenter(function(){
			FN_ReproducirAudio("4",false,"audioPrincipal");
		});

		$(".instrucciones").mouseenter(function(){
			FN_ReproducirAudio("2",false,"audioPrincipal");
		});

		$(".btnSaltarVideo").mouseenter(function(){
			FN_SonidoSaltarAnimacion();
		});
	}
	FN_CambiarTamano();
});

var timeout = 0;
window.onresize = function(){
	clearTimeout(timeout);
	timeout = setTimeout(FN_CambiarTamano, 100);
};

function FN_SonidoSaltarAnimacion()
{
	var repAudio = document.getElementById("audioSaltarAnimacion");
	repAudio.pause();
	repAudio.currentTime = 0;
	repAudio.play();
}

function FN_CambiarTamano()
{
	var media = matchMedia("(orientation: landscape)");
	var wrap = document.getElementById("wrapper");
	var contGen = document.getElementById("container-general");
	var ancho = 0, alto = 0; //Se usan para almacenar el valor que se va a usar para el calculo
	var anchoCalculado = 0, altoCalculado = 0;
	var anchoNuevo = 0, altoNuevo =0;
	var relacion = (media.matches)?(16/9):(5/5.4);

	ancho = window.innerWidth;
	alto = window.innerHeight;

	anchoCalculado = alto * relacion;
	altoCalculado = ancho / relacion;


	if(anchoCalculado > ancho)
	{
		altoNuevo = ancho / relacion;
		anchoNuevo = ancho;
	}

	if(altoCalculado > alto)
	{
		anchoNuevo = alto * relacion;
		altoNuevo = alto;
	}

	contGen.style.width = anchoNuevo + "px";
	contGen.style.height = altoNuevo + "px";
	contGen.style.top = "calc(50% - " + (altoNuevo / 2) + "px)";
	contGen.style.left = "calc(50% - " + (anchoNuevo / 2) + "px)";
}
