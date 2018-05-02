const URL = 'https://api.tvmaze.com/schedule?country=US&date=2017-03-13'
const URL_PEOPLE = 'http://api.tvmaze.com/search/people?q=lauren'


export const fetchSchedule =  () => {
    return fetch(URL)
    .then(Response =>{ 
        return Promise.all([Response, Response.json()])
    })
}


export const fetchPeople =  () => {
    return fetch(URL_PEOPLE)
    .then(Response =>{ 
        return Promise.all([Response, Response.json()])
    })
}