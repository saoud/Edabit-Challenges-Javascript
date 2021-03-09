//Write a function that converts hours into seconds.
//https://edabit.com/challenge/6AnQqiEjkJdZrWhPS

// Examples
// howManySeconds(2) ➞ 7200
// howManySeconds(10) ➞ 36000
// howManySeconds(24) ➞ 86400
// 60 seconds in a minute, 60 minutes in an hour

function howManySeconds(hours) {
	minutes = hours * 60
    seconds = minutes * 60
    return seconds
}