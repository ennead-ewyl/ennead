function details(totalInfo){
    let Local = localStorage.setItem("strlens", JSON.stringify(totalInfo));
    document.querySelector('.userName').value='';
    document.querySelector('.Department').value='';
    document.querySelector('.place').value='';
    
}

function getInfo(event) {
    event.preventDefault();
    let userName = document.querySelector('.userName').value;
    let department = document.querySelector('.Department').value;
    let place = document.querySelector('.place').value;
    let result = document.querySelector('.result');
    details({userName,department,place});
    result.innerHTML = `<span> ${userName} </span><br>
    <span> ${department} </span><br>
    <span> ${place} </span><br>`

    
}




