function returnEvenValues(array) {
    let evenNums = [];
    for(let i=0; i < array.length;) {
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
    }
    console.log(evenNums)
}

returnEvenValues([1,3,4,5,6]);