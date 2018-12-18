<template>
    <div>
        <div @click="isToggle=!isToggle" v-bind:style="{backgroundColor: colorFront, color: colorTextFront}" v-show="!isToggle" class="animated flipInX flashcard">

            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeFront,fontWeight: 'bold'}">{{front}}</p>
                <img v-if="imgFront!=''" :src="imgFront" class="imagenfrontalflashcards">
            </div>

        </div>
        <div @click="isToggle=!isToggle" v-bind:style="{backgroundColor: colorBack, color: colorTextBack}" v-show="isToggle" class="animated flipInX flashcard">

            <!--<div class="card-content center bakccard" :style="{ backgroundImage: `url('${bgback}')` }">-->
            <div class="card-content center bakccard">
              <h3>{{front}}</h3>
                <img v-if="imgBack!=''" :src="imgBack" width="300" height="auto">
                <p v-bind:style="{fontSize: textSizeBack, fontWeight: 'bold'}" class="lyrics text-xs-left textoatras">{{back}}</p>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isToggle: false,
        }
    }, props: {
        bgback: {
          type: String,
          default: ''
        },
        imgFront: {
            type: String,
            default: ''
        },
        imgBack: {
            type: String,
            default: ''
        },
        front: {
            type: String,
            default: ''
        },
        back: {
            type: String,
            default: ''
        },
        textSizeFront: {
            type: String,
            default: '2em'
        },
        textSizeBack: {
            type: String,
            default: '1em'
        },
        colorTextFront: {
            type: String,
            default: 'black'
        },
        colorTextBack: {
            type: String,
            default: '#424242'
        },
        colorFront: {
            type: String,
            default: 'white'
        },
        colorBack: {
            type: String,
            default: 'white'
        },
        headerFront: {
            type: String,
            default: 'Do you know?'
        },
        headerBack: {
            type: String,
            default: 'Answer'
        },
        footerFront: {
            type: String,
            default: 'Click to show Back'
        },
        footerBack: {
            type: String,
            default: 'Click to show Front'
        }
    }
}
</script>
<style scoped>
.textoatras{
  padding-right: 0px;

}
.bakccard{

  background-position: right bottom;
  background-position: right -0px top 0px;
}
.center {
    text-align: center;
}
.flashcard {
    cursor: pointer;
    border-radius: 10px;
    margin: 10px;
    padding: 25px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);

}
.flashcard:hover {
    box-shadow: 0 0px 25px rgba(0, 0, 0, 0.8);
}
.animated {
    animation-duration: 1s;
    animation-fill-mode: both;
}
@keyframes flipInX {
    from {
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        animation-timing-function: ease-in;
        opacity: 0;
    }
    40% {
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        animation-timing-function: ease-in;
    }
    60% {
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1;
    }
    80% {
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
        transform: perspective(400px);
    }
}
.flipInX {
    backface-visibility: visible !important;
    animation-name: flipInX;
}
.imagenfrontalflashcards{
  border-radius: 1.0em;
  width:80%;

  height:auto;
}
</style>
