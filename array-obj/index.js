let students = localStorage.getItem('students') ?
  JSON.parse(localStorage.getItem('students')) : []

let editMode = false
let indexToEdit = undefined


function submitForm(e) {
  const name = document.getElementById('name').value
  const phone = document.getElementById('phone').value
  const village = document.getElementById('village').value

  const obj = {
    name: name,
    phone: phone,
    village: village
  } /* ES5 */
  // const obj = { name, phone, village } ES6

  if (editMode) {
    students[indexToEdit] = obj
  } else {
    students.push(obj)
  }


  localStorage.setItem('students', JSON.stringify(students))

  displayData(students)
  reset()

}

function editStudent(i) {
  editMode = true
  indexToEdit = i
  const student = students[i]

  document.getElementById('name').value = student.name
  document.getElementById('phone').value = student.phone
  document.getElementById('village').value = student.village
}

function deleteStudent(i) {
  students = students.filter((student, index) => index !== i )
  localStorage.setItem('students', JSON.stringify(students))
  displayData(students)
}


function reset() {
  editMode = false

  document.getElementById('name').value = ''
  document.getElementById('phone').value = ''
  document.getElementById('village').value = ''
}

function displayData(data) {

  let el = '<div class="items">'
  data.forEach((item, index) => {
    el += `<p class="p">
            ${item.name} - 
            ${item.phone} - 
            ${item.village} <br />
            <button type="button" onclick="editStudent(${index})">Edit</button>
            <button type="button" onclick="deleteStudent(${index})">Delete</button>
    </p>`
  })
  el += '</div>'
  document.getElementById('data').innerHTML = el
}

function styleItems() {
  let itemChildren = document.querySelector('.items').children
// return console.log(itemChildren)
  for (const item of itemChildren) {
    if(item.innerText.includes('08064152319')) {
      return item.style.background = 'red'
    }
  }
}

displayData(students)













