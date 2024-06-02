let data = [
  {
    "name": "Green Haven Nursery",
    "address": "123 Spring Blossom Lane, Evergreen Valley, Meadowville, USA",
    "telephone": "+1 (555) 123-4567",
    "fax": "+1 (555) 765-4321"
  },
  {
    "name": "Blossom Retreat Garden Center",
    "address": "456 Petal Path, Bloomfield Heights, Springdale, Canada",
    "telephone": "+1 (555) 987-6543",
    "fax": "+1 (555) 321-8765"
  },
  {
    "name": "Eden's Botanical Emporium",
    "address": "789 Garden Grove Avenue, Paradise Park, Greenfield, UK",
    "telephone": "+44 20 1234 5678",
    "fax": "+44 20 5678 1234"
  },
  {
    "name": "Verdant Oasis Plant Shop",
    "address": "101 Leafy Lane, Forest Falls, Maplewood, Australia",
    "telephone": "+61 2 9876 5432",
    "fax": "+61 2 5432 9876"
  },
  {
    "name": "Leafy Acres Garden Boutique",
    "address": "234 Willow Way, Shady Grove, Woodland Hills, New Zealand",
    "telephone": "+64 9-876 5432",
    "fax": "+64 9-5432 876"
  }
]

document.addEventListener("DOMContentLoaded", () => {
  let content = document.getElementById("location-details");
  data.forEach(el => {
    let str = `
      <div class="card">
        <p><b>${el.name}</b></p>
        <p>${el.telephone}</p>
        <p>${el.fax}</p>
        <p style="">${el.address}</p>
      </div>
      `
    content.innerHTML += str;
  })
})
