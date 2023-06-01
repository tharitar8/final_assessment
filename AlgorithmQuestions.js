
// To run this file
// type "node AlgorithmQuestions.js" on terminal in current file directory 


// TASK 1 

const isPalindrome = (word) => {
	let start = 0
	let end = word.length - 1
	while (start < end) {
		if (word[start] !== word[end]) {
			return false
		}
		start++
		end--
	}
	return true
}


console.log(isPalindrome("abcdcba")) // TRUE 
console.log(isPalindrome("aba")) // TRUE 
console.log(isPalindrome("c")) // TRUE
console.log(isPalindrome("radar")) // TRUE
console.log(isPalindrome("level")) // TRUE 
console.log(isPalindrome("pencil")) // TRUE
console.log(isPalindrome("ark")) // TRUE
console.log(isPalindrome("aa")) // TRUE



// TASK 2

//  const isMissing = (arrayInput) => {
//     const missing = 0
//     return `${missing} is missing`
// }

// check negative number first
// looks for the biggest number in the array.
// If the biggest number is not bigger than the number of items in the array means no numbers are missing
// so  "nothing is missing".
// If the biggest number is bigger than the number of items it means there might be a number missing. So starts check from 1 and checks every number up to the biggest number to see if it's in the array.
// The first number it finds that's not in the array is the missing number, so it says that number "is missing".
// If it checks all the numbers up to the biggest number and doesn't find any missing numbers, it says "nothing is missing".

const isMissing = (nums) => {
	let max = 0
	for (let missingNum = 0; missingNum < nums.length; missingNum++) {
		if (nums[missingNum] !== 'number' || nums[missingNum] <= 0) {
			throw new Error('Invalid input, non-numeric value detected')
		}
		if (nums[missingNum] > max) {
			max = nums[missingNum]
		}
	}

	if (max <= nums.length) {
		return 'nothing is missing'
	}

	for (let missingNum = 1; missingNum <= max; missingNum++) {
		if (!nums.includes(missingNum)) {
			return `${missingNum} is missing`
		}
	}

	return 'nothing is missing'
}


console.log(isMissing([1, 2, 3, 4, 5])) // nothing is missing 
console.log(isMissing([4,5,1,3, 5, 6])) // 2 is missing 
console.log(isMissing([ 1, 3, 7, 5, 6, 2 ])) // 4 is missing
console.log(isMissing([4,5,-1,3, 5])) // THROW ERROR Invalid input, non-numeric value detected 
console.log(isMissing([ 1, 3, 7, 5, 6, 2 ])) // THROW ERROR Invalid input, non-numeric value detected
