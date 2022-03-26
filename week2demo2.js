const person = {
    firstName: 'Connor',
    lastName: 'Prentice',
    age: 28
}

// console.log(person)

// console.log(person.firstName)
// console.log(person['firstName'])

const meal = {
    appetizer: 'Chips & Salsa',
    entree: 'Al pastor tacos',
    dessert: 'Tres Leches',
    drink: 'Dr. Pepper'
}

const { appetizer, entree } = meal

// console.log(appetizer)
// console.log(entree)

const { drink:bestSodaEver } = meal
// console.log(bestSodaEver)

for(let key in person) {
    console.log({ key, value: person[key] })
}

person.job = 'Software Developer'

person['pets'] = ['Suki', 'Winston']

// console.log(person)

delete person.job

// console.log(person)
