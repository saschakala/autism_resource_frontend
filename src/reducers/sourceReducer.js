export default function sourceReducer(state = {sources: [], tags: [], feedbacks: []}, action ) {
    switch (action.type) {
        case 'FETCH_SOURCES':
            return {
                ...state,
                tags: [...state.tags],
                feedbacks: [...state.feedbacks],
                sources: [...state.sources, action.payload]
                }
        case 'FETCH_BOOKTAGS':
            return {
                ...state,
                sources: [...state.sources],
                feedbacks: [...state.feedbacks],
                tags: [...state.tags, action.payload]
                }
        case 'FETCH_FEEDBACK':
            return {
                ...state,
                sources: [...state.sources],
                feedbacks: [...state.feedbacks],
                tags: [...state.tags, action.payload]
                }
        

    default:
        return state

    }
}