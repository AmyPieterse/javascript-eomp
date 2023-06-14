const hamburger = document.querySelector("#hamburgerButton")
const links =document.querySelector("#links")
const productsSection = document.querySelector('#productsSection')

hamburger.addEventListener("click", dropdown)

function dropdown(){
    if (links.classList.contains("show")) {
        links.classList.remove("show") 
    } else {
        links.classList.add("show")  
    }
}

let arrDisplay;

// Add default data to arrDisplay

const product1 = {
  id:1,
  name:'Casio-AE1200',
  image:'https://i.postimg.cc/6Qnrw26q/Casio-AE1200.jpg',
  description:'',
  price:1100
};
const product2 = {
id:2,
name:'Casio-AE1200',
image:'https://i.postimg.cc/6Qnrw26q/Casio-AE1200.jpg',
description:'',
price:1100
};
const product3 = {
id:3,
name:'Casio-AE1200',
image:'https://i.postimg.cc/6Qnrw26q/Casio-AE1200.jpg',
description:'',
price:1100
};
const product4 = {
id:4,
name:'Casio-AE1200',
image:'https://i.postimg.cc/6Qnrw26q/Casio-AE1200.jpg',
description:'',
price:1100
};
const product5 = {
id:5,
name:'Casio-AE1200',
image:'https://i.postimg.cc/6Qnrw26q/Casio-AE1200.jpg',
description:'',
price:1100
};
const product6 = {
id:6,
name:'Casio-AE1200',
image:'https://i.postimg.cc/6Qnrw26q/Casio-AE1200.jpg',
description:'',
price:1100
};

//add default objects to array arrDisplay
arrDisplay = [product1, product2, product3, product4, product5, product6];

//add default array to local storage with products key
localStorage.setItem("products", JSON.stringify(arrDisplay));


let string = localStorage.getItem("products");

if (string) {
  arrDisplay = JSON.parse(string);
} else {
  arrDisplay = [];
}


  // Create HTML elements for each product

  function displayProducts() {
  
    productsSection.innerHTML = ""
  
    arrDisplay.forEach((product) => {
      
      productsSection.appendChild(div);
      
      const div = document.createElement("div")
      div.classList.add('product', 'col-lg-3', 'col-md-6')
      div.appendChild(imageDiv)
      div.appendChild(infoDiv)
      div.appendChild(p)
      div.appendChild(buyDiv);
  
      const imageDiv = document.createElement("div")
      imageDiv.classList.add("image")
      imageDiv.appendChild(img)

      const img = document.createElement("img")
      img.classList.add("img-fluid")
      img.src = product.image
      img.alt = product.name
      
      const infoDiv = document.createElement("div")
      infoDiv.classList.add("info")
      infoDiv.appendChild(h4)
      infoDiv.appendChild(price)

      const h4 = document.createElement("h4")
      h4.textContent = product.name

      const price = document.createElement("span")
      price.textContent = product.price
      
      const p = document.createElement("p")
      p.textContent = product.description
      
      const buyDiv = document.createElement("div")
      buyDiv.classList.add("buy")
      buyDiv.appendChild(button)

      const button = document.createElement("button")
      button.textContent = "Buy";
      
      
    });
  }
  
  displayProducts();


