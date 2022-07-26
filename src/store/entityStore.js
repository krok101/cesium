import { makeAutoObservable } from "mobx"

class EntityStore {
  point = [-122.4175, 37.655, 400]

  constructor () {
    makeAutoObservable(this)
  }

  setPoint(point) {
    this.point = point
  }
}

export default new EntityStore()