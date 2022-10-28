
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import songs from './songs';

import user from './user';

const store = new Vuex.Store({
    modules: {
        songs,
        user
    }


})

export default store