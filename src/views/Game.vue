<template>
    <v-container>
        <NamePrompt/>
        <NumberRandomizer/>
    </v-container>
</template>

<script>
    import NamePrompt from '@/components/NamePrompt.vue';
    import NumberRandomizer from '@/components/NumberRandomizer.vue';

    export default {
        name: 'game',
        components: {
            NamePrompt,
            NumberRandomizer
        }
    }
</script>
