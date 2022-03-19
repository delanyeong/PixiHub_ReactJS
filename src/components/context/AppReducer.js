// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            };
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (props) => props.id !== action.payload
                ),
            };
        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (props) => props.id !== action.payload.id
                ),
                watched: [action.payload, ...state.watched],
            };
        case "REMOVE_FROM_WATCHED":
            return {
                ...state,
                watched: state.watched.filter(
                    (props) => props.id !== action.payload
                    )
            }
        case "CLEAR":
            return {
                ...state,
                watched: [],
                watchlist: []
            }
        default:
            return state;
    }
}