// for...in

let person = {
    name: "Pedro",
    age: 17,
    weight: 79.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}

