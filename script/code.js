const hamburger = document.querySelector("#hamburgerButton")
const links =document.querySelector("#links")
const productsSection = document.querySelector('#productsSection')
const cartCount=document.querySelector('#cartCount')
let arrCart=[]


hamburger.addEventListener("click", dropdown)

function dropdown(){
    if (links.classList.contains("show")) {
        links.classList.remove("show") 
    } else {
        links.classList.add("show")  
    }
}

let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : 

localStorage.setItem('products', 
  JSON.stringify(
    [
      {
      id:1,
      brand:'Casio',
      name:'Casio-AE1200',
      image:'https://i.postimg.cc/6Qnrw26q/Casio-AE1200.jpg',
      description:'',
      price:1100
    },
    {
    id:2,
    brand:'Casio',
    name:'Casio-AE1200',
    image:'https://i.postimg.cc/6Qnrw26q/Casio-AE1200.jpg',
    description:'',
    price:1100
    },
    {
    id:3,
    brand:'Casio',
    name:'Casio-AE1200',
    image:'https://i.postimg.cc/6Qnrw26q/Casio-AE1200.jpg',
    description:'',
    price:1100
    },
    {
    id:4,
    brand:'Casio',
    name:'Casio-AE1200',
    image:'https://i.postimg.cc/6Qnrw26q/Casio-AE1200.jpg',
    description:'',
    price:1100
    },
    {
    id:5,
    brand:'Casio',
    name:'Casio-AE1200',
    image:'https://i.postimg.cc/6Qnrw26q/Casio-AE1200.jpg',
    description:'',
    price:1100
    },
    {
    id:6,
    brand:'Casio',
    name:'Casio-AE1200',
    image:'https://i.postimg.cc/6Qnrw26q/Casio-AE1200.jpg',
    description:'',
    price:1100
    }
    ]
    
  )) 

  // Create HTML elements for each product
  function displayProducts() {
  
    productsSection.innerHTML = ""
  
    products.forEach((product) => {
      productsSection.innerHTML += `
      <div class="product col-lg-3 col-md-6">
          <div class="image"><img class="img-fluid" src="${product.image}" alt="${product.name}" /></div>
          <div class="info">
            <h4>${product.name}</h4>
            <span>${product.price}</span>
          </div>
          <p>
          ${product.description}
          </p>
          <div>
          <button onclick="addCart(${product.id})">Add To Cart</button>
          </div>
          
        </div>
      `
      
    });
  }
  
  displayProducts();


function addCart(newProductId) {
  let newProduct = products.find((p) => {
    return p.id === newProductId;
  });

  if (newProduct) {
    arrCart.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(arrCart));
    cartCount.innerHTML = arrCart.length;
  }
}


