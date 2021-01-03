const test = ["duck", "ape", "goose", "rat", "dog", "dragon", "firefly", "mouse", "raccoon", "cat", "elephant", "giraffe", "lion", "pig", "boar"]

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function fillCards() {
  let card1 = []
  let card2 = []

  while(card1.length !== 4) {
    const ranNum = Math.ceil(Math.random() * test.length - 1)

    if(card1.length === 0) {
        card1.push(test[ranNum])
        card2.push(test[ranNum])
    } else if(!card1.includes(test[ranNum])) {
        card1.push(test[ranNum])
    } 
  }

  while(card2.length !== 4) {
    const ranNum = Math.ceil(Math.random() * test.length - 1)

    if(!card1.includes(test[ranNum]) && !card2.includes(test[ranNum])) {
        card2.push(test[ranNum])
    }
  }

  console.log(shuffle(card1))
  console.log(shuffle(card2))
} 

fillCards()