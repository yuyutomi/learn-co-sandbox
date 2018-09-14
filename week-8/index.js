// async request
let data = fetch('https://api.github.com/users/mirandamon').then((response) => {
 return response.json()
}).then((responseJSON) => console.log(responseJSON))

console.log(responseJSON.followers)
console.log(data)