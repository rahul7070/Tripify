let baseURL = `http://localhost:7900`

let Fullname = document.getElementById("fullname")
let email = document.querySelector("#registeremail")
let contact = document.querySelector("#mobile")
let registerpass = document.querySelector("#registerpass")
let confirmpass = document.querySelector("#confirmpass")

let registerBtn = document.querySelector("#registerBtn")

registerBtn.addEventListener("click", ()=>{
    // if(!Fullname.value || !email.value || !contact.value || !registerpass.value || !confirmpass.value || registerpass.value!=confirmpass.value){
    //     alert("fill correct credentials")
    // }else{
    //     registration();
    // }
    registration()
})
async function registration(){
    // console.log(Fullname.value)
    let obj = {
        Fullname: Fullname.value,
        email: email.value,
        pass : registerpass.value,
        contact: contact.value
    }
    fetch(`${baseURL}/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }).then((res)=>res.json()).then((res)=>{
        alert(res.msg)
    }).catch((error)=>console.log(error))
}



