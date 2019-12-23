<template>
  <v-container>
    <v-text-field v-model="guess" />
    <v-btn color="green darken-1" text @click="tryGuess()">Guess!</v-btn>
    {{guess}}
    {{randomNumber}}
    <div v-if="rightGuess">{{statistics}}</div>
  </v-container>
</template>

<script>
import store from "@/store";
import { mapGetters } from "vuex";

export default {
  name: "NumberRandomizer",
  computed: {
    ...mapGetters({ productList: "getProducts" })
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
  created() {
    this.randomNumber = this.randomize();
  },
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
      this.statistics.winsPer =
        (this.statistics.wins / this.statistics.losses) * 100;
      this.statistics.lossesPer = 100 - this.statistics.winsPer;
      store.dispatch("saveStatistic", this.statistics);
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
