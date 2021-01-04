<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="card-container">
      <Card v-for="deck in cardDecks" :animals="deck" :key="deck" />
    </div>


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
    console.log(this.createUniqueCard(this.animals))
  },
  components: {
    Card,
  },
  computed: {
    randomArray(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
          }
      return a;
    }
  },
  data: function() {
    return {
        test: "test", 
        animals: ["duck", "ape", "goose", "rat", "dog", "dragon", "firefly", "mouse", "raccoon", "cat", "elephant", "giraffe", "lion", "pig", "boar"],
        cardDecks: [],
    };
  },
  methods: {
    createUniqueCard(data, cards, decks) {
      const amountOfCards = cards || 4
      const amountOfDecks = decks || 2
      let fullDeck = []

      for(let i = 0; i < amountOfDecks; i++) {
        test(data, amountOfCards, i)
      }

      function test(data, amountOfCards, index) {
        let card = []
        let isUsed = false

        while(card.length != amountOfCards && index === 0) {
          const ranNum = Math.abs(Math.ceil(Math.random() * data.length - 1))

          if(!card.includes(data[ranNum])) {
            card.push(data[ranNum])
          }
        }

        while(card.length != amountOfCards && index !== 0) {
          const ranNum = Math.abs(Math.ceil(Math.random() * amountOfCards - 1))
          const ranNum2 = Math.abs(Math.ceil(Math.random() * data.length - 1))
          const randomPick = fullDeck[fullDeck.length - 1][ranNum]

          if(!isUsed) {
            isUsed = true
            card.push(randomPick)
          } else if(!card.includes(data[ranNum2]) && !card.includes(fullDeck[fullDeck.length - 1])) {
            card.push(data[ranNum2])
          } else {
            console.log("hellp")
          }
        }

        fullDeck = [...fullDeck, card]
      }
      
      return fullDeck
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.card-container {
  display: flex;
  justify-content: center;
}
</style>
