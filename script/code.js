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

// let products = document.querySelector("#products.display_content")
// products.innerHTML=""

// products.forEach(products=>{
//     products.innerHTML+=
//     `
//     <div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//     </div>
//     `
// })