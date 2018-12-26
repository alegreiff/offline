<template>
<div class="grismg seccionprincipal">
<v-layout row wrap>
  <v-flex xs12>
    <div class="info magazul">
      <div><span class="label">Tiempo:</span><span class="value">{{ time }} </span></div>
      <div><span class="label">Turnos:</span><span class="value">{{ turns }} </span></div>
    </div>
  </v-flex>
  <v-flex xs12>
    <div class="cards">
      <div class="card" v-for="card in cards" :class="{ flipped: card.flipped, found: card.found }" @click="flipCard(card)">
        <div class="back"></div>
        <div class="front" :style="{ backgroundImage: 'url(static/ceiba/' + card.image + ')' }"></div>
      </div>
    </div>
  </v-flex>
  <div class="splash" v-if="showSplash">
    <div class="overlay"></div>
    <div class="content">
      <div class="title">¡Has ganado! <br /><br />Eres todo un conocedor de los personajes de Maguaré en La Ceiba</div>
      <div class="score">Puntaje: {{ score }}</div>
      <button class="newGame" @click="resetGame()">Jugar de nuevo</button>
    </div>
  </div>
</v-layout>
</div>
</template>

<script>
import moment from 'moment'
import EventBus from './eventos';
import { mapState } from 'vuex'

var CardTypes = [
{ name: "abuelo", image: "card-abuelo.png" },
{ name: "arma", image: "card-arma.png" },
{ name: "saimiri", image: "card-saimiri.png" },
{ name: "cuya", image: "card-cuya.png" },
{ name: "camaleon", image: "card-cama.png" },
{ name: "rana", image: "card-rana.png" },
{ name: "chip", image: "card-perezosa.png" },
{ name: "gildardo", image: "card-olinguito.png" },
{ name: "maya", image: "card-lora.png" }];



var shuffleCards = function shuffleCards() {
  var cards = [].concat(_.cloneDeep(CardTypes), _.cloneDeep(CardTypes));
  return _.shuffle(cards);
};
export default {
  data: function () {
    return {
      showSplash: false,
  		cards: [],
  		started: false,
  		startTime: 0,
  		turns: 0,
  		flipBackTimer: null,
  		timer: null,
  		time: "--:--",
  		score: 0

    }
  },

  	methods: {
  		resetGame: function resetGame() {
  			this.showSplash = false;
  			var cards = shuffleCards();
  			this.turns = 0;
  			this.score = 0;
  			this.started = false;
  			this.startTime = 0;

  			_.each(cards, function (card) {
  				card.flipped = false;
  				card.found = false;
  			});

  			this.cards = cards;
  		},

  		flippedCards: function flippedCards() {
  			return _.filter(this.cards, function (card) {return card.flipped;});
  		},

  		sameFlippedCard: function sameFlippedCard() {
  			var flippedCards = this.flippedCards();
  			if (flippedCards.length == 2) {
  				if (flippedCards[0].name == flippedCards[1].name)
  				return true;
  			}
  		},

  		setCardFounds: function setCardFounds() {
  			_.each(this.cards, function (card) {
  				if (card.flipped)
  				card.found = true;
  			});
  		},

  		checkAllFound: function checkAllFound() {
  			var foundCards = _.filter(this.cards, function (card) {return card.found;});
  			if (foundCards.length == this.cards.length)
  			return true;
  		},

  		startGame: function startGame() {var _this = this;
  			this.started = true;
  			this.startTime = moment();

  			this.timer = setInterval(function () {
  				_this.time = moment(moment().diff(_this.startTime)).format("mm:ss");
  			}, 1000);
  		},

  		finishGame: function finishGame() {
  			this.started = false;
  			clearInterval(this.timer);
  			var score = 1000 - (moment().diff(this.startTime, 'seconds') - CardTypes.length * 5) * 3 - (this.turns - CardTypes.length) * 5;
  			this.score = Math.max(score, 0);
  			this.showSplash = true;
  		},

  		flipCard: function flipCard(card) {var _this2 = this;
  			if (card.found || card.flipped) return;

  			if (!this.started) {
  				this.startGame();
  			}

  			var flipCount = this.flippedCards().length;
  			if (flipCount == 0) {
  				card.flipped = !card.flipped;
  			} else
  			if (flipCount == 1) {
  				card.flipped = !card.flipped;
  				this.turns += 1;

  				if (this.sameFlippedCard()) {
  					// Match!
  					this.flipBackTimer = setTimeout(function () {
  						_this2.clearFlipBackTimer();
  						_this2.setCardFounds();
  						_this2.clearFlips();

  						if (_this2.checkAllFound()) {
  							_this2.finishGame();
  						}

  					}, 200);
  				} else
  				{
  					// Wrong match
  					this.flipBackTimer = setTimeout(function () {
  						_this2.clearFlipBackTimer();
  						_this2.clearFlips();
  					}, 1000);
  				}
  			}
  		},

  		clearFlips: function clearFlips() {
  			_.map(this.cards, function (card) {return card.flipped = false;});
  		},


  		clearFlipBackTimer: function clearFlipBackTimer() {
  			clearTimeout(this.flipBackTimer);
  			this.flipBackTimer = null;
  		} },


  	created: function created() {
      this.datosgenerales = this.describe.filter(dato => dato.id == 667)
      EventBus.$emit('TITULO', this.datosgenerales[0].titulobreve);
      EventBus.$emit('SECCION', this.datosgenerales[0].descripcion);
      EventBus.$emit('ICONOBARRA', 'fas fa-gamepad', 'white');
  		this.resetGame();
  	},
    computed: {

      ...mapState('Describe', ['describe']),

    },
}
</script>

<style lang="css">
.info {
  text-align: center;
  padding-bottom: 1em;
  border-bottom: 1px solid #555;
  color: white;
  font-size: 1.2em;

}
.info > div {
  display: inline-block;
  width: 200px;
  margin-top: 0.6em;
}
.info > div .label {
  margin-right: 5px;
}
.info > div .value {
  font-weight: bold;
}

.cards .card {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 150px;
  margin: 1em 2em;
  -moz-transition: opacity 0.5s;
  -o-transition: opacity 0.5s;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
}
.score{
  color: var(--magazul);
  font-size: 1.5em;
}
.cards{
  margin: 0 auto;
}
.cards .card .front, .cards .card .back {
  border-radius: 5px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: White;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -moz-transition: -moz-transform 0.6s;
  -o-transition: -o-transform 0.6s;
  -webkit-transition: -webkit-transform 0.6s;
  transition: transform 0.6s;
  -moz-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  cursor: pointer;
}
.cards .card .back {
  background-image: url("~@/assets/card.png");
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  font-size: 12px;
}
.cards .card .front {
  -moz-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
}
.cards .card.flipped .back, .cards .card.found .back {
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.cards .card.flipped .front, .cards .card.found .front {
  -moz-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.cards .card.found {
  opacity: 0.6;
}

.splash {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.splash .overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.splash .content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 400px;
  height: 250px;
  margin: auto;
  text-align: center;
  background-color: rgba(51, 51, 51, 0.9);
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  -moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.8);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.8);
  padding: 1em;
}
.splash .content .title {
  font-size: 1.2em;
  padding: 0.5em;
  color: white;
}
.splash .content .score {
  padding: 0.5em;
}
.splash .content button {
  margin-top: 1.0em;
  background-color: #444;
  padding: 5px 20px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  border: 1px solid #555;
  color: White;
  font-size: 1.4em;
}
</style>
