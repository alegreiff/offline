<template>
  <div>
    <v-list dense one-line>
      <v-list-tile :to="{path: '/'}">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Inicio</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    <!-- <v-subheader inset>Maguarés</v-subheader> -->
    <img id="logo" src="static/maguare.png" alt="electron-vue" class="logomini">
    <!-- MAGUARÉ GRUPO VIDEOS -->
        <v-list-group no-action>
        <v-list-tile slot="activator">
          <v-list-tile-action>
            <v-icon>music_video</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Videos</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{name: 'vid', params: { id: ''}}" exact>
        <v-list-tile-content>
            <v-list-tile-title>Todos los videos</v-list-tile-title>
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
        <v-list-tile :to="{name: 'vid', params: { id: 'vidKaraokes'}}">
        <v-list-tile-content>
            <v-list-tile-title>Karaokes Maguaré</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'vid', params: { id: 'vidCeiba'}}">
        <v-list-tile-content>
            <v-list-tile-title>Karaokes Maguaré en La Ceiba</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'vid', params: { id: 'vidAllKar'}}">
        <v-list-tile-content>
            <v-list-tile-title>Todos los karaokes</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'vid', params: { id: 'vidSweet'}}">
        <v-list-tile-content>
          <v-list-tile-title>Sweet songs fi piknini </v-list-tile-title>
          <v-list-tile-sub-title>Canciones dulces para niños</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        </v-list-group>
<!-- MAGUARÉ GRUPO AUDIOS -->
    <v-list-group no-action>
    <v-list-tile slot="activator">
      <v-list-tile-action>
        <v-icon>audiotrack</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Audios</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile :to="{name: 'coleccion', params: { id: ''}}" exact>
    <v-list-tile-content>
        <v-list-tile-title>Todos los audios</v-list-tile-title>
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
    <v-list-tile :to="{name: 'coleccion', params: { id: 'audiosCeiba'}}">
      <v-list-tile-content>
        <v-list-tile-title>Maguaré en La Ceiba</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile :to="{name: 'coleccion', params: { id: 'audiosSweetsongs'}}">
      <v-list-tile-content>
        <v-list-tile-title>Sweet songs fi piknini </v-list-tile-title>
        <v-list-tile-sub-title>Canciones dulces para niños</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    </v-list-group>

<!-- MAGUARED-->

<!-- MAGUARÉ LIBROS -->
<v-list-tile :to="{path: '/librosmaguare'}" >
    <v-list-tile-action><v-icon>picture_as_pdf</v-icon></v-list-tile-action>
    <v-list-tile-content><v-list-tile-title>Cuentos de Maguaré en La Ceiba</v-list-tile-title></v-list-tile-content>
</v-list-tile>
<!-- MAGUARÉ INTERACTIVOS-->
<v-list-tile :to="{path: '/interactivos'}" >
    <v-list-tile-action><v-icon>extension</v-icon></v-list-tile-action>
    <v-list-tile-content><v-list-tile-title>Interactivos</v-list-tile-title></v-list-tile-content>
  </v-list-tile>


<!-- MAGUARÉ DESCARGABLES -->
<v-list-tile :to="{path: '/descargablesmaguare'}" >
    <v-list-tile-action><v-icon>picture_as_pdf</v-icon></v-list-tile-action>
    <v-list-tile-content><v-list-tile-title>Descargables</v-list-tile-title></v-list-tile-content>
</v-list-tile>


<!-- <v-subheader inset>MaguaRED</v-subheader> -->
<img id="logo" src="static/maguared.png" alt="electron-vue" class="logominim">
  <v-list-tile :to="{path: '/sugerencias'}" >
        <v-list-tile-action><v-icon>picture_as_pdf</v-icon></v-list-tile-action>
        <v-list-tile-content><v-list-tile-title>Sugerencias</v-list-tile-title></v-list-tile-content>
</v-list-tile>

</v-list>



  </div>
</template>
<style >
  img.logomini{
    max-height: 60px;
    margin: 0 auto;
    display: block;
  }
  img.logominim{
    max-height: 40px;
    margin: 0 auto;
    display: block;
  }
</style>
