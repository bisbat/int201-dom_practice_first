import { validateEmail, validatePassword, validateUsername } from './script/validate.js'

const colorButton=document.getElementById('color-btn')
const bgRaindow=document.getElementById('rainbow')

//Raindow button
colorButton.addEventListener('click',()=>{
    const bgRaindow=document.getElementById('rainbow')
    const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];
    bgRaindow.style.background=colorArray[Math.floor(Math.random() * colorArray.length)];
})

//Sally

const addButton=document.getElementById('add-btn')

addButton.addEventListener('click',()=>{
    const inputItem=document.getElementById('item-input')
    
    const errormessage=document.querySelectorAll('.error')

    if(inputItem.value===''){
        errormessage[0].textContent='Plese Enter an item to continue!'
    }else{
        errormessage[0].textContent=''
        const li=document.createElement('li')
        li.textContent=inputItem.value
        console.log(li);

        const ulParent=document.querySelector('#listItem ul')
        ulParent.appendChild(li)
    }

})

//Form Validator
const allInput=document.querySelectorAll('#input-list input')
const submitButton=document.getElementById('submit-btn')



submitButton.addEventListener('click',(e)=>{
    e.preventDefault()
    const usernameInput=allInput[0].value
    const emailInput=allInput[1].value
    const passwordInput=allInput[2].value
    const errormessage=document.querySelector('#input-list p')

    if(!validateUsername(usernameInput)){
        errormessage.textContent='username is invalid'
    }else if(!validateEmail(emailInput)){
        errormessage.textContent='gmail is invalid'
    }else if(!validatePassword(passwordInput)){
        errormessage.textContent='password invalid'
    }else{
        errormessage.textContent='successful'
    }
})



