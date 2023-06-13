let products = [];
const btnAddProduct = document.querySelector("#addProduct");
const displayProducts = document.querySelector("#display");
const editBtn = document.querySelector("#edtBtn");
const deleteBtn = document.querySelector("#dltBtn");

btnAddProduct.addEventListener("click", addNewProduct);

//add new product object to array products
function addNewProduct() {
  let productName = document.querySelector("#name").value;
  let productImage = document.querySelector("#image").value;
  let productDescription = document.querySelector("#description").value;
  let productPrice = document.querySelector("#price").value;

  let product = {
    id: products.length + 1,
    name: productName,
    image: productImage,
    description: productDescription,
    price: productPrice,
  };
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
}

//delete Product from array products
function deleteProduct(item) {
  let index = products.findIndex((p) => {
    return p.id == item.id;
  });
  products.splice(index, 1);
  renderProducts();
}

// Constructor function
function EditedData(item) {
  this.id = item.id;
  this.name = document.querySelector(`#name${item.id}`).value;
  this.description = document.querySelector(`#description${item.id}`).value;
  this.image = document.querySelector(`#image${item.id}`).value;
  this.price = document.querySelector(`#price${item.id}`).value;

  let index = products.findIndex((p) => {
    return p.id == item.id;
  });
  products[index] = Object.assign({}, this);
  renderProducts();
}

//Display array products in table
function renderProducts() {
  displayProducts.innerHTML = "";
  products.forEach((product) => {
    displayProducts.innerHTML += `
                <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td><div id="buttons">
                <button data-bs-toggle="modal" data-bs-target="#editModal${
                  product.id
                }" id="edtBtn${product.id}">Edit</button>
                <button id="dltBtn" onclick="deleteProduct(${
                  product.id
                })">Delete</button
                div>
                </td>
                </tr>
                <div class="modal fade" id="editModal${
                  product.id
                }" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        EDIT PRODUCT
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form id="newPost">
                        <div>
                        <label for="title">Name:</label>
                        <input type="text" id='name${
                          product.id
                        }' name="title" value="${product.name}"/>
                        </div>
                        <div>
                            <label for="description">Description</label>
                            <input type="text" id='description${
                              product.id
                            }' name="description" value="${product.description}"/>
                        </div>
                        <div>
                        <label for="image">Image:</label>
                        <input type="url" id='image${
                          product.id
                        }' name="uploadImage" value="${product.image}"/>
                        </div>
                        <div>
                        <label for="price">Price:</label>
                        <input type="text" id='price${product.id}' name="price${
      product.id
    }" value="${product.price}"/>
                        </div>
                    </form>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        CANCEL
                    </button>
                    <button type="button" class="btn btn-primary" id="editBtn" onclick='new EditedData(${JSON.stringify(
                      product
                    )})'>
                        EDIT PRODUCT
                    </button>
                    </div>
                </div>
                </div>
                </div>
                `;
  });
}

