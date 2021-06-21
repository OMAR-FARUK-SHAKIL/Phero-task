const leftRotation = (array,rotateBy) => {
   
    for(var i = 1; i <= rotateBy; i++) {
        array.push(array.shift());
    }
    return array;
}

const array1 = [1, 2, 3, 4, 5];
console.log(array1);
leftRotation(array1,2);
console.log(array1);