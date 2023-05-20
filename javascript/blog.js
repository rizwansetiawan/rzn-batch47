//pop up for user input //
function fungsiKedua(){
    let name2 = document.getElementById('f-name').value;
    let date1 = document.getElementById('f-date').value;
    let date2 = document.getElementById('f-end').value;
    let area2 = document.getElementById('f-area').value;
    let file  = document.getElementById('fl').value;

if(name2 == ''){
    return alert('Name is Required')
}else if(date1 == ''){
    return alert('please select date')
}else if(date2 == ''){
    return alert('please select date')
}else if(area2 == ''){
    return alert('input your description')
}else if(file == ''){
    return alert('image must be choose')
}
};

//untuk menyimpan data yang sudah di pilih //
let dataForm = [];

//content for user input//
function formBlog(event){
event.preventDefault();

    let name2 = document.getElementById('f-name').value;
    let date1 = document.getElementById('f-date').value;
    let date2 = document.getElementById('f-end').value;
    let area2 = document.getElementById('f-area').value;
    let file  = document.getElementById('fl').files;

    const apple = '<i class="ri-apple-fill"></i>';
    const microsoft = '<i class="ri-microsoft-fill"></i>';
    const playstation = '<i class="ri-playstation-line"></i>';
    const xBox = '<i class="ri-xbox-fill"></i>';

    let putApple = document.getElementById('check').checked ? apple:'';
    let putMicrosoft = document.getElementById('ce').checked ? microsoft:'';
    let putPlaystation = document.getElementById('kb').checked ? playstation:'';
    let putXBox = document.getElementById('ox').checked ? xBox:'';

    file = URL.createObjectURL(file[0]);
    console.log(file)

// ini membuat var bertipe object yang berisi data yang sudah di deklarasikan sebelumnya //
    let objectData = {
        name2,
        date1,
        date2,
        area2,
        file,
        putApple,
        putMicrosoft,
        putPlaystation,
        putXBox,

    };
    dataForm.push(objectData);
    console.log(dataForm);
    
    //untuk mnegapply atau Render dari yang user masukan //
    //nama render dan fungsi di samakan karena agar langsung di panngil namanya ya ngga sih ? ya kan? //hmm kurang paham yang ini euy
    renderFungsi3();
}
function renderFungsi3(){
    document.getElementsByClassName('container-blog')[0].innerHTML='';
    //membuat perulangan agar konten yang ditampilkan bertambah ketika user mengklik tombol submit nya//
    for(let pertambahan = 0;pertambahan < dataForm.length;pertambahan++){
    document.getElementsByClassName('container-blog')[0].innerHTM+=`
        <a href="blog-detail.html"class="link-blog"><h3 class="h3">${dataForm[index].name2}</h3></a>
                        <h6>${dataForm[index].date1}-${dataForm[index].date2}</h6><br>
                        <p class="paragraf">${dataForm[index].area2}</p>
                        <img src="${dataForm[index].file}" alt="gadget"class="gadget"><br><br>
                        ${dataForm[index].putApple}
                        ${dataForm[index].putMicrosoft}
                        ${dataForm[index].putPlaystation}
                        ${dataForm[index].putXBox}
                        <br>
                        <button class="e">edit</button>
                        <button class="n">delete</button>`
        
    }
}
