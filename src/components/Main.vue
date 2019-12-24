<template>
    <v-container>
        <v-layout text-center wrap>
            <v-flex>
                <v-row align="center">
                    <v-col class="text-center">
                        <div style="margin: 20px">
                            <v-btn @click="dialog = true" x-large color="primary">Start Game</v-btn>
                        </div>
                        <div>
                            <v-btn
                                    @click="displayStatistics = !displayStatistics"
                                    color="primary"
                                    x-large
                            >Statistics
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>

                <div v-if="displayStatistics">
                    <Statistics/>
                </div>
            </v-flex>
        </v-layout>
        <v-dialog v-model="dialog">
            <v-card>
                <v-card-title class="justify-center">Game mode</v-card-title>
                <v-card-text>
                    <v-row align="center">
                        <v-col class="text-center">
                            <div>
                                <v-btn @click="startGame('classic')" color="primary">Classic</v-btn>
                                <p>You have only one try to guess the number.</p>
                            </div>
                            <div style="margin: 20px 0">
                                <v-btn @click="startGame('unlimited')" color="primary">Unlimited</v-btn>
                                <p>You have infinite tentatives. The game only finishes when you guess the number.</p>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
    import store from "@/store";
    import Statistics from "./Statistics";

    export default {
        name: "Main",

        components: {
            Statistics
        },

        data: () => ({
            dialog: "",
            displayStatistics: false
        }),

        methods: {
            startGame(mode) {
                store.dispatch("setGameMode", mode);
                this.$router.push("/game");
            }
        }
    };
</script>

<style scoped>
    p {
        color: green;
    }
</style>
