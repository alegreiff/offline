<template>
  <div id="app" class="mainmaguare">
    <div id="menu" >
      <nav>
        <ul class="nav">
        <li><router-link to="/">Inicio</router-link></li>
        <li><a href="#">Maguaré</a>
        <ul>
          <li><router-link :to="{name: 'coleccion', params: { id: 'all'}}">Canciones y cuentos</router-link>
          <ul>
            <li><router-link :to="{name: 'coleccion', params: { id: 'audiosSincoleccion'}}">Sin coleccion</router-link></li>
            <li><router-link :to="{name: 'coleccion', params: { id: 'audiosCuentoencanto'}}">Con mi cuento encanto</router-link></li>
            <li><router-link :to="{name: 'coleccion', params: { id: 'audiosCuentosaloido'}}">Cuentos al oido</router-link></li>
            <li><router-link :to="{name: 'coleccion', params: { id: 'audiosCeiba'}}">Maguaré en la Ceiba</router-link></li>
          </ul>
          </li>
          <li><router-link :to="{name: 'vid', params: { id: 'all'}}">Videos</router-link>
            <ul>
              <li><router-link :to="{name: 'vid', params: { id: 'videoskaraokes'}}">Karaokes</router-link></li>
              <li><router-link :to="{name: 'vid', params: { id: 'videoscuentosnarrados'}}">Cuentos narrados</router-link></li>
              <li><router-link :to="{name: 'vid', params: { id: 'videossimples'}}">Videos</router-link></li>
            </ul>
          </li>
          <li><a href="#">Libros</a> </li>
          <li><a href="#">Descargas</a> </li>
        </ul>
        </li>
        <li><a href="#">MaguaRED</a> </li>
        </ul>
      </nav>
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
li.iq{
  text-align: left;
}
nav {
	margin: 0;
	text-align: left;
  z-index: 100;
}
ul {
  text-align: left;
  display: inline;
  margin: 0;
  padding:0;

}
nav ul ul { display: none; margin:0; }

nav ul li:hover > ul { display: block; }

nav ul {
	background:#990;
	box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.15);
	list-style: none;
	position: relative;
	display: inline-table;
}

nav ul:after {

	clear: both;
	display: block;
}

nav ul li { float: left; }

nav ul li:hover { background: #4b545f; }

nav ul li:hover a { color: #fff; }

nav ul li a {
	color: #fff;
	font-weight:600;
	display: block;
	padding: 15px 35px;
	text-decoration: none;
	text-transform: uppercase;
}

nav ul ul {
	background: #5f6975;
	border-radius: 0px;
	padding: 0;
	position: absolute;
	top: 100%;
}

nav ul ul li {
	  border-bottom: 1px solid #575F6A;
    border-top: 1px solid #6B727C;
    float: none;
    min-width: 170px;
    position: relative;
}

nav ul ul li a {
	padding: 12px 35px;
	color: #fff;
	text-align:left;
}

nav ul ul li a:hover { background: #4b545f; }

nav ul ul ul {
	position: absolute;
	left: 100%;
	top:0;
}

/*CIERRE*/

.mainmaguare{
  background: white;
  display: grid;
  grid-template-rows: 100px 1fr 50px;
  height: 100vh;
  border: 5px white solid;

}

.menu{
  background: white;
  position: fixed;
}
.contenido{
  background: white;
}
.interna{
  background: white;
}
</style>
