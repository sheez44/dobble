<template>
    <ul>
      <li v-for="card in cards" :key="card.id">
        <IconBase :iconName="card.name" :path="card.svg" />
      </li>
    </ul>
</template>

<script>
import IconBase from "@/components/IconBase";

export default {
  name: 'Card',
  components: {
    IconBase,
  },
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

li {
  cursor: pointer;
}

li:hover {
  transform: scale(1.3);
}
</style>