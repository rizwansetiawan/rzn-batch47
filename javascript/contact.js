
function userValidation()
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let nohp = document.getElementById("nohp").value;
    let subject = document.getElementById("drp").value;
    let tArea = document.getElementById("area").value;
    
if(name == ""){
    return alert("data yang anda masukan angka atau data yang anda masukan kosong");
}else if(email == ""){
    return alert("email perlu di isi atau salah ");
}else if(nohp == "" || nohp ==0857){
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
    nohp,
    subject,
    tArea,
};
console.log(objectId)

let alamatEmail="rizwandhoel@gmail.com";

let elementBaruHtml = document.createElement("a");
elementBaruHtml.href="mailto:"+alamatEmail+"?subject="+subject+
"&body=halo nama saya adalah "+name+" masukan anda terhadap president kita: "
+tArea+" dan jika mau menghubungi saya di: "+nohp+"terimakasih";
//yang bawah copas yang atas pemahaman saya agar mengerti dan yap berhasil //
// elementBaruHtml.href = `mailto:${alamatEmail}?subject=${subject}&body=hello geisss nama saya
// ${name} masukan anda terhadap president kita: ${tArea} anda memilih ${subject} WOW !!! \n
// ini no hp saya silahkan call ${nohp} INI KO SUBJECT NYA GADA YA GIMANA YA GESSSSSS ?????padahal udah di panggil`;

elementBaruHtml.click();
}

