var contadorEscenariosTerminados = 0; //Se usa para ir contando las veces que se finalizan escenarios, cuando sean 6 se muestra el vídeo "salida_carrusel".

$(document).bind("ready",function(){
	$(".menu").bind("click",function(){
		var escenario = this.classList[1];
		FN_ReproducirVideo(escenario);
	});
	FN_HacerDroppable("div[class*='drop']");
	FN_HacerDraggable("div[class*='drag']");

}); //ready


function FN_CargarAudios()
{
	var audioPrincipal = document.getElementById("audioPrincipal");
	var audioSalarAnimacion = document.getElementById("audioSaltarAnimacion");
	audioPrincipal.play();
	audioPrincipal.pause();

	audioSalarAnimacion.play();
	audioSalarAnimacion.pause();
}

function FN_ReproducirVideo(escenario)
{
	var video = document.getElementById("video-" + escenario);
	var ruta = "videos/";
	var extension =  "ogv";
	//var btnSaltar = document.getElementById(escenario + "-saltar-video");
	var contPersonaje = document.querySelector(".cont-" + escenario + " .cont-personaje");
	var menuGestos = document.querySelector(".cont-" + escenario + " .menu-gestos");
	var capaOscura = document.createElement("div");


	if(video.canPlayType("video/ogg"))
	{
		extension =  "ogv";
	}
	else if(video.canPlayType("video/webm"))
	{
		extension = "webm";
	}
	else if(video.canPlayType("video/mp4"))
	{
		extension = "mp4";
	}
	video.src = ruta + escenario + "/video." + extension;


	//btnSaltar.style.display = "block";

	capaOscura.id = "capaOscura";
	$(capaOscura).css({
		"position": "fixed",
		"width": "100%",
		"height": "100%",
		"top": "0px",
		"left": "0px",
		"background-color": "rgba(0,0,0,0.9)"
	});

	video.play();
	video.onplay = function(){
		var lala = document.getElementById("container-general");
		this.classList.add("reproduciendo");
		video.style.top = "calc(50% - " + (video.clientHeight / 2) + "px)";
		contPersonaje.style.display = "none";
		menuGestos.style.display = "none";
		//btnSaltar.style.bottom = "2%";
		video.parentElement.insertBefore(capaOscura,video);
	};

	video.onended = function (){
		this.classList.remove("reproduciendo");
		//btnSaltar.style.display = "none";
		contPersonaje.style.display = "block";
		menuGestos.style.display = "block";
		capaOscura.parentElement.removeChild(capaOscura);
	};

	video.onplaying = function(){
		console.log("onplaying");
		var arrayMensaje = {
			"funcion": "FN_MostrarCargando",
			"mensaje": "0"
		};

		FN_EnviarMensajePadre(JSON.stringify(arrayMensaje));

	}

	video.onwaiting = function(){
		console.log("onwaiting");
		var arrayMensaje = {
			"funcion": "FN_MostrarCargando",
			"mensaje": "1"
		};
		FN_EnviarMensajePadre(JSON.stringify(arrayMensaje));
	}




	/*
	btnSaltar.onclick = function(){
		video.pause();
		video.classList.remove("reproduciendo");
		this.style.display = "none";
		contPersonaje.style.display = "block";
		menuGestos.style.display = "block";
		capaOscura.parentElement.removeChild(capaOscura);
	};
	*/
}

function FN_ReproducirAudio(audio,repetir,reproductor)
{
	//audio es el nombre del audio a reproducir sin la extensión
	//reproductor es el reproductor que va a reproducir el audio
	var repAudio = document.getElementById(reproductor);
	var extension = "ogg";
	var ruta = "audios/";
	var nombreBase = "MAGUARE_APP_Carrusel_";

	repetir = repetir || false;
	extension = repAudio.canPlayType("audio/mp3") ? "mp3":"ogg";
	ruta += extension + "/";

	repAudio.src = "";
	repAudio.src = ruta + nombreBase + audio + "." + extension;
	repAudio.loop = repetir;
	repAudio.play();
}

function FN_PararAudios()
{
	var repAudioPrincipal = document.getElementById("audioPrincipal");
	var repAudioSecundario = document.getElementById("audioSecundario");

	repAudioPrincipal.pause();
	repAudioSecundario.pause();
}


function FN_HacerDroppable(elementoClase)
{
	$(elementoClase).droppable({
		accept: "*",
		tolerance: "touch",
		over: function(event, ui){
			var claseDrop;
			var parteCara;
			if(!this.classList.contains("listo"))
			{
				for(var i=0;i<this.classList.length;i++)
				{
					if(/^drop[-]/.test(this.classList[i]))
					{
						claseDrop = this.classList[i].replace("drop-","").replace(/-/g,"").toLowerCase();
					}
					if(/^drop[^-]/.test(this.classList[i]))
					{
						parteCara = this.classList[i].replace("drop","").toLowerCase();
					}
				}
				this.parentElement.parentElement.getElementsByClassName("cont-" + parteCara)[0].style.backgroundImage = "url('img/" + claseDrop + "/" + parteCara + "_cara_over.png')";
			}
		},
		out: function(event, ui){
			var claseDrop;
			var parteCara;

			if(!this.classList.contains("listo"))
			{
				for(var i=0;i<this.classList.length;i++)
				{
					if(/^drop[-]/.test(this.classList[i]))
					{
						claseDrop = this.classList[i].replace("drop-","").replace(/-/g,"").toLowerCase();
					}
					if(/^drop[^-]/.test(this.classList[i]))
					{
						parteCara = this.classList[i].replace("drop","").toLowerCase();
					}
				}
				this.parentElement.parentElement.getElementsByClassName("cont-" + parteCara)[0].style.backgroundImage = "";
			}
		}
	});
}

function FN_HacerDraggable(elementoClase)
{
	$(elementoClase).draggable({
		appendTo: 'body',
		helper: 'original',
		opacity: 1,
		revert: function(dropped)
		{
			var elementoValido = false;
			if(dropped)
			{
				if(!dropped.get(0).classList.contains("listo"))
				{
					var claseDrag = "";
					var claseDrop = "";
					var escenario = "";
					for(var i=0;i<this.get(0).classList.length;i++)
					{
						if(/^drag[^-]/.test(this.get(0).classList[i]))
						{
							claseDrag = this.get(0).classList[i].replace("drag","");
						}
					}

					for(var i=0;i<dropped.get(0).classList.length;i++)
					{
						if(/^drop[^-]/.test(dropped.get(0).classList[i]))
						{
							claseDrop = dropped.get(0).classList[i].replace("drop","");
						}
						if(/^drop-*/.test(dropped.get(0).classList[i]))
						{
							escenario = dropped.get(0).classList[i].replace("drop-","");
						}
					}

					if(claseDrop.toLowerCase() == claseDrag.toLowerCase())
					{
						dropped.get(0).classList.add("listo");
						this.get(0).classList.add("movido");
						this.clone().appendTo($(dropped.get(0)));
						this.css("display","none");
						$(dropped).children().css({
							"width":"100%",
							"height":"100%",
							"opacity":this.css("opacity"),
							"background-image":this.css("background-image"),
							"background-position":this.css("background-position"),
							"background-repeat":this.css("background-repeat"),
							"top":"",
							"left":""
						});
						$(dropped).children().addClass("clonado");

						this.get(0).parentElement.parentElement.getElementsByClassName("cont-" + claseDrop.toLowerCase())[0].style.backgroundImage = "";

						elementoValido = true;
						FN_VerificarFin(escenario);
					}
				}
			}
			return !elementoValido;
		}
	});
}

function FN_VerificarFin(escenario)
{
	var contenedores = document.getElementsByClassName("drop-" + escenario);
	var listo = false;
	var numEscenario = 0;
	for(var i=0;i<contenedores.length;i++)
	{
		if(contenedores[i].classList.contains("listo"))
		{
			listo = true;
		}
		else
		{
			listo = false;
			break;
		}
	}
	if(listo)
	{
		switch(escenario)
		{
			case "playa":
				numEscenario = 20;
				break;
			case "palabras-al-aire":
				numEscenario = 21;
				break;
			case "vereda":
				numEscenario = 22;
				break;
			case "jardin":
				numEscenario = 23;
				break;
			case "parque":
				numEscenario = 24;
				break;
			case "casa-del-arbol":
				numEscenario = 25;
				break;
		}


		FN_ReproducirAudio(numEscenario,false,"audioPrincipal");

		var duracionTransicion = 3000; //Milisegundos
		$(".dragOjos").fadeOut({
			duration: duracionTransicion
		});
		$(".dragBoca").fadeOut({
			duration: duracionTransicion
		});
		$(".cont-" + escenario + " .cara-final").fadeIn({
			duration: duracionTransicion
		});


		window.setTimeout(function(){
			var videoFin = null;
			var capaOscuraVideoFin = null;
			$(".botonFin").css("display","block");
			contadorEscenariosTerminados++;
			if(contadorEscenariosTerminados == 6)
			{
				if(tipo_navegador.toLowerCase() == "escritorio")
				{
					window.setTimeout(function(){
						reproductorYTSalida.playVideo();
					},1000);
				}
				else
				{
					FN_PararAudios();
					contadorEscenariosTerminados = 0;
					var capaOscuraVideoFin = document.getElementById("capaOscuraVideoSalida");
					capaOscuraVideoFin.style.display = "block";
					var videoFin = document.getElementById("videoSalida");
					videoFin.style.display = "block";
					videoFin.style.top = "calc(50% - " + (videoFin.getBoundingClientRect().height / 2) + "px)";
				}
			}
		},5000);
	}
}

function FN_LimpiarEscenario()
{
	$(".listo").removeClass("listo");
	$(".movido").removeClass("movido");
	$(".cara-final").css("display","none");
	$(".clonado").remove();
	$(".botonFin").css("display","none");
	$(".dragOjos").css({
		"display":"block",
		"top":"",
		"left":""
	});
	$(".dragBoca").css({
		"display":"block",
		"top":"",
		"left":""
	});
}

function FN_Reiniciar()
{
	var arrayVideos = document.getElementsByClassName("repVideo");
	for(var i=0;i<arrayVideos.length;i++)
	{
		arrayVideos[i].currentTime = 0;
	}

	$(".dragOjos").css({
		"display":"block",
		"top":"",
		"left":""
	});
	$(".dragBoca").css({
		"display":"block",
		"top":"",
		"left":""
	});

	$(".listo").removeClass("listo");
	$(".movido").removeClass("movido");
	$(".cara-final").css("display","none");
	$(".clonado").remove();
	$(".cont-vereda").css("display","none");
	$(".cont-palabras-al-aire").css("display","none");
	$(".cont-casa-del-arbol").css("display","none");
	$(".cont-jardin").css("display","none");
	$(".cont-parque").css("display","none");
	$(".cont-playa").css("display","none");
	$(".cont-actividades").css("display","block");
	$(".botonFin").css("display","none");
	FN_ReproducirAudio("3",false,"audioPrincipal");
}
