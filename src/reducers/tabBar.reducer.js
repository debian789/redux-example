const initialState = {
    index: 0,
    routes: [
        {
            key: 'shows',
            title: 'Shows'
        }, {
            key: 'actors',
            title: 'Actors'
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