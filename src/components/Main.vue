<template>
    <v-container>
        <v-layout text-center wrap>
            <v-flex mb-4>
                <v-card>
                    <h2>Guess the number</h2>
                    <v-btn @click="enter()" color="primary" large>Start Game</v-btn>
                    <v-btn @click="displayStatistics = !displayStatistics" color="primary" large>Statistics</v-btn>
                </v-card>
                <div v-if="displayStatistics">
                    <Statistics/>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Statistics from './Statistics'

    export default {
        name: 'Main',

        components: {
            Statistics
        },

        data: () => ({
            playerName: "",
            displayStatistics: false
        }),

        methods: {
            enter() {
                this.$router.push('/game')
            }
        }
    };
</script>
