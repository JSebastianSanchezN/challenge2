import state from './State';
import * as mutations from './Mutations';
import * as actions from './Actions';

const firebaseStore = {
    namespaced: true,
    state: state,
    actions: actions,
    mutations: mutations,
}

export default firebaseStore;