<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <Card v-for="(deck, index) in createCards" :animals="deck" :key="index" />
    
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: 'Game',
  props: {
    msg: String
  },
  mounted() {
    
  },
  components: {
    Card,
  },
  data: function() {
    return {
        test: "test", 
        animals: ["duck", "ape", "goose", "rat", "dog", "dragon", "firefly", "mouse", "raccoon", "cat", "elephant", "giraffe", "lion", "pig", "boar"],
        cardDecks: [],
        amountOfCards: 4,
        amountOfDecks: 2
    };
  },
  /* eslint-disable */
  computed: {
    createCards() {
      let fullDeck = []
      let used = []

      for(let i = 0; i < this.amountOfDecks; i++) {
        const deck = []
        
        if(i > 0) {
          const randomPrevAnimal = Math.abs(Math.ceil(Math.random() * this.amountOfCards - 1))
          deck = [...deck, fullDeck[i - 1][randomPrevAnimal]]
        }

        while(deck.length !== this.amountOfCards) {
          const randomAnimal = Math.abs(Math.ceil(Math.random() * this.animals.length - 1))

          if(!deck.includes(this.animals[randomAnimal]) && !used.includes(randomAnimal)) {
            used = [...used, randomAnimal];
            deck = [...deck, this.animals[randomAnimal]]
          }
        }

        fullDeck = [...fullDeck, deck]
      }

      return fullDeck
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
