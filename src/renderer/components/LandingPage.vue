<template>
  <div id="wrapper">
    <div class="logosm">
      <img id="logo" src="static/maguare.png" alt="electron-vue" class="logosmag">
      <img id="logo" src="static/maguared.png" alt="electron-vue" class="logosmag">
    </div>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style scoped>
.logosm{
  display: grid;
  padding: 1em;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
}
.logosmag{
  width: 100%;
  margin: 0 auto;
}
</style>
