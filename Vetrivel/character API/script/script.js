const characterUrl = 'https://www.breakingbadapi.com/api/characters?limit=10';
fetch(characterUrl).then(function(data){
    return data.json().then(function(project){
    let data1="";
    console.log(project);
    localStorage.setItem("brackingDetails", JSON.stringify());

    localStorage.setItem("testJSON", JSON.stringify(project));
    project_string = localStorage.getItem("testJSON");
      testJSON = JSON.parse(project_string);
    console.log(testJSON);

     project.map(function(values){
         data1+=`<div class="card">
         <h1 class="title">
             ${values.name}
         </h1>
         <img  class="img" src=${values.img} alt="img">
         <p>
             ${values.nickname}
         </p>
         <p class="category">
           ${values.status}
         </p>
         <p class="price">
             ${values.birthday}
         </p>
     </div>`;
     });
     document.getElementById("cards").innerHTML=data1;
})
}).catch((error)=>{
    console.log(error);
})