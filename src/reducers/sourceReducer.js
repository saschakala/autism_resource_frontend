export default function sourceReducer(state = {sources: [], tags: [], feedback: []}, action ) {
    switch (action.type) {
        case 'FETCH_SOURCES':
            return {sources: action.payload};
        case 'FETCH_BOOKTAGS':
            return {tags: action.payload};
        case 'FETCH_FEEDBACK':
            return {feedback: action.payload};
        case 'ADD_FEEDBACK' :
            return{
                ...state,
                feedback: [...state.feedback, action.payload]
            }
        

    default:
        return state

    }
}