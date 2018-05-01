const initialState = {
    index: 0,
    routes: [
        {
            key: 'article',
            title: 'Article'
        }, {
            key: 'contact',
            title: 'Contact'
        }
    ]

}

export default(state = initialState, action) => {
    switch (action.type) {
        case 'selected_tab':
          return action.payload
        default:
            return state
    }
}