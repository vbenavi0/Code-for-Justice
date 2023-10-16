// child particpation 
const childName = document.getElementById ("child_name"); 
const childGrade = document.getElementById ("child_grade"); 
const parentName = document.getElementById ("parents_name"); 
const parentNumber = document.getElementById ("phone_number"); 
const parentEmail = document.getElementById ("email");  
const error1 = document.getElementById ("error1");
const particpate = document.getElementById ("particpate");  

const valdNum = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/; 
const valdEmail = /^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/;

particpate.addEventListener (`submit`, (e) => {
    e.preventDefault()
    let message =[]
    if (childName.value === '' || childName.value === undefined ) {
        message.push(" Child's Name is required"); 
    }
    
    if (childGrade.value === '' || childGrade.value === undefined || childName.value === NaN) {
        message.push(" Child's Grade is required"); 
    }

    if (parentName.value === '' || parentName.value === undefined ) {
        message.push(" Parent's Name is required");
    }

    if (parentNumber.value === "" || parentNumber.value === undefined){
        message.push(" Parent's Number is required"); 
    } else if (!valdNum.test(parentNumber.value)) {
        message.push(" Parent's Number is Not Vaild"); 
    }

    if (parentEmail.value === '' || parentEmail.value === undefined) {
        message.push(" Parent's Email is required") ; 
    } else if (!valdEmail.test(parentEmail.value)){ 
        message.push(" Parent's Email is Not Valid");
    }
    
    if (message.length > 0) {
    error1.innerText = message
    }
}) 

// Join us tab
const empName = document.getElementById("emp_name"); 
const empEmail = document.getElementById("emp_email");
const empNum = document.getElementById("emp_number"); 
const skill = document.getElementById("skill"); 
const error2 = document.getElementById ("error2");

team.addEventListener (`submit`, (e) => {
    e.preventDefault()
    let message =[]
    if (empName.value === '' || empName.value === undefined ) {
        message.push(" Your Name is required"); 
    } 

    if (empNum.value === '' || empNum.value === undefined) {
        message.push(" Your Number is required"); 
    } else if (!valdNum.test(empNum.value)) {
        message.push(" Your Number is Not Vaild"); 
    }
   
    if (empEmail.value === '' || empEmail.value === undefined) {
        message.push(" Your Email is required"); 
    }else if (!valdEmail.test(empEmail.value)){ 
            message.push(" Your Email is Not Valid");
    }

    if (skill.value === '' || skill.value === undefined) {
        message.push(" Entering the skills is required"); 
    }

    if (message.length > 0) {
        error2.innerText = message
        }
}) 

// Donate 

const donName = document.getElementById("donor_name");
const orgName = document.getElementById("org_name");
const donEmail = document.getElementById("donor_email");
const donNum = document.getElementById("donor_number");
const money = document.getElementById("money");
const error3 = document.getElementById("error3");

donate.addEventListener (`submit`, (e) => {
   e.preventDefault()
    let message =[]
    if (donName.value === '' || donName.value === undefined ) {
            message.push(" Your Name is required"); 
    } 

    if (orgName.value === '' || orgName.value === undefined ) {
            message.push(" Organization Name is required"); 
    } 

    if (donNum.value === '' || donNum.value === undefined) {
            message.push(" Your  Organization Number is required"); 
    } else if (!valdNum.test(donNum.value)) {
            message.push("Number is Not Vaild"); 
    }

    if (donEmail.value === '' || donEmail.value === undefined) {
            message.push(" Organization Email is required"); 
    } else if (!valdEmail.test(donEmail.value)){ 
            message.push(" Organization Email is Not Valid");
    }

    if (money.value === '' || money.value === undefined ) {
            message.push(" Your Donatation Amount is required"); 
    } 

    if (message.length > 0) {
            error3.innerText = message
    }
}) 