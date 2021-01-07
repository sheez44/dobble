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

<style scoped lang="scss">
ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: // Dev note: is it possible to randomize the grid area? (or at least the placement of the "."")
    "icon-1 icon-2 icon-3"
    "icon-4 icon-7 icon-5"
    "icon-6 . icon-8";
}

@for $i from 1 through 8 {
  li:nth-child(#{$i}) {
    grid-area: icon-#{$i}
  }
}

button {
    background-color: transparent;
    appearance: none;
    border: none;
    outline: none;

    &:not(:disabled):hover {
      transform: scale(1.3);
      cursor: pointer
    }
    &:focus
    &:active {
      background-color: transparent;
      appearance: none;
      border: none;
      outline: none;
    }

    &:disabled {
      transform: none;
    }
  }

</style>