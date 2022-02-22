import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../Components/HouseForm.js"
import { housesService } from "../Services/HousesService.js"
import { Pop } from "../Utils/Pop.js"

function _drawHouse() {
  let template = ''
  ProxyState.houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}

export class HouseController {

  constructor() {
    ProxyState.on('houses', _drawHouse)
    console.log('house controller loaded')
  }

  async viewHouses() {
    try {
      await housesService.getAllHouses()
      document.getElementById('modal-body-slot').innerHTML = getHouseForm()
      document.getElementById('create-button').classList.remove('visually-hidden')
    } catch (error) {
      Pop.toast(error.message, 'error')

    }


  }

  // @ts-ignore
  pickAHouse(id) {
    window.event.preventDefault()
    let form = window.event.target
    let rawData = {
      // @ts-ignore
      price: form.price.value,
      // @ts-ignore
      levels: form.levels.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      bedrooms: form.bedrooms.value,
      // @ts-ignore
      bathrooms: form.bathrooms.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value
    }
    if (!id) {
      housesService.pickAHouse(rawData)
    } else {
      housesService.editHouse(rawData, id)
    }
    let modal = document.getElementById('new-listing')
    // @ts-ignore
    form.reset()
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(modal).hide()
    Pop.toast('Complete')

    // @ts-ignore
    form.reset()
  }

  async deleteHouse(houseId) {
    try {
      if (await Pop.confirm()) {
        await housesService.deleteHouse(houseId)
      }
    } catch (error) {
      Pop.error(error.message)
      console.error('error')
    }
  }

  async editHouse(houseId) {
    let house = ProxyState.houses.find(h => h.id == houseId)
    document.getElementById('modal-body-slot').innerHTML = getHouseForm(house)
    let modal = document.getElementById('new-listing')
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(modal).toggle()

  }



}