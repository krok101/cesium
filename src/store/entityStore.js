import { makeAutoObservable } from "mobx"

class EntityStore {
  points = []

  constructor () {
    makeAutoObservable(this)
  }

  addPoint(point) {
    this.points.push(point)
  }

  removePoints() {
    this.points = []
  }
}

export default new EntityStore()