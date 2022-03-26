let jonSnowHealth = 100

function isJonAlive() {
    if(jonSnowHealth > 0) {
        console.log(`Jon is Alive! His current health value is ${jonSnowHealth}`)
    } else {
        console.log('RIP Jon Snow!')

    }
}


const surpriseAttack = function(attack){
    jonSnowHealth -= attack
    isJonAlive()
}

const greeting = (person1, person2) => {
    console.log(`${person1} and ${person2} say hello to each other`)
}

greeting('Jon Snow', 'Ned Stark')

// Dothraki Attack
surpriseAttack(20)

// Lannister Guard
surpriseAttack(12)

// Bandits
surpriseAttack(6)

let jonSnowHealthStr = String(jonSnowHealth)
let jonSnowHealthStr2 = jonSnowHealth + ''
let jonSnowHealthStr3 = `${jonSnowHealth}`

console.log({ jonSnowHealthStr, jonSnowHealthStr2, jonSnowHealthStr3 })

const jonSnowHealthBool = Boolean(jonSnowHealth)

console.log({ jonSnowHealthBool})

const winner = 'Jamie is the winner!'

const newWinner = winner.replace('Jamie', 'Jon')

console.log({ winner, newWinner })

if(newWinner.includes('Jon')){
    console.log('replaced successfully')
}

const newWinnerLower = newWinner.toLowerCase()
console.log({ newWinnerLower})
const newWinnerSplit = newWinnerLower.split(' ')
console.log({newWinnerSplit})
const newWinnerKebab = newWinnerSplit.join('-')
console.log({ newWinnerKebab })

const rollDice = () => {
    const possibleRolls = [1, 2, 3, 4, 5, 6]
    let randomNumber = Math.floor(Math.random() * possibleRolls.length)
    return possibleRolls[randomNumber]
}

const diceMultiplier = () => {
    const firstRoll = rollDice()
    const secondRoll = rollDice()

    return firstRoll + secondRoll
}

console.log(diceMultiplier())
console.log(diceMultiplier())
console.log(diceMultiplier())
console.log(diceMultiplier())
console.log(diceMultiplier())
console.log(diceMultiplier())

console.log(rollDice())
console.log(rollDice())
console.log(rollDice())
console.log(rollDice())
console.log(rollDice())
console.log(rollDice())
console.log(rollDice())