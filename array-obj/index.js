const students = [
    {name: 'emmanuel', phone: 1232343553, village: 'Ideato North'},
    {name: 'emeka', phone: 1232343253, village: 'Nsukka'},
    {name: 'divine', phone: 4432343553, village: 'Atabong'},
    {name: 'solomon', phone: 4432343773, village: 'Esit-eket'},
    {name: 'jonathan', phone: 123456789, village: 'Akoko Edo'}
]
const studentIndex = students.findIndex(student => student.phone == 123456789)

console.log(students)
let student =students[studentIndex]
student.name = 'editedname'
student.village = 'edo'
// console.log(newName)


// if (newName==)










