
let baseURL = `http://localhost:7900`

let cardsWrapper = document.querySelector(".cardsWrapper");

let forwarrowBtn = document.querySelector("#forwarrowBtn")
let backarrowBtn = document.querySelector("#backarrowBtn")
let countClick=0;
let datalength=0;

fetching();
async function fetching(page=0){
    fetch(`${baseURL}/packages?page=${page}`).then((res)=>res.json()).then((res)=>{
        console.log(res)
        datalength=res.length
        rendering(res)
    }).catch((error)=>console.log(error))
}
async function rendering(data){
    let str = "";
    data.forEach((el)=>{
        str += `<div class="card">
        <img src="${el.img1}" alt="Slider Image">
            <h3>${el.descTitle}</h3>
            <p>${el.location} &nbsp;&nbsp;&nbsp <span>${el.rating}</span></p>
            <pre class="days"><span id="days">${el.days} </span>         <span id="number"><i class="material-icons" style="font-size:15px">local_phone</i> ${el.number}</span></pre>
            <button class="button-57" role="button"><span class="text">$ ${el.price}</span><span>Book Now</span></button>
        </div>`
    })
    cardsWrapper.innerHTML = str
}

forwarrowBtn.addEventListener("click", (e)=>{
    countClick++;
    fetching(countClick)
})
backarrowBtn.addEventListener("click", (e)=>{
    if(countClick>0){
        countClick--;
        fetching(countClick)
    } 
})