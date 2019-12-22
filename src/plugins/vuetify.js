import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import pt from 'vuetify/es5/locale/pt';
import en from 'vuetify/es5/locale/en';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: colors.red.darken2,
                accent: colors.green.darken1
            },
        }
    },
    lang: {
        locales: {en, pt},
        current: 'pt',
    },
    icons: {
        iconfont: 'fa',
    },
});
