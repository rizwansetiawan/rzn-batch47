
let clickIcon = document.getElementById('burgerMenu');
let containerProject = document.getElementById('slideContent');
let clickMe = 0;
function menuBars(){
    
    if(clickMe==0){
        clickIcon.style.transform='rotate(90deg)';
        clickIcon.style.transition='.6s'
        containerProject.style.transition='.8s';
        containerProject.style.marginTop='300px';
        clickMe=1;
    }else{
        clickIcon.style.transform='rotate(0)';
        containerProject.style.marginTop='80px';
        clickMe=0;

}
}

function userValidation()
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let textarea = document.getElementById("textarea").value;
    
if(name == ""){
    return alert("please input your name");
}else if(email == ""){
    return alert("please input your email address");
}else if(phone == ""){
    return alert("please input your phone number");
}else if(subject == ""){
    return alert("please select subject");
}
else if(textarea == ""){
    return alert("please fill is your description ");

}
let dataUser = {
    name,
    email,
    phone,
    subject,
    textarea
}
console.log(dataUser)
let emailReceiver = "rizwandhoel@gmail.com";
let newElement =document.createElement('a');
newElement.href=`mailto:${emailReceiver}?subject=${subject}&body=helo my name is ${name} and my phone is ${phone} and ${textarea} thankyou`;
newElement.click();
}