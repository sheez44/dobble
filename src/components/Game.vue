<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <Card v-for="deck in cardDecks" :animals="deck" :key="deck" />

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
    this.createUniqueCard(this.animals)
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

      for(let i = 0; i < amountOfDecks; i++) {
          let card = []
          
          if(this.cardDecks.length > 0) {
            const ranNum = Math.ceil(Math.random() * amountOfCards - 1)
            card.push(this.cardDecks[this.cardDecks.length - 1][ranNum])
          }

          while(card.length !== amountOfCards) {
          const ranNum = Math.ceil(Math.random() * data.length - 1)

          if(card.length === 0) {
              card.push(data[ranNum])
          } else if(!card.includes(data[ranNum])) {
              card.push(data[ranNum])
          } 
        }

        this.cardDecks.push(card)
      }    
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
