const cartBtn =  document.querySelector('.cart-btn');
const closeCartBtn =  document.querySelector('.close-cart');
const clearCartBtn =  document.querySelector('.clear-cart');
const cartDom =  document.querySelector('.cart');
const cartOverlay =  document.querySelector('.cart-overlay');
const  cartItems=  document.querySelector('.cart-items');
const cartTotal =  document.querySelector('.cart-total');
const cartContent =  document.querySelector('.cart-content');
const productsDom =  document.querySelector('.product-content');
let cart = [];

class products {
    async getProducts(){
        try{

        
        let result = await fetch('products.json');
        let data = await result.json();
        let products = data.items;
        products = products.map()
    }catch (error){
        console.log(error);
    }
}

}

class UI{}
class storage{

}

document.addEventListener("DOMContentLoaded",()=>{
    const ui = new UI();
    const products = products();
    products.getProducts().then(data => console.log(data));

});
