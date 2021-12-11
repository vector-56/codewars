function sumTwoSmallestNumbers(numbers) {  
    function compare(a, b) {
     (a > b) ? 1 : (a == b) ? 0 : -1
   }
     const arrSorted = numbers.sort( (a, b) => a - b );
     const sum = arrSorted[0]+arrSorted[1]
     return sum
   }