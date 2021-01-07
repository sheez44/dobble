<template>
    <ul>
      <li v-for="card in cards" :key="card.id">
        <button v-if="cardIndex === 0" disabled><iconBase :iconName="card.name" :path="card.svg"></iconBase></button>
        <button v-else @click="checkCard(card)"><iconBase :iconName="card.name" :path="card.svg"></iconBase></button>
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
    cards: Object,
    cardIndex: Number,
    cardToFind: Object
  },
  methods: {
    checkCard(card) {
      if(card.name === this.cardToFind.name) {
        console.log("its a match")
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

li button:not(:disabled):hover {
  transform: scale(1.3);
  cursor: pointer
}

li button,
li button:focus
li button:active {
  background-color: transparent;
  appearance: none;
  border: none;
  outline: none;
}

li button:disabled {
  background-color: none;
}

li button:disabled:hover {
  transform: none;
}
</style>