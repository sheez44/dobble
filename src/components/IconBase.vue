<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :width="calcSize" 
    :height="calcSize" 
    :viewBox="viewBox" 
    :aria-labelledby="iconName"
    :fill="randomColor"
  >
    <title :id="iconName" lang="en">{{iconName}}</title>
    <path :d="path" />
  </svg>
</template>

<script>
export default {
    props: {
      viewBox: { type: String, default: '0 0 512 512'},
      iconName: { type: String, default: ''},
      width: { type: [Number, String], default: 18 },
      height: {type: [Number, String], default: 18 },
      iconColor: {type: String, default: 'currentColor'},
      path: { type: String, default: 'M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z'},
    },
    computed: {
    calcSize() {
      const ranNum = Math.ceil(Math.random() * 7) // Dev note: 7 random sizes or 7 random "fixed" sizes from array?

      return 5 + (ranNum * 10)
    },
    randomColor() {
      const colors = ['green', 'blue', 'red', 'deeppink', '#E95D0f', 'turquoise']
      const ranNum = Math.floor(Math.random() * colors.length)

      return colors[ranNum]
    }
  },
  // TODO fix reactive object; use it to set the correct viewbox for each icon
  inject: ["deck"],
  created() {
    console.log(this.deck)
  }
}
</script>