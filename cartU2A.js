///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
// Step 1 Create Function
// Step 2 Get total price
// Step 3 Call function from reduce
const cartPrice = 0
const summedPrice = cart.reduce((previousValue, currentValue) => previousValue + currentValue.price, cartPrice)
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    // 100 * .06 = 6
    const taxTotal = cartTotal * tax
    const priceBeforeCoupon = taxTotal + cartTotal
    const finalPrice = priceBeforeCoupon - couponValue
    return finalPrice
}
console.log(calcFinalPrice(summedPrice, 10,.06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
[name] STRING: To know the customer more personally, It's a text value so I chose a string
[phone number] INTEGER:To contact the customer, It's a number so it's an integer
[email address] STRING: To contact the customer, It's a text value so I chose a string
[address] STRING: To send coupons to the customer, It's a text value so I chose a string
[date of birth] STRING: To send them a birthday wish, It's a date so I chose a string
[card number] INTEGER: To charge them for the food, It's a number so it's an integer
[favorite dish] STRING: Because its important, It's a text value so I chose a string

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: 'Connor', 
    phoneNumber: 9999999999,
    emailAddress: 'johndoe420@example.com',
    address: '1234 Elm St',
    dateOfBirth: '01/05/1994',
    cardNumber: 1111222244445555,
    favoriteDish: 'Burrito'
}
console.log(customer)