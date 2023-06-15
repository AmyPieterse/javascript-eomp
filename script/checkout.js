
const cartDisplayProducts = document.querySelector("#cartDisplayProducts");
const subTotal =document.querySelector('#checkoutSubtotal');
const deliveryCost=document.querySelector('#checkoutDelivery');
const checkoutTaxes=document.querySelector('#checkoutTaxes');
const total=document.querySelector('#Total');
let count=document.querySelector('#count');
const taxRate = 0.14;

function displayCart() {
    let arrCart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = 0;

    arrCart.forEach((product) => {
        let cartItem = `
        <li class="list-group-item  d-flex justify-content-between lh-condensed">
        <div>
            <h6 class="my-0">${product.name}</h6>
            <small class="text-muted">${product.description}</small>
        </div>
        <div>
            <h6 class="my-0">Price</h6>
            <span class="text-muted">R ${product.price}</span>
            </div>
            <div class="d-flex justify-content-around">
            <span>
                <div id="quantityform" class="quantity">
                <input type="button" value="-" class="minus" field="quantity"/>
                <input type="text" name="quantity" value="0" class="qty"/>
                <input type="button" value="+" class="plus" field="quantity"/>
                </div>
            </span>
            <span>
                <button class="cartDltBtn">Remove</button>
            </span>
            </div>
        </li>
        `;
        cartDisplayProducts.innerHTML += cartItem;
    });

    arrCart.forEach((item) => {
    totalPrice += item.price;
    });

    let taxAmount = Math.round(`${totalPrice}` * taxRate)
    
    subTotal.innerText = 'R '+`${totalPrice}`
    count.innerText=arrCart.length;
    deliveryCost.innerText='R 30'
    checkoutTaxes.innerText='R '+ taxAmount;
    
    let totalProductPrice = Number(totalPrice) + 30 + Number(taxAmount);
    total.innerHTML='R '+totalProductPrice;

}
displayCart()
