<template>
    <ul>
      <li v-for="animal in animals" :key="animal">{{animal}}</li>
    </ul>
</template>

<script>
export default {
  name: 'Card',
  props: {
    animals: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>