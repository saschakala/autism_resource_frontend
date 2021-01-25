export default function sourceReducer(state = {sources: [], tags: []}, action ) {
    switch (action.type) {
        case 'FETCH_SOURCES':
            return {
                tags: [...state.tags],
                sources: [...state.sources, action.payload]
                }
        case 'FETCH_BOOKTAGS':
            return {
                sources: [...state.sources],
                tags: [...state.tags, action.payload]
                }

    default:
        return state

    }
}