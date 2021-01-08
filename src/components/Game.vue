<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3 v-if="testMode">{{ cardToFind.name }}</h3>

    
    <score-board @start-game="startGame()"></score-board>
    <div class="card-wrapper" v-if="gameState">
      <Card v-for="(deck, index) in cardDeck"
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
import { computed } from "vue"
import ScoreBoard from './ScoreBoard.vue';

export default {
  name: 'Game',
  props: {
    msg: String
  },
  created() {

  },
  components: {
    Card,
    ScoreBoard,
  },
  data() {
    return {
        cards,
        cardDeck: [],
        amountOfCards: 8,
        amountOfDecks: 2,
        cardToFind: "",
        testMode: true,
        gameState: false,
    };
  },
  methods: {
    startGame() {
      this.createDeck()
      this.gameState = true
    },
    createDeck() {
      let fullDeck = []
      let used = []

      for(let i = 0; i < this.amountOfDecks; i++) {
        let deck = []
        
        if(i > 0) {
          // pick a random card from the last deck; this will be the card the user needs to find
          const randomPrevCardIndex = Math.floor(Math.random() * this.amountOfCards)
          const randomPrevCard = fullDeck[i - 1][randomPrevCardIndex]
          // pre-fill the new deck with the random card from the previous deck
          deck = [...deck, randomPrevCard]
          // add the card to find card to the global state
          this.cardToFind = randomPrevCard
        }

        while(deck.length !== this.amountOfCards) {
          const randomCard = Math.floor(Math.random() * this.cards.length)

          if(!deck.includes(this.cards[randomCard].name) && !used.includes(randomCard)) {
            used = [...used, randomCard];
            deck = [...deck, this.cards[randomCard]]
          }
        }

        // since cardToFind is always at index 0, we need to shuffle it first    
        fullDeck = [...fullDeck, this.shuffleArray(deck)]
      }

      this.cardDeck = fullDeck
    },
    shuffleArray(array) {
      let curId = array.length;
      // There remain elements to shuffle
      while (0 !== curId) {
          // Pick a remaining element
          let randId = Math.floor(Math.random() * curId);
          curId -= 1;
          // Swap it with the current element.
          let tmp = array[curId];
          array[curId] = array[randId];
          array[randId] = tmp;
      }
      return array;
    },
  },
  provide() {
    return {
      // TODO fix reactive object
      deck: computed(() =>this.cardDeck)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 0 0 2rem;
}

.card-wrapper {
  display: flex;
  justify-content: center;

  ul:not(:last-of-type) {
    margin-right: 5rem;
  }
}

button {
  margin-bottom: 1.5rem;
}

</style>
