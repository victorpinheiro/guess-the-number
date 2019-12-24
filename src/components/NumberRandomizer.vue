<template>
    <v-container class="text-center">
        <div class="gameModeHeader">
            <h1 v-if="gameMode === 'unlimited'">Unlimited mode</h1>
            <h1 v-else>Classic mode</h1>
        </div>
        <v-row>
            <v-col cols="4">
                <i v-if="gameMode === 'unlimited'" class="fas fa-chevron-up" :class="{activateArrow : isHigher}"/>
            </v-col>
            <v-col cols="4" style="padding: 0 90px;">
                <v-text-field type="text" v-model="guess" class="guessNumber" v-on:keyup.enter="tryGuess(gameMode)"/>
            </v-col>
            <v-col cols="4">
                <i v-if="gameMode === 'unlimited'" class="fas fa-chevron-down" :class="{activateArrow : isLower}"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn color="green darken-1" width="300" text x-large @click="tryGuess(gameMode)">Guess!</v-btn>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog">
            <div v-if="win" class="text-center dialogBg">
                <h1 style="color: green">Congratulations!</h1>
                <h2 style="color: green">You won</h2>
            </div>
            <div v-else-if="lose" class="text-center dialogBg">
                <h1 style="color: red">You lose!</h1>
                <h2 style="color: red">Secret number was {{this.randomNumber}}!</h2>
            </div>
            <Statistics/>
            <v-btn @click="restartGame()">Play again</v-btn>
        </v-dialog>
    </v-container>
</template>

<script>
    import store from "@/store";
    import Statistics from "@/components/Statistics.vue";

    export default {
        name: "NumberRandomizer",
        components: {
            Statistics
        },
        data: () => ({
            randomNumber: undefined,
            gameMode:'',
            guess: 0,
            isHigher: false,
            isLower: false,
            dialog: false,
            lose: false,
            win: false,
            statistics: {}
        }),
        created() {
            this.gameMode = store.state.gameMode;
            this.init();
        },
        methods: {
            init() {
                this.statistics = {
                    wins: 0,
                    winsPer: 0,
                    losses: 0,
                    lossesPer: 0,
                    gamesPlayed: 0,
                    tries: 0,
                    mode: ''
                };
                this.guess = 0;
                this.win = false;
                this.lose = false;
                this.statistics.gamesPlayed++;
                this.generateRandomNumber();
            },
            generateRandomNumber() {
                this.randomNumber = Math.ceil(Math.random() * 1000);
            },
            tryGuess(mode) {
                if (Number(this.guess) === this.randomNumber) {
                    this.showSuccess()
                } else {
                    mode === 'classic' ? this.showError() : this.compareNumbers();
                }
            },
            showSuccess() {
                this.statistics.wins++;
                this.win = true;
                store.dispatch("saveStatistic", this.statistics);
                this.dialog = true;
            },
            showError() {
                this.statistics.losses++;
                this.lose = true;
                store.dispatch("saveStatistic", this.statistics);
                this.dialog = true;
            },
            compareNumbers() {
                this.statistics.tries++;
                if (this.guess > this.randomNumber) {
                    this.isLower = true;
                } else {
                    this.isHigher = true;
                }

                setTimeout(() => {
                    this.isHigher = false;
                    this.isLower = false;
                }, 1500);
            },
            restartGame() {
                this.init();
                this.dialog = false;
            }
        }
    }
    ;
</script>


<style scoped>
    .guessNumber {
        transform: scale(5);
        transform-origin: left;
        outline: none;
        max-width: 40px;
    }

    .gameModeHeader {
        color: green;
        text-shadow: 1px 1px 3px green;
    }

    .activateArrow {
        transition: opacity 0.5s ease-in;
        opacity: 1;
        color: green;
        text-shadow: 1px 1px 5px green;
    }

    .dialogBg {
        background: #424242;
    }

    .row {
        margin: 30px 0;
    }

    i {
        transition: opacity 0.5s ease-out;
        color: green;
        transform: scale(4);
        opacity: 0;
    }
</style>
