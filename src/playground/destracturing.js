// console.log("KOKO")

// const person = {
//     name: "Hoi",
//     age: 90,
//     location: {
//         city: 'Killadelphia',
//         temp: 92
//     }
// }


// const {name="Bon", age} = person

// const {city, temp: temperature} = person.location

// console.log(`${person.name} is ${person.age}`)
// console.log(`${city}  ${temperature}`)

const book = {
    title: "Ego is the enemy",
    author: "ryan holiday",
    publisher: {
        namepub: 'penguin'
    }
}
const {namepub: publisherName="self published"} = book.publisher 

console.log(publisherName)




// Array destracturing
const address = ['1893 Hayes Ridge', "New York", "New York", "19147"]
const [, city, state="Florida"] = address
console.log(`You are in ${city} ${state}.`)


const item = ['coffee', '2', '2.5', '2.76']
const [name, , medium] = item
console.log(`${name} and ${medium}`)