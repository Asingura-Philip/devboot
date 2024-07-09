class shopping{
    constructor(quantity,price){
        this.quantity = quantity,
        this.price = price

    }
    addToCart = function(name){
        console.log(`${this.quantity} ${name} added to cart at ${this.price} each`)
    }
    removeFromCart = function(){
        console.log("removed from cart")
    }
    priceInCart = function(){
        console.log(this.quantity * this.price)
    }
    displayItems = function(){
        console.log("items")
    }
}

let veggies = new shopping(5,7);
veggies.addToCart('eggs')
veggies.priceInCart()

