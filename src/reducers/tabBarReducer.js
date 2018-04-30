export default(state, action) => {

    switch (action.type) {
        case 'selected_tab':
            return action.payload
        default:
            return {
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
    }
}