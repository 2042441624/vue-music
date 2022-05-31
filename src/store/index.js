
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import songs from './songs';



const store = new Vuex.Store({
    modules:{
        songs
    }


})

export default store