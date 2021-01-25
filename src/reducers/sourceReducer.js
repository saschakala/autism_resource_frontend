export default function sourceReducer(state = {sources: [], tags: [], feedback: []}, action ) {
    switch (action.type) {
        case 'FETCH_SOURCES':
            return {
                ...state,
                tags: [...state.tags],
                feedback: [...state.feedback],
                sources: [...state.sources, action.payload]
                }
        case 'FETCH_BOOKTAGS':
            return {
                ...state,
                sources: [...state.sources],
                feedback: [...state.feedback],
                tags: [...state.tags, action.payload]
                }
        case 'FETCH_FEEDBACK':
            return {
                ...state,
                sources: [...state.sources],
                tags: [...state.tags],
                feedback: [...state.feedback, action.payload]
                }
        

    default:
        return state

    }
}