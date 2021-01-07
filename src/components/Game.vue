<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button @click="startGame">click to start game</button>
    <div class="card-wrapper">
      <Card v-for="(deck, index) in cardDecks"
        :cards="deck" 
        :cardToFind="cardToFind" 
        :cardIndex="index" 
        :key="index" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import { cards } from "@/cards";

export default {
  name: 'Game',
  props: {
    msg: String
  },
  created() {
    this.shuffle()
  },
  components: {
    Card,
  },
  data() {
    return {
        cards,
        cardDecks: [],
        amountOfCards: 8,
        amountOfDecks: 2,
        cardToFind: "ds",
    };
  },
  methods: {
    startGame() {
      this.shuffle()
    },
    shuffle() {
      let fullDeck = []
      let used = []

      for(let i = 0; i < this.amountOfDecks; i++) {
        let deck = []
        
        if(i > 0) {
          // pick a random card from the last deck; this will be the card the user needs to find
          const randomPrevCardIndex = Math.abs(Math.ceil(Math.random() * this.amountOfCards - 1))
          const randomPrevCard = fullDeck[i - 1][randomPrevCardIndex]
          // pre-fill the new deck with the random card from the previous deck
          deck = [...deck, randomPrevCard]
          // add the card to find card to the global state
          this.cardToFind = randomPrevCard
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

      this.cardDecks = fullDeck
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
