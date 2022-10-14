export const addFile = (state, value) => {
    state.files = [...state.files, value];
};

export const setPercentage = (state, value) => {
    state.percentage=value;
}

export const deleteFile=(state,value)=>{
    const deleted=state.files.indexOf(value)
    const meh = state.files.splice(deleted, 1)
}