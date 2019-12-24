<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar flat>
                <v-spacer/>
                <v-toolbar-title>
                    <router-link to="/" style="color: white">
                        <b>Guess the Number</b>
                    </router-link>
                </v-toolbar-title>
                <v-spacer/>
            </v-toolbar>
        </v-app-bar>
        <v-content>
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </v-content>
    </v-app>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "App"
    });
</script>


<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.8s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    * {
        text-decoration: none;
    }
</style>
