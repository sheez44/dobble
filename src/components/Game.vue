<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="card-wrapper">
      <Card v-for="(deck, index) in createCards" :cards="deck" :key="index" />
    </div>


  </div>
</template>

<script>
import Card from "@/components/Card";
import { cards } from "@/cards"

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
        cards,
        cardDecks: [],
        amountOfCards: 8,
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
          const randomPrevCard = Math.abs(Math.ceil(Math.random() * this.amountOfCards - 1))
          deck = [...deck, fullDeck[i - 1][randomPrevCard]]
        }

        while(deck.length !== this.amountOfCards) {
          const randomCard = Math.abs(Math.ceil(Math.random() * this.cards.length - 1))

          if(!deck.includes(this.cards[randomCard].name) && !used.includes(randomCard)) {
            used = [...used, randomCard];
            deck = [...deck, this.cards[randomCard]]
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
h1 {
  margin: 0 0 2rem;
}

.card-wrapper {
  display: flex;
  justify-content: center;
}

.card-wrapper ul:not(:last-of-type) {
  margin-right: 5rem;
}
</style>
