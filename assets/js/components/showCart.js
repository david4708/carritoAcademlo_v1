function showCart(){
    const btnCart=document.querySelector('.cart__btn')
    const cart=document.querySelector('.cart')
    
    btnCart.addEventListener('click',function(e){

        cart.classList.toggle('show--cart')
    })

    cart.addEventListener('click',function(e){
   
    if(e.target.closest('.btn--close')){
        cart.classList.remove('show--cart')
    
    }

    
    })
     }
     export default showCart