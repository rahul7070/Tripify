
let bookingFrom = document.querySelector("#bookingFrom")

let email = document.querySelector("#email")
let fullname = document.querySelector("#fullname")
let contact = document.querySelector("#contact")
let depart = document.querySelector("#depart")
let dest = document.querySelector("#dest")
let child = document.querySelector("#child")
let roomType = document.querySelector("#roomType")
let date = document.querySelector("#date")

let data = JSON.parse(localStorage.getItem("token"))
console.log(data)

bookingFrom.addEventListener("submit", (e)=>{
    e.preventDefault();
    checking()
})
function checking(){
    if(!email.value || !fullname.value || !contact.value || !depart.value || !dest.value || !child.value || !roomType.value || !date.value){
        alert("fill all details")
    }else{
        alert("Booking Successfull")
    }
}
