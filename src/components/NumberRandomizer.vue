<template>
    <v-container>
        <v-text-field v-model="guess"/>
        <v-btn @click="tryGuess()">Guess!</v-btn>
        {{guess}}
        {{randomNumber}}
    </v-container>
</template>

<script>
    export default {
        name: "NumberRandomizer",
        created() {
            this.randomNumber = this.randomize()
        },
        data: () => ({
            randomNumber: undefined,
            guess: 0,
            statistics: {
                wins: 0,
                losses: 0,
                gamesPlayed: 0,
            },
        }),
        methods: {
            randomize() {
                return Math.ceil(Math.random() * 1000)
            },
            tryGuess() {
                Number(this.guess) === this.randomNumber ? this.showSuccess() : this.compareNumbers();
            },
            showSuccess() {
                // eslint-disable-next-line no-console
                console.log('success');
                this.statistics.gamesPlayed++;
                this.statistics.wins++;
                // eslint-disable no-console
                console.log('statistics: ', this.statistics)
                console.log('wins%: ', this.statistics.wins * 100)
                console.log('losses%: ', this.statistics)
            },
            compareNumbers() {
                this.statistics.losses++;
                // eslint-disable-next-line no-console
                this.guess > this.randomNumber ? console.log('menor') : console.log('maior')
            }

        }
    }
</script>

<style scoped>

</style>
