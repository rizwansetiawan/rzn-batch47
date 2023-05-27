//dom BERHASIL//
// let home = document.getElementById('firstMenu');
// let project = document.getElementById('firstMenu2');
// let contactMe = document.getElementById('firstMenu3')
// let menuBarsNew = document.getElementById('burgerMenu');
// menuBarsNew.addEventListener('click',function(){
//     home.classList.toggle('newOne');
//     project.classList.toggle('newOne');
//     contactMe.classList.toggle('newBtn');
// })
//menggunkana if else//
let navMenu = false;
let firstContainer = document.getElementById('firstContainer');
let getBars = document.getElementById('containerHamburger');
function burgerNavBars(){
    if(navMenu==false){
        getBars.style.display='block';
        firstContainer.style.marginTop='200px';
        firstContainer.style.transition='.8s'
        //true
        navMenu=true; // sama dengan nya satu ternyata variablenya di identifier ulang 
        //agar masuk ke kondisi yang di bawah/else
        // console.log(navMenu) // 
    }else{getBars.style.display='none';
        firstContainer.style.marginTop='80px';
        navMenu=false;// sama dengan nya satu ternyata variable nya di 
        //identifier ulang agar masuk lagi ke kondisi yang pertama
        // console.log(navMenu)
}
}

function userValidation()
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("drp").value;
    let tArea = document.getElementById("area").value;
    
if(name == ""){
    return alert("data yang anda masukan angka atau data yang anda masukan kosong");
}else if(email == ""){
    return alert("email perlu di isi atau salah ");
}else if(phone == "" || phone ==0857){
    return alert("no hp harus di isi");
}else if(subject == ""){
    return alert("pilih lah presiden kita");
}
else if(tArea == ""){
    return alert("masukan atau kritik anda terhadap presiden kita apa ?");

}
//gimana caranya kalo mau manggil ngga satu satu gini ya //
// console.log(name);
// console.log(email);
// console.log(nohp);
// console.log(subject);
// console.log(tArea);

let objectId ={
    name,
    email,
    phone,
    subject,
    tArea,
};
console.log(objectId)

let emailReceiver="rizwandhoel@gmail.com";

let newElement = document.createElement("a");
newElement.href="mailto:"+emailReceiver+"?subject="+subject+
"&body=halo nama saya adalah "+name+" masukan anda terhadap president kita: "
+tArea+" dan jika mau menghubungi saya di: "+phone+"terimakasih";
newElement.click();
}

