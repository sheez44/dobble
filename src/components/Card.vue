<template>
  <div class="card">
        <ul>
      <li v-for="animal in animals" :key="animal">{{animal}}</li>
    </ul>
  </div>
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

li {
  cursor: pointer;
}

li:hover {
  transform: scale(1.3);
}

li:not(:last-of-type) {
  margin-bottom: 1rem;
}

.card {
  background-color: #ddd;
  padding: 3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card:not(:last-of-type) {
  margin-right: 1.6rem;
}

</style>