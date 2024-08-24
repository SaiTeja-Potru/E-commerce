let form=document.querySelector("form")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
    let login_id=localStorage.getItem("username")
    let login_password=localStorage.getItem("password")
    if(username==login_id && password==login_password){
        open("./Home.html","_self")
    }else{
        alert("Please Check Username & Password ❌")
    }


})