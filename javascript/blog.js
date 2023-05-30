
//condistion for hamburger menu navigation //

let clickIcon = document.getElementById('burgerMenu');
let burgerMenu = document.getElementById('containerHamburger');
let containerProject = document.getElementById('firstContainerBlog');
let clickMe = 0;
function menuBars (){
    if(clickMe==0){
        burgerMenu.style.display='block';
        clickIcon.style.transform='rotate(90deg)';
        containerProject.style.transition='.8s';
        containerProject.style.marginTop='200px';
        clickMe=1;
    }else{burgerMenu.style.display='none';
        clickIcon.style.transform='rotate(0)';
        containerProject.style.marginTop='80px';
        clickMe=0;

}
}
//pop up for user input & validation //
function formUser(){
    let name2 = document.getElementById('name2').value;
    let date1 = document.getElementById('f-date').value;
    let date2 = document.getElementById('f-end').value;
    let area2 = document.getElementById('f-area').value;
    let file  = document.getElementById('file').value;
    
    
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
event.preventDefault()

    let name2 = document.getElementById('name2').value;
    let takeDate1 = document.getElementById('f-date').value;
    let takeDate2 = document.getElementById('f-end').value;
    let area2 = document.getElementById('f-area').value;
    let file  = document.getElementById('file').files;

    const apple = '<i class="ri-apple-fill"></i>';
    const microsoft = '<i class="ri-microsoft-fill"></i>';
    const playstation = '<i class="ri-playstation-line"></i>';
    const xBox = '<i class="ri-xbox-fill"></i>';

    // TERNARY OPERATOR //
    let putMicrosoft = document.getElementById('ms').checked ?microsoft :'';
    let putXBox = document.getElementById('xb').checked ?xBox :'';
    let putPlaystation = document.getElementById('ps').checked ?playstation :'';
    let putApple = document.getElementById('ip').checked ?apple :'';

    file = URL.createObjectURL(file[0]);
    console.log(file)

    function timePost (){
        let dateOne = new Date(document.getElementById('f-date').value);
        let dateTwo = new Date(document.getElementById('f-end').value);
        let forDate = new Date (dateTwo) - new Date (dateOne);
        console.log(dateTwo-dateOne);
        //PR //
        // alur cara memhitung durasi per post nya//
        // 1 detik = 1000 mili // 1 jam 3600 dan 1 hari 24 jam //dan 1 bulan 30 hari //dan 1 tahun 12 bulan
        let days = Math.floor(forDate/(1000*3600*24));
        let weeks = Math.floor(forDate/(1000*3600*24*7));//menyentuh hari ke 7 jadi minggu
        let months = Math.floor(forDate/(1000*3600*24*30));
        let years = Math.floor(forDate/(1000*3600*24*30*12));
        // let result = days+weeks+months+years;
        // console.log('hasil dari ='+Math.ceil(forDate/result))
        
        if (years == 1 || years > 0) {
            return `${years} Tahun` 
        } else if ( months == 1 || months > 0) {
            return `${months} Bulan`
        } else if (weeks == 1 || weeks > 0) {
            return `${weeks} Minggu`
        } else if (days == 1 || days > 0) {
            return `${days} Hari`
        }
    }
   let postUpdate = timePost();

// ini membuat var bertipe object yang berisi data yang sudah di deklarasikan sebelumnya //
    let objectData = {
        name2,
        postUpdate,
        area2,
        file,
        putApple,
        putMicrosoft,
        putPlaystation,
        putXBox 
    };
    
    dataForm.push(objectData);
    console.log(dataForm);
    
    //untuk mnegapply atau Render dari yang user masukan //
    //nama render dan fungsi di samakan karena agar langsung di panngil fungsi nya //
    renderBlog();
}
function renderBlog(){
    document.getElementById('parent1').innerHTML='';
    // document.getElementById('parent2').innerHTML='';
    //membuat perulangan agar konten yang ditampilkan bertambah ketika user mengklik tombol submit nya//
    for(let index = 0;index < dataForm.length;index++){
    document.getElementById('parent1').innerHTML+=`
    <div class="container-card">
    <div class="card1">
                    <div class="align-card1">
                       <img src="${dataForm[index].file}"alt="phot0-user"class="ft-card1"/>
                       <a href="blog.html"><h3>${dataForm[index].name2}</h3></a>
                       <p class="p-card-duration">Durasi:${dataForm[index].postUpdate}</p>
                       <p class="p-card">${dataForm[index].area2}</p>
                    <div class="icon">
                    ${dataForm[index].putMicrosoft}
                    ${dataForm[index].putXBox}
                    ${dataForm[index].putPlaystation}
                    ${dataForm[index].putApple}
                    </div>
                        <div class="container-btn">
                            <button class="btn-card1">Edit</button>
                            <button class="btn-card2"id="user">Delete</button>
                    </div>
                </div>
                </div>
</div>
</div>`
    }
};



















// function nameFunc (blog,blog2,blog3){
//     let var1 = 1;
//     console.log(var1)
// }
// nameFunc('hello','wolrd');
// let ar = [];
// let object ={} 

// time post //
// function DatePostTime(time){

//     let monthName = [
//         'jan',
//         'feb',
//         'mar',
//         'apr',
//         'may',
//         'jun',
//         'jul',
//         'aug',
//         'sep',
//         'oct',
//         'nov',
//         'dec'
//     ];
    // PR //
    
    // let date = time.getDate();
    // let monthIndex = time.getMonth();
    // let year = time.getFullYear();
    // let hours = time.getHours();
    // let minutes = time.getMinutes();
   
//     if(hours <= 9){
//         hours = '0'+hours;
//     }else if(minutes <= 9){
//         minutes = '0' + minutes
//     }
// }
// DatePostTime()
// let tryDate = new Date()
// console.log(tryDate)

// function getFullTime(time) {
//     // console.log("get full time");
//     // let time = new Date();
//     // console.log(time);
  
//     let monthName = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];
//     // console.log(monthName[8]);
  
//     let date = time.getDate();
//     // console.log(date);
  
//     let monthIndex = time.getMonth();
//     // console.log(monthIndex);
  
//     let year = time.getFullYear();
//     // console.log(year);
  
//     let hours = time.getHours();
//     let minutes = time.getMinutes();
//     // console.log(minutes);
  
//     if (hours <= 9) {
//       hours = "0" + hours;
//     } else if (minutes <= 9) {
//       minutes = "0" + minutes;
//     }
  
//     return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
//   }
  
//   function getDistanceTime(time) {
//     let timeNow = new Date();
//     let timePost = time;
  
//     // waktu sekarang - waktu post
//     let distance = timeNow - timePost; // hasilnya milidetik
//     console.log(distance);
  
//     let milisecond = 1000; // milisecond
//     let secondInHours = 3600; // 1 jam 3600 detik
//     let hoursInDays = 24; // 1 hari 24 jam
  
//     let distanceDay = Math.floor(
//       distance / (milisecond * secondInHours * hoursInDays)
//     ); // 1/86400000
//     let distanceHours = Math.floor(distance / (milisecond * 60 * 60)); // 1/3600000
//     let distanceMinutes = Math.floor(distance / (milisecond * 60)); // 1/60000
//     let distanceSeconds = Math.floor(distance / milisecond); // 1/1000
  
//     if (distanceDay > 0) {
//       return `${distanceDay} Day Ago`;
//     } else if (distanceHours > 0) {
//       return `${distanceHours} Hours Ago`;
//     } else if (distanceMinutes > 0) {
//       return `${distanceMinutes} Minutes Ago`;
//     } else {
//       return `${distanceSeconds} Seconds Ago`;
//     }
//   }
  
//   setInterval(function () {
//     renderBlog();
//   }, 10000);