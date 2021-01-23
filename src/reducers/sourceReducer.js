export default function sourceReducer(state = {sources: []}, action ) {
    switch (action.type) {
        case 'FETCH_BOOKS':
            return {sources: action.payload}

    default:
        return state

    }
}