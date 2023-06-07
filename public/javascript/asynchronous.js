// const promises = new Promise(function(resolve,rejected){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','https://api.npoint.io/393a8147c3cc0fd529bc',true);
//     console.log(xhr);
//     xhr.onload=function(){
//         if(xhr.status===200){
//             resolve(JSON.parse(xhr.response));
//         }else{rejected('error loading data')}
//     }
//     xhr.onerror = function(){
//         rejected('error internet no connection')
//     }
//     xhr.send();
// })
// async function getAllTestimonials(){
//     const response = await promises;
//     let testiHtml ='';
//     response.forEach(function(item){
//         testiHtml+=``
//     })
// }