export default function bookReducer(state = {books: [], articles: []}, action ) {
    switch (action.type) {
        case 'FETCH_BOOKS':
            return {books: action.payload};
        case 'FETCH_ARTICLES':
            return {articles: action.payload};

    default:
        return state

    }
}