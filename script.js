// child particpation 
const childName = document.getElementById ("child_name") 
const childGrade = document.getElementById ("child_grade") 
const parentName = document.getElementById ("parents_name") 
const parentNumber = document.getElementById ("parent_number") 
const parentEmail = document.getElementById ("email")  
const error1 = document.getElementById ("error1")
const particpate = document.getElementById ("particpate")









particpate.addEventListener (`submit`, (e) => {
    e.preventDefault()
    let message =[]
    if (childName.value === '' || childName.value === undefined ) {
        message.push("Child's Name is required"); 

    }
    
    if (childGrade.value === '' || childGrade.value === undefined || childName.value === NaN) {
        message.push(" Child's Grade is required") 
    }

    if (parentName.value === '' || parentName.value === undefined) {
        message.push(" Parent's Name is required") 
    }

    if (parentNumber.value === '' || parentNumber.value === undefined ) {
        message.push(" Parent's Number  is required") 
    } 

    // if (parentEmail.value === '' || parentEmail.value === null) {
    //     message.push("Parent's Email is required") 
    // }

    if (message.length > 0) {
    error1.innerText = message
    }
})