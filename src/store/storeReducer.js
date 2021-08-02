
const types = {
    PUSH_GAME_SCORE : "PUSH_GAME_SCORE",
    DELETE_GAME_SCORE : "DELETE_GAME_SCORE"
}

const initialStore = {
    gameRecord : [],
}

const storeReducer = (state, action) => {
    switch(action.type) {
        case "PUSH_GAME_SCORE":
            state.gameRecord.push({points : action.payload.score, totalPoints : action.payload.totalPoints})
            return state;
        case "DELETE_GAME_SCORE":
            state.gameRecord = [];
            return state;
        default:
            return state;
    }
}

export { initialStore, types };
export default storeReducer;