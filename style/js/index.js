var eye = document.querySelector('.eye')
var pass = document.getElementById('pass')
var eyeoff = document.querySelector('.eyeoff')
var username = document.getElementById('username')
var warningmsg = document.getElementById('warningmsg')
var form = document.getElementById('form')
var message = document.getElementById('message')
eye.addEventListener('click', function(){
    eye.style.display = 'none'
    eyeoff.style.display = 'block'
    pass.type = 'text'
})
eyeoff.addEventListener('click', function(){
    eyeoff.style.display = 'none'
    eye.style.display = 'block'
    pass.type = 'password'
})
document.getElementById('form').addEventListener('submit' , function(e){
    e.preventDefault();



    if(username.value.trim() === ''){
        warningmsg.textContent = "Bu saheni bos saxlama."
        warningmsg.style.color = 'red'
        username.style.border = '1px solid red'
    }
    else{
        warningmsg.textContent = ""
        username.style.border = '1px solid #cbd5e1'
    }
    if(pass.value.trim() === ''){
        message.textContent = "Sifre yazin."
        message.style.color = 'red'
        pass.style.border = '1px solid red'
    }
    else{
        message.textContent = ""
        pass.style.border = '1px solid #cbd5e1'
    }

})

