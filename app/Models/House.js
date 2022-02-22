import { generateId } from "../Utils/generateId.js"

export class House {


  constructor({ price, bedrooms, bathrooms, year, levels, description, imgUrl, id }) {
    this.id = id || ''
    this.bedrooms = bedrooms || 0
    this.bathrooms = bathrooms || 0
    this.year = year || 1970
    this.price = price || 0
    this.levels = levels || 0
    this.description = description || ""
    this.imgUrl = imgUrl || ""
  }

  get Template() {
    return `
    <div class="col-md-4">
    <div class="bg-white rounded shadow">
    <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="car image">
    <div class="p-3">
    <p> Price: '${this.price}'</p>
    <p>Bedrooms: '${this.bedrooms}'</p>
    <p>Bathrooms: '${this.bathrooms}'</p>
    <p>Description: '${this.description}'</p>
    </div>
    <button class="btn btn-outline-danger" onclick="app.housesController.deleteHouse('${this.id}')"> delete </button>
    <button class="btn btn-outline-warning" onclick="app.housesController.editHouse('${this.id}')"> edit </button>
    </div>
    </div>
    </div>`
  }
}