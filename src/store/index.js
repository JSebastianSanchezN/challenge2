import {createStore} from 'vuex';
import userStore from './user';
import firebaseStore from './firebase';

export default createStore({
    modules:{
        user:userStore,
        storage: firebaseStore,
    }
})