function add (num1, num2){
    const result = num1 + num2

    return result
}

const resultOf2And2 = add(2, 2)

console.log(resultOf2And2)

const addAsArrowFn = (num1, num2) => {
    const result = num1 + num2
    
    return result
}

const resultOf2And2ArrowFnStyle = addAsArrowFn(2, 2)

console.log(resultOf2And2ArrowFnStyle)