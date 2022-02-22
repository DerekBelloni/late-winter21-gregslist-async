import { House } from "../Models/House.js"
import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
class HousesService {


  async getAllHouses() {
    const res = await api.get('houses')
    console.log('[HousesService]: getAllHouses', res.data)
    ProxyState.houses = res.data.map(hd => new House(hd))
  }

  async pickAHouse(newHouse) {
    const res = await api.post('houses', newHouse)
    console.log('[HousesService]: pickAHouse', res.data)
    let realHouse = new House(newHouse);
    console.log('its a real house!', realHouse);
    ProxyState.houses = [realHouse, ...ProxyState.houses]
  }

  async deleteHouse(houseId) {
    console.log('delete this house', houseId);
    const res = await api.delete(`houses/${houseId}`)
    console.log('[HousesService]: deleteHouse:', res.data);
    ProxyState.houses = ProxyState.houses.filter(h => h.id != houseId)
  }

  async editHouse(houseData, id) {
    const res = await api.put('houses/' + id, houseData)
    console.log('Edit Houses', res.data)
    const houseIndex = ProxyState.houses.findIndex(h => h.id == id)
    ProxyState.houses.splice(houseIndex, 1, new House(res.data))
    ProxyState.houses = ProxyState.houses
  }

}

export const housesService = new HousesService()