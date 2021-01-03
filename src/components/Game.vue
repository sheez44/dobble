<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ test }}</p>
    <Card :animals="animals" />
  </div>
</template>



<script>
import Card from "@/components/Card";

export default {
  name: 'Game',
  props: {
    msg: String
  },
  components: {
    Card,
  },
  data: function() {
  return {
      test: "test", 
      animals: ["duck", "ape", "goose", "rat", "dog", "dragon", "firefly", "mouse", "raccoon", "cat", "elephant", "giraffe", "lion", "pig", "boar"]
  };
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
