<template>
  <div id="app" class="mainmaguare">
    <div id="menu" >
      <ul id="nav">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/biko">BKO</router-link></li>
      <li><a href="#"><router-link :to="{name: 'coleccion', params: { id: 'all'}}">Audios</router-link></a>
      <ul id="sub-menu">
        <li><router-link :to="{name: 'coleccion', params: { id: 'audiosSincoleccion'}}">Sin coleccion</router-link></li>
        <li><router-link :to="{name: 'coleccion', params: { id: 'audiosCuentoencanto'}}">Con mi cuento encanto</router-link></li>
        <li><router-link :to="{name: 'coleccion', params: { id: 'audiosCuentosaloido'}}">Cuentos al oido</router-link></li>
        <li><router-link :to="{name: 'coleccion', params: { id: 'audiosCeiba'}}">Maguaré en la Ceiba</router-link></li>
      </ul>
      </li>
      </ul>







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



/*ABRE*/
#menu {

}

ul#nav {

  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #dc0000;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

ul#nav li {
  display: inline;
}

ul#nav li a {
  float: left;
  font: bold 1.1em arial,verdana,tahoma,sans-serif;
  font-size: 1em;
  line-height: 40px;
  color: #fff;
  text-decoration: none;
  text-shadow: 1px 1px 1px #880000;
  margin: 0;
  padding: 0 30px;
  background: #dc0000;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/* APPLIES THE ACTIVE STATE */
ul#nav .current a, ul#nav li:hover > a  {
  color: #fff;
  text-decoration: none;
  text-shadow: 1px 1px 1px #330000;
  background: #bb0000;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/* THE SUBMENU LIST HIDDEN BY DEFAULT */
ul#nav  ul {
  display: none;
}

/* WHEN THE FIRST LEVEL MENU ITEM IS HOVERED, THE CHILD MENU APPEARS */
ul#nav li:hover > ul {
  position: absolute;
  display: block;
  width: 920px;
  height: 45px;
  position: absolute;
  margin: 40px 0 0 0;
  background: #aa0000;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

ul#nav li:hover > ul li a {
  float: left;
  font: bold 1.1em arial,verdana,tahoma,sans-serif;
  line-height: 45px;
  color: #fff;
  text-decoration: none;
  text-shadow: 1px 1px 1px #110000;
  margin: 0;
  padding: 0 30px 0 0;
  background: #aa0000 ;
}

ul#nav li:hover > ul li a:hover {
  color: #120000;
  text-decoration: none;
  text-shadow: none;
}

/*CIERRE*/

.mainmaguare{
  background: crimson;
  display: grid;
  grid-template-rows: 100px 1fr 50px;
  height: 100vh;
  border: 5px white solid;

}

.menu{
  background: yellow;
  position: fixed;
}
.contenido{
  background: red;
}
.interna{
  background: purple;
}
</style>
