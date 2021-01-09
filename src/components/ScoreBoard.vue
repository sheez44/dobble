<template>
    <div class="scoreboard-wrapper">
        <button @click="startGame" scores="score">click to start game</button>
        <div class="timer">
            {{timer}}
        </div>

        <p>Your current score: {{ this.scores.scores }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timer: 10,
            interval: ""
        }
    },
    emits: ["start-game"],
    methods: {
        startGame() {
            this.$emit("start-game")

            this.startTimer()
        },
        startTimer() {
            clearInterval(this.interval)

            this.interval = setInterval(() => {
            if (this.timer === 0) {
                clearInterval(this.interval)                
            } else {
                this.timer--
            }             
            }, 1000)
        }
    },
    props: {
        scores: Object
    }
}
</script>  