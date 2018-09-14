let input = document.querySelector('#search-box')
// input.addEventListener('keydown', (event) => {
//   //start searching
//   let value = input.value
//   console.log(value)
//   // fetch
//   // const configuration = {
//   //   mode: 'no-cors',
//   //   headers: {
//   //     'Authorization': 'token: 4mCjTcnvDemKAQP4OXGkYu0SgNj8DY3A'
//   //   }
//   // }
//   fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=4mCjTcnvDemKAQP4OXGkYu0SgNj8DY3A')
//   .then(response => response.json())
//   .then(responseJson => console.log(responseJson))
// })

function fetchEvents() {
  // fetch request to the Ticketmaster API
  fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=4mCjTcnvDemKAQP4OXGkYu0SgNj8DY3A')
  .then(resp => resp.json())
  // .then(json => console.log(json))
  .then(json => renderEvents(json));
}

function renderEvents(json) {
  const main = document.querySelector('main')
  json._embedded.events.forEach(events => { 
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${events.name}</h2><br>`
    // const p = document.createElement('p') 
    // h2.innerHTML = `<p>${events._embedded.venues.name}</p><br>`
    main.appendChild(h2) 
    // main.appendChild(p)
  })
}
document.addEventListener('DOMContentLoaded', function() {
  fetchEvents()
})
// <h2>${json._embedded.events["0"].name._embedded.venues["0"].name}</h2>