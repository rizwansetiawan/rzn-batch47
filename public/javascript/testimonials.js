
// let clickIcon = document.getElementById('burgerMenu');
// let burgerMenu = document.getElementById('containerHamburger');
// let row = document.getElementById('dropdown');
// let clickMe = 0;

// function menuBars (){
//     if(clickMe==0){
//         burgerMenu.style.display='block';
//         clickIcon.style.transform='rotate(90deg)';
//         row.style.marginTop='100px';
//         row.style.transition='.8s';
//         clickMe=1;
//     }else{burgerMenu.style.display='none';
//         clickIcon.style.transform='rotate(0)';
//         row.style.marginTop='0';
//         clickMe=0;
// }
// };

//OOP//
// class Testimonials{
//     #quote = '';
//     #image = '';
//     constructor(quote,image){
//         this.#quote=quote;
//         this.#image=image;
//     }
//     get quote(){
//         return this.#quote;
//     }
//     get image(){
//         return this.#image;
//     }
//     get userError(){
//         throw new Error('eror belum di isi()')
//     }
//     get TestiHml(){
//         return ` <div class="container1">
//         <div class="child-1">
//             <img src="${this.image}" alt="sekolah koding"class="photo-testi">
//             <p class="testi-user"><i>"${this.quote} !"</i></p>
//                 <div class="icon">
                    
//                     <h3 class="person-testi1">- ${this.author}</h3>
//             </div>
//             </div>
//         </div>`
//     }
// }

//     class HtmlTesti extends Testimonials{
//         #author='';
//         constructor(quote,image,author){
//             super(quote,image)
//             this.#author=author;
//         }
//         get author(){
//             return this.#author;
            
//         }
//     }

//     class Company extends Testimonials{
//         #company='';
//             constructor(quote,image,company){
//                 super(quote,image)
//                 this.#company=company;
//             }
//         get author(){
//             return this.#company;
//     }
//     }
// const output = new HtmlTesti('Mantap pisan','https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60','John lenon');
// const output2 = new HtmlTesti ('keren lah','https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60','Peter')
// const output3 = new HtmlTesti('Bagus cuy','https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60','Jackson');

// let dataUser = [output,output2,output3];
// let TestimonialsHtml='';
// for(let i=0;i<dataUser.length;i++){
//     TestimonialsHtml+=dataUser[i].TestiHml;
// }
// document.getElementById('testimonials').innerHTML=TestimonialsHtml;
// console.log(output.error)

//HOF//
// let dataTesti = [{
//     name:'John Lenon' ,
//     rating:5,
//     image:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//     quote:'Mantap Pisan'
// },
// {
//     name:'Peter' ,
//     rating:4,
//     image:'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//     quote:'Keren Mantap'
// },
// {
//     name:'Jackson' ,
//     rating:1,
//     image:'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//     quote:'Respon Lambat',
// },
// {
//     name:'Tedy' ,
    
//     image:'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//     quote:'Respon Lambat',
// }];

// function allTestimonials(){
//     let allTesti = '';

//     dataTesti.forEach(function(dataItem){
//         allTesti += `<div class="container1">
//                  <div class="child-1">
//                      <img src="${dataItem.image}" alt="sekolah koding"class="photo-testi">
//                      <p class="testi-user"><i>"${dataItem.quote} !"</i></p>
//                          <div class="icon">
//                             <h3> ${dataItem.rating}<i class="ri-star-fill"></i></h3>
//                           <h3 class="person-testi1">- ${dataItem.name}</h3>
//                      </div>
//                      </div>
//                  </div>
//             `
//     })
//     document.getElementById('testimonials').innerHTML=allTesti;
// }
// allTestimonials();

// function testimonialsFilter(rating){
//     let testimonialsHtml ='';
//     const testimonialsFiltered = dataTesti.filter(function(item){
//         return item.rating===rating
//     })
//     if(testimonialsFiltered.length==0){
//         testimonialsHtml+=`<h1 class="data-not-found">DATA NOT FOUND</h1>`
//     }else{testimonialsFiltered.forEach(function(dataItem){
//         testimonialsHtml+=`<div class="container1">
//                  <div class="child-1">
//                      <img src="${dataItem.image}" alt="sekolah koding"class="photo-testi">
//                      <p class="testi-user"><i>"${dataItem.quote} !"</i></p>
//                          <div class="icon">
//                             <h3> ${dataItem.rating}<i class="ri-star-fill"></i></h3>
//                           <h3 class="person-testi1">- ${dataItem.name}</h3>
//                      </div>
//                      </div>
//                  </div>`
//     });
// }
// document.getElementById('testimonials').innerHTML=testimonialsHtml;
// };
//WITH ASYNCHRONOUS//
const promises = new Promise(function(resolve,rejected){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.npoint.io/393a8147c3cc0fd529bc',true);
    console.log(xhr);
    xhr.onload=function(){
        if(xhr.status===200){
            resolve(JSON.parse(xhr.response));
        }else{rejected('error loading data')}
    }
    xhr.onerror = function(){
        rejected('error internet no connection')
    }
    xhr.send();
})
async function getAllTestimonials(){
    const response = await promises;
    let allTestiHtml ='';
    response.forEach(function(dataItem){
        allTestiHtml+=`<div class="container1">
                          <div class="child-1">
                              <img src="${dataItem.image}" alt="sekolah koding"class="photo-testi">
                              <p class="testi-user"><i>"${dataItem.quote} !"</i></p>
                                 <div class="icon">
                                     <h3> ${dataItem.rating}<i class="ri-star-fill"></i></h3>
                                   <h3 class="person-testi1">- ${dataItem.name}</h3>
                              </div>
                              </div>
                          </div>`
    })
    document.getElementById('testimonials').innerHTML=allTestiHtml;
}
getAllTestimonials();

async function filteredTesti(rating){
    const response = await promises;
    const testimonialsFiltered = response.filter(function(dataItem){
        return dataItem.rating ===rating;
    });
    let dataTestimonials ='';
    if(testimonialsFiltered.length===0){
        dataTestimonials='<h1 class="data-not-found">DATA NOT FOUND</h1>'
    }else{testimonialsFiltered.forEach(function(dataItem){
        dataTestimonials+=`<div class="container1">
        <div class="child-1">
            <img src="${dataItem.image}" alt="sekolah koding"class="photo-testi">
            <p class="testi-user"><i>"${dataItem.quote} !"</i></p>
               <div class="icon">
                   <h3> ${dataItem.rating}<i class="ri-star-fill"></i></h3>
                 <h3 class="person-testi1">- ${dataItem.name}</h3>
            </div>
            </div>
       </div>`
    })
    }
    document.getElementById('testimonials').innerHTML=dataTestimonials;
}