<template>
  <div>
    <v-list dense>
      <v-list-tile :to="{path: '/'}" >
        <v-list-tile-action>
          <v-icon medium>fas fa-home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Inicio</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
<v-divider></v-divider>
    <!-- <v-subheader inset>Maguarés</v-subheader> -->

    <img id="logo" src="static/maguare.png" alt="electron-vue" class="logomini">

    <v-list-tile :to="{name: 'idvideo', params: { id: 1400}}" >
          <v-list-tile-action><v-icon medium color="magnaranja">fas fa-play-circle</v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title>¿Qué es Maguaré?</v-list-tile-title></v-list-tile-content>
    </v-list-tile>
    <v-list-tile :to="{path: '/ceiba'}" >
          <v-list-tile-action><v-icon medium color="magrojo">far fa-id-badge</v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title>Conoce a Saimiri y sus amigos</v-list-tile-title></v-list-tile-content>
    </v-list-tile>

  <!-- MAGUARÉ GRUPO VIDEOS -->
      <v-list-group no-action>
      <v-list-tile slot="activator">
        <v-list-tile-action>
          <v-icon medium color="magnaranja">fas fa-play-circle</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="menu_videos">VIDEOS</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile :to="{name: 'vid', params: { id: 'vidCeiba'}}">
      <v-list-tile-content>
          <v-list-tile-title>Karaokes Maguaré en La Ceiba</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile :to="{name: 'vid', params: { id: 'vidSweet'}}">
      <v-list-tile-content>
        <v-list-tile-title>Sweet songs fi piknini </v-list-tile-title>
        <v-list-tile-sub-title>Canciones dulces para niños</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile :to="{name: 'vid', params: { id: 'vidKaraokes'}}">
      <v-list-tile-content>
          <v-list-tile-title>Karaokes</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile :to="{name: 'vid', params: { id: 'vidZumba'}}">
      <v-list-tile-content>
          <v-list-tile-title>Zumba que zumba</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile :to="{name: 'vid', params: { id: 'vidCuentos'}}">
      <v-list-tile-content>
          <v-list-tile-title>Cuentos narrados</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile :to="{name: 'vid', params: { id: 'vidFiesta'}}">
      <v-list-tile-content>
          <v-list-tile-title>Fiesta de la lectura</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>


      <v-list-tile :to="{name: 'vid', params: { id: 'vidAllKar'}}">
      <v-list-tile-content>
          <v-list-tile-title>Todos los karaokes</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile :to="{name: 'vid', params: { id: 'all'}}" exact>
      <v-list-tile-content>
          <v-list-tile-title>Todos los videos</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      </v-list-group>
<!-- MAGUARÉ GRUPO AUDIOS -->
  <v-list-group no-action>
  <v-list-tile slot="activator">
    <v-list-tile-action>
      <v-icon medium color="maglima">fas fa-music</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title class="menu_audios">AUDIOS</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>

  <v-list-tile :to="{name: 'coleccion', params: { id: 'audiosCeiba'}}">
    <v-list-tile-content>
      <v-list-tile-title>Maguaré en La Ceiba</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
  <v-list-tile :to="{name: 'coleccion', params: { id: 'audiosKamentsa'}}">
    <v-list-tile-content>
      <v-list-tile-title>Canciones Kamëntsá</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
  <v-list-tile :to="{name: 'coleccion', params: { id: 'audiosSweetsongs'}}">
    <v-list-tile-content>
      <v-list-tile-title>Sweet songs fi piknini </v-list-tile-title>
      <v-list-tile-sub-title>Canciones dulces para niños</v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>

  <v-list-tile :to="{name: 'coleccion', params: { id: 'audiosCuentoencanto'}}" ripple>
    <v-list-tile-content>
      <v-list-tile-title>Con mi cuento encanto</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>

  <v-list-tile :to="{name: 'coleccion', params: { id: 'audiosCuentosaloido'}}">
    <v-list-tile-content>
      <v-list-tile-title>Cuentos al oído</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>

  <v-list-tile :to="{name: 'coleccion', params: { id: 'audiosFiesta'}}">
    <v-list-tile-content>
      <v-list-tile-title>Fiesta de la lectura</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>

  <v-list-tile :to="{name: 'coleccion', params: { id: 'all'}}" exact>
  <v-list-tile-content>
      <v-list-tile-title>Todos los audios</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
  </v-list-group>

  <!-- MAGUARÉ GRUPO LIBROS -->
      <v-list-group no-action>
      <v-list-tile slot="activator">
        <v-list-tile-action>
          <v-icon medium color="magazul">fas fa-book-open</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="menu_libros">LIBROS</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile :to="{name: 'lib', params: { id: 'librosCeiba'}}" >

          <v-list-tile-content><v-list-tile-title>Maguaré en La Ceiba</v-list-tile-title></v-list-tile-content>
      </v-list-tile>

      <v-list-tile :to="{name: 'lib', params: { id: 'librosFiesta'}}" >

          <v-list-tile-content><v-list-tile-title>Fiesta de la lectura</v-list-tile-title></v-list-tile-content>
      </v-list-tile>
      <v-list-tile :to="{name: 'lib', params: { id: 'librosLEMC'}}" >

          <v-list-tile-content><v-list-tile-title>Serie Leer es mi cuento</v-list-tile-title></v-list-tile-content>
      </v-list-tile>


      <v-list-tile :to="{name: 'lib', params: { id: 'all'}}" >
          <v-list-tile-content><v-list-tile-title>Todos los libros</v-list-tile-title></v-list-tile-content>
      </v-list-tile>




      </v-list-group>


<!-- MAGUARÉ GRUPO INTERACTIVOS -->
    <v-list-group no-action>
    <v-list-tile slot="activator">
      <v-list-tile-action>
        <v-icon medium color="magmorado">extension</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="menu_interactivos">INTERACTIVOS</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :to="{name: 'app', params: { id: 'appsJuegos'}}">
      <v-list-tile-content>
        <v-list-tile-title>Juegos</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :to="{name: 'app', params: { id: 'appsAdivinanzas'}}">
      <v-list-tile-content>
        <v-list-tile-title>Adivinanzas</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :to="{name: 'app', params: { id: 'appsRompecabezas'}}" ripple>
      <v-list-tile-content>
        <v-list-tile-title>Rompecabezas</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :to="{name: 'app', params: { id: 'appsTrabalenguas'}}">
      <v-list-tile-content>
        <v-list-tile-title>Trabalenguas</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>


    <v-list-tile :to="{name: 'app', params: { id: 'all'}}" exact>
    <v-list-tile-content>
        <v-list-tile-title>Todos los interactivos</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    </v-list-group>

    <v-list-tile :to="{path: '/sugerencias'}" >
          <v-list-tile-action><v-icon medium color="light-blue darken-3">fas fa-download</v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title>Actividades sugeridas</v-list-tile-title></v-list-tile-content>
    </v-list-tile>


<!-- MAGUARÉ DESCARGABLES -->
<v-list-tile :to="{path: '/descargablesmaguare'}" >
  <v-list-tile-action><v-icon medium color="light-blue darken-3">fas fa-download</v-icon></v-list-tile-action>
  <v-list-tile-content><v-list-tile-title>Descargables</v-list-tile-title></v-list-tile-content>
</v-list-tile>


<!-- MAGUARED-->
<!-- <v-subheader inset>MaguaRED</v-subheader> -->
<v-divider></v-divider>
<img id="logo" src="static/maguared.png" alt="electron-vue" class="logominim">

<v-list-tile :to="{name: 'idvideo', params: { id: 1401}}" >
      <v-list-tile-action><v-icon medium color="magnaranja">fas fa-play-circle</v-icon></v-list-tile-action>
      <v-list-tile-content><v-list-tile-title>¿Qué es MaguaRED?</v-list-tile-title></v-list-tile-content>
</v-list-tile>


<!--GRUPO VIDEOS MAGUARED -->

<!-- MAGUARÉ GRUPO VIDEOS -->
    <v-list-group no-action>
    <v-list-tile slot="activator">
      <v-list-tile-action>
        <v-icon medium color="magnaranja">fas fa-play-circle</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="menu_videos">VIDEOS</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :to="{name: 'magvid', params: { id: 'videosPrincipios'}}">
    <v-list-tile-content>
        <v-list-tile-title>Principios EDCPI</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :to="{name: 'magvid', params: { id: 'videosCuerposonoro'}}">
    <v-list-tile-content>
        <v-list-tile-title>Cuerpo Sonoro</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :to="{name: 'magvid', params: { id: 'videosQuePiensan'}}">
    <v-list-tile-content>
        <v-list-tile-title>¿Qué piensan los expertos?</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :to="{name: 'magvid', params: { id: 'videosQueRecomiendan'}}">
    <v-list-tile-content>
        <v-list-tile-title>¿Qué recomiendan los expertos?</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>


    <v-list-tile :to="{name: 'magvid', params: { id: 'all'}}" exact>
    <v-list-tile-content>
        <v-list-tile-title>Todos los videos</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    </v-list-group>

<!--GRUPO VIDEOS MAGUARED -->


<!-- ViejoaccesoVideosMaguaRED
<v-list-tile :to="{path: '/videosmaguared'}" >
      <v-list-tile-action><v-icon medium color="magnaranja">fas fa-play-circle</v-icon></v-list-tile-action>
      <v-list-tile-content><v-list-tile-title>Videos</v-list-tile-title></v-list-tile-content>
</v-list-tile>
-->

<!-- MAGUARÉ GRUPO INTERACTIVOS -->
    <v-list-group no-action>
    <v-list-tile slot="activator" ripple>
      <v-list-tile-action>
        <v-icon medium color="magazul">fas fa-book-open</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="menu_libros">LIBROS</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :to="{name: 'maglib', params: { id: 'librosCuentosDerechos'}}">
      <v-list-tile-content>
        <v-list-tile-title>Cuentos derechos</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :to="{name: 'maglib', params: { id: 'librosCuerpoSonoro'}}">
      <v-list-tile-content>
        <v-list-tile-title>Cuerpo sonoro</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :to="{name: 'maglib', params: { id: 'librosDerechosOrientaciones'}}">
      <v-list-tile-content>
        <v-list-tile-title>Derechos culturales</v-list-tile-title>
        <v-list-tile-sub-title>para la primera infancia</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>



    <v-list-tile :to="{name: 'maglib', params: { id: 'librosTodosLeeresmicuento'}}" ripple>
      <v-list-tile-content>
        <v-list-tile-title>Leer es mi cuento</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>



    <v-list-tile :to="{name: 'maglib', params: { id: 'all'}}" exact>
    <v-list-tile-content>
        <v-list-tile-title>Todos los libros</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    </v-list-group>

<!--

<v-list-tile :to="{path: '/sugerencias'}" >
      <v-list-tile-action><v-icon medium>picture_as_pdf</v-icon></v-list-tile-action>
      <v-list-tile-content><v-list-tile-title>Cuerpo Sonoro</v-list-tile-title></v-list-tile-content>
</v-list-tile>
<v-list-tile :to="{path: '/sugerencias'}" >
      <v-list-tile-action><v-icon medium>picture_as_pdf</v-icon></v-list-tile-action>
      <v-list-tile-content><v-list-tile-title>Cuentos derechos</v-list-tile-title></v-list-tile-content>
</v-list-tile>
<v-list-tile :to="{path: '/sugerencias'}" >
      <v-list-tile-action><v-icon medium>picture_as_pdf</v-icon></v-list-tile-action>
      <v-list-tile-content><v-list-tile-title>Leer es mi cuento</v-list-tile-title></v-list-tile-content>
</v-list-tile>


-->
<v-list-tile :to="{path: '/tutorialesmaguared'}" >
      <v-list-tile-action><v-icon medium color="light-blue darken-3">fas fa-download</v-icon></v-list-tile-action>
      <v-list-tile-content><v-list-tile-title>Tutoriales</v-list-tile-title></v-list-tile-content>
</v-list-tile>

<v-divider></v-divider>

<v-list-tile :to="{path: '/politicas'}" >
      <v-list-tile-action><v-icon medium color="magrojo">file_copy</v-icon></v-list-tile-action>
      <v-list-tile-content><v-list-tile-title>Políticas de uso</v-list-tile-title></v-list-tile-content>
</v-list-tile>
<v-divider></v-divider>
<v-list-tile :to="{path: '/acercade'}" >
      <v-list-tile-action><v-icon medium color="magrojo">fas fa-user-friends</v-icon></v-list-tile-action>
      <v-list-tile-content><v-list-tile-title>Acerca de</v-list-tile-title></v-list-tile-content>
</v-list-tile>
<v-divider></v-divider>


<!--
  <v-list-tile :to="{path: '/sugerencias'}" >
        <v-list-tile-action><v-icon medium>picture_as_pdf</v-icon></v-list-tile-action>
        <v-list-tile-content><v-list-tile-title>Sugerencias</v-list-tile-title></v-list-tile-content>
</v-list-tile>

<p>Políticas</p>
<p>About us</p>
<v-list-tile :to="{path: '/provixional'}" >
      <v-list-tile-action><v-icon medium>picture_as_pdf</v-icon></v-list-tile-action>
      <v-list-tile-content><v-list-tile-title>Sugerencias</v-list-tile-title></v-list-tile-content>
</v-list-tile>-->


</v-list>



  </div>
</template>
<style >

</style>
