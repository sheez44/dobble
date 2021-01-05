<template>
    <ul>
      <li v-for="card in cards" :key="card.id">{{card}}</li>
    </ul>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cards: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>