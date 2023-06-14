
let displayProducts = JSON.parse(localStorage.getItem("products"));

if (displayProducts== null) {

}
else{

}
let products = [
    {
    id:1,
    name:'Casio-AE1200',
    image:'https://i.postimg.cc/6Qnrw26q/Casio-AE1200.jpg',
    description:
}

]
<div class="product col-lg-3 col-md-6">
          <div class="image">
            <img class="img-fluid" src="https://i.postimg.cc/6Qnrw26q/Casio-AE1200.jpg" alt="Casio" /></div>
          <div class="info">
            <h4>Casio-AE1200</h4>
            <span>R1100</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt id voluptas consequatur in placeat, architecto eos neque, eaque voluptatum porro, sequi beatae accusantium! Quae id deleniti iste iure? Impedit, suscipit.
          </p>
          <div class="buy"><button>Buy</button></div>
        </div>

let hamburger = document.querySelector("#hamburgerButton")
let links =document.querySelector("#links")

hamburger.addEventListener("click", dropdown)

function dropdown(){
    if (links.classList.contains("show")) {
        links.classList.remove("show") 
    } else {
        links.classList.add("show")  
    }
}
