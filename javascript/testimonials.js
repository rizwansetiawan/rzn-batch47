let clickIcon = document.getElementById('burgerMenu');
let burgerMenu = document.getElementById('containerHamburger');
let row = document.getElementById('dropdown');
let clickMe = 0;

function menuBars (){
    if(clickMe==0){
        burgerMenu.style.display='block';
        clickIcon.style.transform='rotate(90deg)';
        row.style.marginTop='100px';
        row.style.transition='.8s';
        clickMe=1;
    }else{burgerMenu.style.display='none';
        clickIcon.style.transform='rotate(0)';
        row.style.marginTop='0';
        clickMe=0;
}
};

//OOP//
class Testimonials{
    #quote = '';
    #image = '';
    constructor(quote,image){
        this.#quote=quote;
        this.#image=image;
    }
    get quote(){
        return this.#quote;
    }
    get image(){
        return this.#image;
    }
    get userError(){
        throw new Error('eror belum di isi()')
    }
    get TestiHml(){
        return ` <div class="container1">
        <div class="child-1">
            <img src="${this.image}" alt="sekolah koding"class="photo-testi">
            <p class="testi-user"><i>"${this.quote} !"</i></p>
                <div class="icon">
                    
                    <h3 class="person-testi1">- ${this.author}</h3>
            </div>
            </div>
        </div>`
    }
}

    class HtmlTesti extends Testimonials{
        #author='';
        constructor(quote,image,author){
            super(quote,image)
            this.#author=author;
        }
        get author(){
            return this.#author;
            
        }
    }

    class Company extends Testimonials{
        #company='';
            constructor(quote,image,company){
                super(quote,image)
                this.#company=company;
            }
        get author(){
            return this.#company;
    }
    }
const output = new HtmlTesti('Mantap pisan','https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60','John lenon');
const output2 = new HtmlTesti ('keren lah','https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60','Peter')
const output3 = new HtmlTesti('Bagus cuy','https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60','Jackson');

let dataUser = [output,output2,output3];
let TestimonialsHtml='';
for(let i=0;i<dataUser.length;i++){
    TestimonialsHtml+=dataUser[i].TestiHml;
}
document.getElementById('testimonials').innerHTML=TestimonialsHtml;
// console.log(output.error)