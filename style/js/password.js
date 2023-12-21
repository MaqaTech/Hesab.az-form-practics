var username = document.getElementById('username')
var warningmsg = document.getElementById('warningmsg')
var form = document.getElementById('form')
var button = document.querySelector('.btn')
button.style.cursor = 'no-drop'
button.style.backgroundColor = '#5f90db'
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
        button.style.cursor = 'pointer'
        button.style.backgroundColor = '#1a75ff'
    }
})
