function _fetchData() {
    fetch("https://www.breakingbadapi.com/api/characters?limit=10").then(
      function (data) {
          console.log(data);
          data.json().then(function (response) {
          console.log(response);
          response.forEach((item) => {
              console.log(item);
             
              let ele1 = document.querySelector(".content");
              let img = document.createElement("img");
              img.setAttribute("src",item.img)
              ele1.append(img);
          });
        })
      }
    )
}
_fetchData;