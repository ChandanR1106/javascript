function validate()
{
 var username=document.getElementById('username').value
 var email=document.getElementById('email').value
 var password=document.getElementById('password').value
 var cpassword=document.getElementById('cpassword').value
 
 checkusername(username)
 checkemail(email)
 checkpassword(password)
 checkpasswordmatch(password, cpassword)

}

function checkusername(username)
{
 if(username.length>6)
 {
    document.getElementById('username').classlist.add('success')
    document.getAnimations('username').classlist.replace('error','success')
 }
 else
 {
    document.getElementById('username').classList.add('error')
    document.getElementById('username_error').innertext="username must be 8 letters"
 }
}