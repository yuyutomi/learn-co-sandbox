let input = document.querySelector('#search-box')
input.addEventListener('keydown', (event) => {
  //start searching
  let value = input.value
  // fetch
  const configuration = {
    mode: 'no-cors',
    headers: {
      'Authorization': 'token: 523100c7b6fd60d6096e0db869d2d3fdb6c2a6b1'
    }
  }
  fetch('https://api.github.com/search/repositories?q=' + value)
  .then(response => response.json())
  .then(responseJson => console.log(responseJson))
})