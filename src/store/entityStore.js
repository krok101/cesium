import { makeAutoObservable } from "mobx"

class EntityStore {
  currentIndex = -1;
  points = []
  isActivePoint = false;

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

  toggleActivePoint() {
    this.isActivePoint = !this.isActivePoint
  }
}

export default new EntityStore()