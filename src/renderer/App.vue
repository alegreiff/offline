<template>
  <div id="app" class="mainmaguare">
    <div class="menu">
      <router-link to="/">Inicio</router-link>
      <router-link :to="{name: 'coleccion', params: { id: 'audiosSincoleccion'}}">Sin coleccion</router-link>
      <router-link :to="{name: 'coleccion', params: { id: 'audiosCuentoencanto'}}">Con mi cuento encanto</router-link>
      <router-link :to="{name: 'coleccion', params: { id: 'audiosCuentosaloido'}}">Cuentos al oido</router-link>
      <router-link :to="{name: 'coleccion', params: { id: 'audiosCeiba'}}">Maguaré en la Ceiba</router-link>

    </div>
    <div class="contenido">
      <router-view></router-view>
    </div>
    <div class="footermag">
      Maguaré & MaguaRED 2018
    </div>

  </div>
</template>

<script>
  export default {
    name: 'greg'
  }
</script>

<style>
  /* CSS */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *, html{
    box-sizing: border-box;
  }
  body{
    margin: 0;
    padding: 0;
  }
  .mainmaguare{
    background: crimson;
    display: grid;
    grid-template-rows: 100px 1fr 50px;
    height: 100vh;
    border: 5px white solid;
  }

  .menu{
    background: yellow;
  }
  .contenido{
    background: red;
  }
  .interna{
    background: purple;
  }
</style>
