import { makeAutoObservable } from "mobx"

class EntityStore {
  currentIndex = -1;
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

  setCurrentIndex(index) {
    this.currentIndex = index
  }
}

export default new EntityStore()