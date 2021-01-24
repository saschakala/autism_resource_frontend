export default function ArticleReducer(state = {articles: []}, action ) {
    switch (action.type) {
        case 'FETCH_ARTICLES':
            return {articles: action.payload}

    default:
        return state

    }
}