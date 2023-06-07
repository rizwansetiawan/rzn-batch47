class Gadget {
    constructor (brand,type){
    this.brand = brand;
    this.type = type;
    }
    getinfo1(){
        return `this gadget is ${this.brand} and operation system is ${this.type}`
    }
    getinfo2(){
        return `ini adalah hp${this.brand} dan tipe nya ${this.type}`
    }
} 

class Technology extends Gadget {
   constructor(brand,type,price){
    super(brand,type)
    this.price = price;
   }
   getinfo3(){
    return `this gadget is ${this.brand} and operation system is ${this.type} and IDR ${this.price}`

   }
}
const myGadget = new Gadget('android','os','1juta');
const myNewGadget = new Gadget('iphone','ios');