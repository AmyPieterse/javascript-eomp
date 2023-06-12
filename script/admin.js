let products =[];
const btnAddProduct=document.querySelector('#addProduct');
const displayProducts=document.querySelector('#display');
const editBtn=document.querySelector('#edtBtn');
const deleteBtn=document.querySelector('#dltBtn');


btnAddProduct.addEventListener('click', addNewProduct);

//add new product object to array products
function addNewProduct(){
    let productName = document.querySelector('#name').value;
    let productImage = document.querySelector('#image').value;
    let productDescription = document.querySelector('#description').value;
    let productPrice=document.querySelector('#price').value;
    
    let product = {
        id:products.length+1,
        name:productName,
        image:productImage,
        description:productDescription,
        price:productPrice,
    }
    products.push(product)
    renderProducts();
}

//delete Product from array
function deleteProduct(item){
    let index = products.findIndex( p=>{
        return p.id == item.id
    })
    products.splice(index,1)
    renderProducts()
};

// deleteBtn.addEventListener('click',deleteProduct);
//Display products in table
function renderProducts(){
    displayProducts.innerHTML = ""
            products.forEach((product)=>{
                displayProducts.innerHTML +=
                `
                <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td><div id="buttons"><button id="edtBtn">Edit</button><button id="dltBtn" onclick='deleteProduct(${JSON.stringify(product)})'>Delete</button></div></td>
                </tr>
                `
                });
};
renderProducts()


