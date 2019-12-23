<template>
  <v-container>
    <v-text-field v-model="guess" />
    <v-btn color="green darken-1" text @click="tryGuess()">Guess!</v-btn>
    {{guess}}
    {{randomNumber}}

    <div v-if="rightGuess">
        {{statistics}}
    </div>
  </v-container>
</template>

<script>
export default {
  name: "NumberRandomizer",
  created() {
    this.randomNumber = this.randomize();
  },
  data: () => ({
    randomNumber: undefined,
    guess: 0,
    rightGuess: false,
    statistics: {
      wins: 0,
      winsPer: 0,
      losses: 0,
      lossesPer: 0,
      gamesPlayed: 0
    }
  }),
  methods: {
    randomize() {
      return Math.ceil(Math.random() * 1000);
    },
    tryGuess() {
      Number(this.guess) === this.randomNumber
        ? this.showSuccess()
        : this.compareNumbers();
    },
    showSuccess() {
      // eslint-disable-next-line no-console
      console.log("success");
      this.statistics.gamesPlayed++;
      this.statistics.wins++;
      this.statistics.winsPer = (this.statistics.wins/this.statistics.losses) * 100;
      this.statistics.lossesPer = 100 - this.statistics.winPer;
      this.rightGuess = true;
    },
    compareNumbers() {
      this.statistics.losses++;
      // eslint-disable-next-line no-console
      this.guess > this.randomNumber
        ? // eslint-disable-next-line no-console
          console.log("menor")
        : // eslint-disable-next-line no-console
          console.log("maior");
    }
  }
};
</script>

<style scoped>
</style>
