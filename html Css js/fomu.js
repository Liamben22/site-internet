
let btCon = document.querySelector('.connect')
btCon.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log("btcon")
    let errorContainer = document.querySelector (' .message-error')
    let errorList = document.querySelector (' .message-error-list')
    
    errorList. innerHTML = ""
    errorContainer.classList.remove('visible')

    let email = document.querySelector('#email')
    let password = document.querySelector ('#password')
    
if(email.value == '' , password.value.length < 10 || passCheck.test(password.value) == false) {
    errorContainer.classList.add( 'visible')
    email. classList.remove('success')
    password.classList. remove( 'success' )

    let err = document.createElement('li')
    err.innerText = "Le champ email ou mot de passe est faux"

    errorList.appendChild(err)
} else {

email. classList.add( 'success' )
password.classList.add( 'success')}


let pseudo = document.querySelector('#pseudo')


if(pseudo.value.length < 6) { 
    
    errorContainer.classList.add('visible')
    pseudo.classList.remove('success')

    let err = document.createElement('li')
    err.innerText = "Le pseudo est faux"

    errorList.appendChild(err)
} else{
    pseudo.classList.add('success')
}


let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
)



let passwordInitial = document. querySelector ('#password' )
let passwordRepeat = document. querySelector ('#password2' )

if(passwordInitial.value != passwordRepeat.value) {

errorContainer.classList.add('visible')
passwordRepeat.classList.remove('success')

let err = document.createElement('li')
err.innerText = "Les mots de passes sont différents"

errorList.appendChild(err)
} else {
passwordRepeat.classList.add( 'success')
}

let successContainer = document.querySelector('.message-success' )
successContainer.classList.remove('visible')
if(
pseudo.classList.contains('success') &&
email.classList.contains('success') &&
password.classList.contains("success") &&
passwordRepeat.classList.contains( 'success')
){
successContainer.classList.add( 'visible')
}

}) 