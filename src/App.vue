<template>
<div class="page-wrapper">
  <Game msg="Welcome to my game: Dobble!"/>
</div>

</template>

<script>
import Game from './components/Game.vue'

export default {
  name: 'App',
  components: {
    Game,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Hanalei Fill', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #ae85b4;
}

ul, li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.page-wrapper {
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  background-color: #f1d318;
}

</style>
