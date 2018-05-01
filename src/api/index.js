const URL = 'https://api.tvmaze.com/schedule?country=US&date=2017-03-13'

export default () => {
    return fetch(URL)
    .then(Response =>{ 
        return Promise.all([Response, Response.json()])
    })
}