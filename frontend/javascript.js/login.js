
let loginemail = document.getElementById("email")
let loginpass = document.querySelector("#pass")
let loginbtn = document.querySelector("#loginbtn")


loginbtn.addEventListener("click", ()=>{
    if(!loginemail.value || !loginpass.value){
        alert("fill correct credentials")
    }else{
        logingin();
    }
    // registration()
})
async function logingin(){
    // console.log(Fullname.value)
    let obj = {
        email: loginemail.value,
        pass : loginpass.value,
    }
    fetch(`${baseURL}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }).then((res)=>res.json()).then((res)=>{
        console.log(res)
        alert(res.msg)
        localStorage.setItem("token", JSON.stringify(res))
    }).catch((error)=>console.log(error))
}



