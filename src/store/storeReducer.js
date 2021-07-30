
const types = {
    PUSH_GAME_SCORE : "PUSH_GAME_SCORE",
    CHANGE_USER_NAME : "CHANGE_USER_NAME"
}

const initialStore = {
    gameRecord : [],
    playerName : "Guest",
}

const storeReducer = (state, action) => {
    switch(action.type) {
        case "PUSH_GAME_SCORE":
            state.gameRecord.push({points : action.payload.score, totalPoints : action.payload.totalPoints})
            return state;
        case "CHANGE_USER_NAME":
            state.playerName = action.payload.playerName;
            return state;
        default:
            return state;
    }
}

export { initialStore, types };
export default storeReducer;