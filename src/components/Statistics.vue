<template>
    <v-data-table :headers="headers" :items="generalStatistics" hide-default-footer :items-per-page="generalStatistics.length" class="elevation-1"/>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Statistics",
        computed: {
            ...mapGetters({generalStatistics: "getStatistics"})
        },
        data: () => ({
            headers: [
                {
                    text: 'Player Name',
                    align: 'left',
                    sortable: true,
                    value: 'player',
                }, {
                    text: 'Wins',
                    align: 'left',
                    sortable: true,
                    value: 'wins',
                }, {
                    text: 'Losses',
                    align: 'left',
                    sortable: true,
                    value: 'losses',
                }
            ]
        })
    };
</script>

<style scoped>
</style>
