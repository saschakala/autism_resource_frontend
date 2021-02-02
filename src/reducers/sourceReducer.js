export default function sourceReducer(state = {sources: [], books: [], tags: [], feedback: []}, action ) {
    switch (action.type) {
        case 'FETCH_SOURCES':
            return {...state, sources: action.payload};
        case 'FETCH_BOOKS' :
            return {...state, books: action.payload};
        case 'FETCH_BOOKTAGS':
            return {...state, tags: action.payload};
        case 'FETCH_FEEDBACK':
            return {...state, feedback: action.payload};
        case 'ADD_FEEDBACK' :
            return{
                ...state,
                feedback: [...state.feedback, action.payload]
            }
        

    default:
        return state

    }
}