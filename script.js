// child particpation 
const childName = document.getElementById ("child_name") 
const childGrade = document.getElementById ("child_grade") 
const parentName = document.getElementById ("parent_name") 
const parentNumber = document.getElementById ("parent_number") 
const parentEmail = document.getElementById ("email")  
const error1 = document.getElementById ("error1")
const particpate = document.getElementById ("particpate")

particpate.addEventListener (`submit`, (e) => {
    // console.log("hey!")
    e.preventDefault()
    let message =[]
    // console.log('childname is: ', childName.value)
    if (childName.value === '' || childName.value === undefined ) {
        message.push("Child's name is required"); 
        
        // console.log(message.length)
    }

    // if (childGrade.value === '' || childGrade.value === null) {
    //     message.push("Child's Grade is required") 
    // }

    // if (parentName.value === '' || parentName.value === null) {
    //     message.push("Parent's Name is required") 
    // }

    // if (parentNumber.value === '' || parentNumber.value === null) {
    //     message.push("Parent's Number  is required") 
    // }

    // if (parentEmail.value === '' || parentEmail.value === null) {
    //     message.push("Parent's Email is required") 
    // }

    if (message.length > 0) {
        firstMessage = message[0];
    // error1.innerText = message.join(' ,')
    }
})