function loadPage() {
  let list = ['homepage', 'products', 'aboutus', 'locations']
  list.forEach(el => {
    document.getElementById(el).style.display = 'none'
  })
  let path = window.location.href.split('?')[1]
  if (!path) document.getElementById('homepage').style.display = 'flex'
  else {
    let str = path.split("=")[1]
    console.log(str);
    document.getElementById(str).style.display = 'flex'
  }
}

function fetchData() {
  fetch('/data/dataProducts.json')
    .then(data => data.json())
    .then(dataProducts => {
      let content = document.getElementById("content-products");
      dataProducts.forEach(el => {
        let str = `<div class="card"><p><b>${el.name}</b></p><img src="${el.image}" class="imageproduct" /><p>${el.watering} Watering</p></div>`
        content.innerHTML += str;
      })
    })
    .then(() => {
      return fetch('/data/dataLocations.json')
    })
    .then(data => data.json())
    .then(dataLocations => {
      let content = document.getElementById("location-details");
      dataLocations.forEach(el => {
        let str = `<div class="card"><p><b>${el.name}</b></p><p>${el.telephone}</p><p>${el.fax}</p><p style="">${el.address}</p></div>`
        content.innerHTML += str;
      })
    })
}

document.addEventListener("DOMContentLoaded", () => {
  loadPage()
  fetchData()
})