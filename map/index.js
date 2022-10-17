const students = ['emeka', 'solomon', 'jonathan', 'emmanuel']

// const upperCaseNames = students.map(function(value) {
//     return value.charAt(0).toUpperCase() + value.slice(1)
// })

const upperCaseNames = students.map(value => value.charAt(0).toUpperCase() + value.slice(1))

console.log(upperCaseNames)


