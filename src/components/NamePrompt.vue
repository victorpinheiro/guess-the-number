<template>
  <v-container>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Enter your name</v-card-title>

        <v-card-text>
          <v-text-field v-model="playerName" placeholder="name" title="input" @keyup.enter="setPlayerName()"/>
        </v-card-text>

        <v-card-actions>
          <v-spacer/>
          <v-btn color="green darken-1" text @click="setPlayerName()">Start</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import store from "@/store";

export default {
  name: "Main",

  data: () => ({
    dialog: true,
    playerName: ""
  }),

  methods: {
    setPlayerName() {
      store.dispatch("registerPlayer", this.playerName);
      this.dialog = false;
    }
  }
};
</script>
