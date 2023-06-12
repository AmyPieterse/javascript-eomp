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
const displayProductCard=document.querySelector("#displayProducts");
const editBtn=document.querySelector('#edtBtn');
const deleteBtn=document.querySelector('#dltBtn');