//object//

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
const myGadget = new Gadget('android','os');
const myNewGadget = new Gadget('iphone','ios');
// console.log(myGadget.getinfo1()  ,myGadget.getinfo2());

