import state from './State';
import * as mutations from './Mutations';
import * as actions from './Actions';
import * as getters from './Getters';

const userStore={
    namespaced: true,
    state: state,
    actions: actions,
    mutations: mutations,
    getters: getters
}
export default userStore;