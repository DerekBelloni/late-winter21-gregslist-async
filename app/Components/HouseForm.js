import { Car } from "../Models/Car.js"
import { House } from "../Models/House.js"

export function getHouseForm(house = {}) {

  // @ts-ignore
  const houseData = new House(house)
  return `
    <form class="row p-2" onsubmit="app.housesController.pickAHouse('${houseData.id}')">
    <h3 class="col-12">Find a House</h3>
    <div class="mb-3 col-5">
              <label for="" class="form-label">Price</label>
              <input required type="text" class="form-control" name="price" id="price" aria-describedby="helpId"
              placeholder="" value="${houseData.price}">
              </div>
              <div class="mb-3 col-5">
              <label for="" class="form-label">Levels</label>
              <input required type="text" class="form-control" name="levels" id="levels"
              aria-describedby="helpId" placeholder="" value="${houseData.levels}">
              </div>
              <div class="mb-3 col-5">
              <label for="" class="form-label">Year</label>
              <input required type="text" class="form-control" name="year" id="year"
              aria-describedby="helpId" placeholder="" value="${houseData.year}">
              </div>
              <div class="mb-3 col-5">
              <label for="" class="form-label">Bedrooms</label>
              <input required type="text" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="helpId"
                placeholder="" value="${houseData.bedrooms}">
            </div>
            <div class="mb-3 col-5">
            <label for="" class="form-label">Bathrooms</label>
            <input required type="text" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="helpId"
            placeholder="" value="${houseData.bathrooms}">
            </div>
            <div class="mb-3 col-5">
              <label for="" class="form-label">Description</label>
              <input required type="text" class="form-control" name="description" id="description"
              aria-describedby="helpId" placeholder="" value="${houseData.description}">
              </div>
              <div class="mb-3 col-5">
              <label for="" class="form-label">Image Url</label>
              <input required type="text" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="helpId"
              placeholder="" value="${houseData.imgUrl}">
              </div>
              <button class="col-4 offset-8 btn btn-success"> ${houseData.id ? 'Edit' : 'Create'}</button>
              </div>
              </form>
              
              `
}
