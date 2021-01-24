export default function sourceReducer(state = {sources: []}, action ) {
    switch (action.type) {
        case 'FETCH_SOURCES':
            return {sources: action.payload};

    default:
        return state

    }
}