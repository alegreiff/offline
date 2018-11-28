var correctCards = 0;

function init()
{
	$('#saimiriBaila').hide();
	$('#resetJuego').hide();

	//RESETEAR MUSICA
	$("#reset").click(function(){
		if($("audio")[0].paused)
		{
			$("audio")[0].currentTime = 0;
			$("audio")[0].play();
		}
		else
		{
			$("audio")[0].pause();
		}
	});

	// Reset the game
	correctCards = 0;
	$('#cardPile').html('');
	$('#cardSlots').html('');
	$('#wrapper').hide();
	$('audio')[0].play();

	// Create the pile of shuffled cards
	var numbers = [1,2,3];
	numbers.sort(function()
		{
			return Math.random() - .5
		});

	for(var i=0;i<3;i++)
	{
		$('<div>' + '</div>').data('number',numbers[i]).attr('id','card'+numbers[i]).appendTo('#cardPile').draggable({
			containment:'#content',
			stack:'#cardPile div',
			cursor:'move',
			revert:true
		});
	}

	// Create the card slots
	var words = ['one','two','three','four','five'];
	for(var i=1;i<=5;i++)
	{
		$('<div>' + words[i-1] + '</div>').data('number', i).attr('id','target'+words[i-1]).appendTo('#cardSlots').droppable({
			accept:'#cardPile div',
			hoverClass:'hovered',
			drop:handleCardDrop
		});
	}
}

function handleCardDrop(event,ui)
{
	var slotNumber = $(this).data('number');
	var cardNumber = ui.draggable.data('number');

	if(slotNumber == cardNumber)
	{
		ui.draggable.addClass('correct');
		ui.draggable.draggable('disable');
		$(this).droppable('disable');
		ui.draggable.position({
			of:$(this),
			my:'left top',
			at:'left top'
		});
		ui.draggable.draggable('option','revert',false);
		correctCards++;
	}

	/*Drop Incorrecto*/
	if(slotNumber == 4)
	{
		$('audio')[1].play();
	}
	/*Ultimo Icono*/
	if(slotNumber == 5)
	{
		$('audio')[2].play();
	}

	if(correctCards == 1)
	{
		$('#reset').show();
		document.getElementById('reset').style.opacity = "1";
		document.getElementById('saimiriBaila').style.opacity = "1";
		$('audio')[0].pause();
		$('audio')[3].play();
	}
}

$(init);

$(document).ready(function(){
	$("#cargando").css("display","block");

	$("#reset").css({
		"opacity":"1",
		"background-color":"transparent",
		"display":"block",
		"width":"8%",
		"height":"auto",
		"position":"absolute",
		"top":"calc(50% - 29px)",
		"bottom":"calc(50% - 29px)",
		"left":"1%",
		"cursor":"pointer"
	});


	var reproductorPregunta = document.getElementById("reproductorPregunta");
	var btnReset = document.getElementById("reset");


	reproductorPregunta.onplay = function(){
		console.log("play");

		console.log(btnReset.classList);


		btnReset.classList.remove("pausado");
		btnReset.classList.add("reproduciendo");

		btnReset.src = "../imagenes/btn_pause.png";
	};

	reproductorPregunta.onpause = function(){
		console.log("pause");

		console.log(btnReset.classList);


		btnReset.classList.remove("reproduciendo");
		btnReset.classList.add("pausado");

		btnReset.src = "../imagenes/btn_play.png";
	};
});

$(window).load(function(){
	$("#cargando").css("display","none");
});