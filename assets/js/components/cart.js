

//functions


function cart(db,printProducts){
 
  let cart=[] 

//   elementos del DOM

const productsDOM=document.querySelector('.products__container')
const notifyDOM=Document.querySelector('.notify')

const countDOM=Document.querySelector('.cart__count--item')
const totalDOM=Document.querySelector('.cart__total--item')
const checkoutDOM=Document.querySelector('.btn--buy')





    
function printCart(){
    const cartDOM=Document.querySelector('.cart__body')

let htmlCart=''

// console.log('carrito:')
// console.log(cart)
// console.log('items:' + showItemsCount())
// console.log('total:' + showTotal() )

if(cart.length==0){

    let htmlCart=`
    <div class="cart--empty">
    <i class='bx bx-cart' ></i>
    <p class="cart__empty--text">no hay productos en el carrito</p>
     
</div>

`

   notifyDOM.classlist.remove('show--notify')
   
}else{
    for(const item of cart){
        const product=db.find(p=>p.id===item.id)
       
        let htmlCart= ` 
        <article class="article"> 

        <div class="article__image">
            <img src= "${product.image} " alt="${product.name}">

        </div>
        <div class="article__content">
            <h3 class="article__title">${product.name}</h3>

            <span class="article_price">$${product.price}</span>
            <div class="article__quantity">

                <button type="button" class="article__quantity-btn article--minus" data-id="${item.id}">
                    <i class='bx bx-minus'></i>   
                </button>

                <span class=" article__quantity-text">data-id="${item.qty}</span>

                <button type="button" class="article__quantity-btn article--plus" data-id="${item.id}>
                  
                    <i class='bx bx-plus'></i>   
                </button>
            </div>
            <button type="button" class="article__btn remove-from-cart" data-id="${item.id}>

                <i class='bx bx-trash' ></i>
            </button>

        </div>
    </article>
        
        `
    }

    // notifyDOM.classlist.add('show--notify')
}
cartDOM.innerHTML=htmlCart
notifyDOM.innerHTML=showItemsCount()
countDOM.innerHTML=showItemsCount()
totalDOM.innerHTML=showTotal()

} 

function addToCart(id,qty=1){
    const itemFinded=cart.find(i=>i.id===id) 
    if (itemFinded){
        itemFinded.qty+=qty     
    }else{ 
        cart.push({id,qty})

    }

    printCart()
}


function removefromCart(id,qty=1){

const itemFinded=cart.find(i=>i.id===id)

const result=itemFinded.qty-qty
if(result>0){
    itemFinded.qty -=qty

}else{
    cart=cart.filter(i=>i.id!==id)   
}
printCart()
 
}


function deleteFromCart(id){
    cart=cart.filter(i=>i.id!==id)   
    printCart()
} 

function showItemsCount ( ){ 
    let suma=0
    for(const item of cart){
        suma +=item.qty
    }
    return suma
} 

function showTotal(){
let total=0
for(const item of cart){

    const productFinded=db.find(p=>p.id===item.id)
    total +=item.qty*productFinded.price
   
} 
 return total 
}
 
function checkout(){
for(const item of cart){
    const productFinded=db.find(p=>p.id===item.id)
    productFinded.quantity-=item.qty
 
  

}
return 

  cart=[]
printCart()
printProducts()

window.alert('gracias por su compra')
}


//eventos
productsDOM.addEventListener('click',function(e){
    if(e.target.closest('.add--to--cart')){
        const id=+e.target.closest('.add--to--cart').dataset.id
        addToCart(id)
    }
})

const cartDOM=('.cart__body')
cartDOM.addEventListener('click',function(e){

    if(e.target.closest('.article--minus')){
        const id=+e.target.closest('.article--minus').dataset.id
        removefromCart(id)
    }

    if(e.target.closest('.article--plus')){
        const id=+e.target.closest('.article--plus').dataset.id
        addToCart(id)
    }

    if(e.target.closest('.remove-from-cart')){
        const id=+e.target.closest('.remove-from-cart').dataset.id
        deleteFromCart(id)
    }

} )
checkoutDOM.addEventListener('click',function(e){

    checkout()

})

}



export default cart



// productsDOM.addEventListener( 'click',function(e){

//     if(e.target.closest('.add--to-cart')){
//         const id=+e.target.closest('.add--to--cart').dataset.id 
//         addToCar(id)


//     }
// })




//carrito











