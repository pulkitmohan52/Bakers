const cartInfo= document.querySelector('#cart-info');
const cart= document.querySelector('#cart');
cartInfo.addEventListener('click', ()=>{
    cart.classList.toggle('show-cart');
});

// add items to the cart 
(function(){
    const shopBtn= document.querySelectorAll('.store-item-icon');
    shopBtn.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            if(event.target.parentElement.classList.contains('store-item-icon')){
                let fullPath= event.target.parentElement.previousElementSibling.src;
                let pos= fullPath.indexOf("img") + 3;
                let partPath= fullPath.slice(pos);

                const item={};
                item.image= `img-cart${partPath}`;
                item.name= event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                let price= event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                item.finalPrice= price.slice(1).trim();
                

                const cartItem= document.createElement('div');
                cartItem.classList.add("cart-item",
                "d-flex",
                "justify-content-between",
                "text-capitalize",
                "my-3");

                cartItem.innerHTML= `<img src="${item.image}" class="img-fluid rounded-circle" id="item-img" alt="">
                <div class="item-text">
    
                  <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                  <span>$</span>
                  <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.finalPrice}</span>
                </div>
                <a href="#" id='cart-item-remove' class="cart-item-remove">
                  <i class="fas fa-trash"></i>
                </a>`;

                //selecting the cart total
                const total= document.querySelector('.cart-total-container');
                const cart= document.querySelector('#cart');
                //inserting the items before the grand total in the cart.
                cart.insertBefore(cartItem, total);
                
                //making the message box that is to be added to the screen 
                let msg= document.createElement('div');
                msg.classList.add('alert', 'alert-success', 'text-center');
                msg.textContent= `${item.name} is successfully added to the cart`;

                //inserting the msgBox onto the screen.
                const insertBefore= document.getElementById('insert-before');
                const storeItems= document.getElementById('store-items');
                insertBefore.insertBefore(msg, storeItems);
                const store= document.getElementById('store');
                store.scrollIntoView();

                setTimeout(()=> document.querySelector('.alert').remove(), 3000);
                showTotal();
            }
        })
    })
})();
function showTotal(){
    let finalCartItems= document.querySelectorAll('.cart-item-price');
    let total=[];
    finalCartItems.forEach((item)=>{
        total.push(parseFloat(item.textContent));
    });

    let totalMoney=0;
    total.forEach((item)=>{
        totalMoney+=item;
    });
    totalMoney= totalMoney.toFixed(2);

    let cartTotal= document.querySelector('#cart-total');
    cartTotal.textContent= totalMoney;

    let itemCount= document.getElementById('item-count');
    itemCount.textContent= total.length;
    
    let itemTotal= document.querySelector('.item-total');
    itemTotal.textContent= totalMoney;
}
const searchItems= ()=>{
    let filter= document.getElementById('search-item').value;
    console.log(filter);
}

