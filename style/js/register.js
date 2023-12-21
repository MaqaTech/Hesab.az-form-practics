var username = document.getElementById('username')
var mail = document.getElementById('mail')
var form = document.getElementById('form')
var phn = document.getElementById('phonewarning')
var mwar = document.getElementById('mailwarning')
document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault()
    if(username.value.trim() == ''){
        phn.textContent = 'Telefon nomresi daxil edin'
        username.style.border = '1px solid red'
        phn.style.color = 'red'
    }
    else{
        phn.textContent = ''
        username.style.border = '1px solid #cbd5e1 '
    }
    if(mail.value.trim()== ''){
        mwar.textContent = 'Mail daxil edin'
        mail.style.border = '1px solid red'
        mwar.style.color = 'red'
    }
    else{
        mwar.textContent = ''
        mail.style.border = '1px solid #cbd5e1 '
    }


})