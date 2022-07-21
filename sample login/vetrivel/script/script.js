function details(totalInfo){
    // let Local = localStorage.setItem("strlens", JSON.stringify(totalInfo));
    document.querySelector('.userName').value='';
    document.querySelector('.Department').value='';
    document.querySelector('.place').value='';
    
}

function getInfo(event) {
    event.preventDefault();
    let userName = document.querySelector('.userName').value  ;
    let department =document.querySelector('.Department').value ;
    let place = document.querySelector('.place').value;
    let result = document.querySelector('.result');
    if(localStorage.getItem('Data')== null){
        localStorage.setItem('Data', '[]');
    }
    let lastData =JSON.parse(localStorage.getItem('Data'));
    // console.log(lastData);
    lastData.push(userName,department,place);
    localStorage.setItem('Data',JSON.stringify(lastData));
    details({userName,department,place});
    if(localStorage.getItem('Data')!=null){
        result.innerHTML= JSON.parse(localStorage.getItem('Data'));
    }

    // let newData = JSON.parse(lastData);
    // console.log(newData);
    
    // result.innerHTML = `<span> ${userName} </span><br>
    // <span> ${department} </span><br>
    // <span> ${place} </span><br>`

    
}




