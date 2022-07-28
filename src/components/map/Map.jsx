import { Viewer } from "resium"
import { createWorldTerrain} from "cesium"
import styles from './styles.module.css'
import { useEffect, useRef } from "react"
import { observer } from "mobx-react-lite"
import entityStore from "../../store/entityStore"
import { radiansToDegrees, getLocationFromScreenXY } from './helpers'
import Points from './points/Points'
import Lines from './lines/Lines'
import Poligon from './poligon/Poligon'

const terrainProvider = createWorldTerrain()

const Map = observer(() => {
  const cesium = useRef()
  let isNPress = false

  const addPoint = (e) => {
    let [x, y] = getLocationFromScreenXY(e.position.x, e.position.y, cesium)
    x = radiansToDegrees(x)
    y = radiansToDegrees(y)
    entityStore.addPoint([y, x, 400])
  }

  const onMovePoint = (posX, posY) => {
    let [x, y] = getLocationFromScreenXY(posX, posY, cesium)
    x = radiansToDegrees(x)
    y = radiansToDegrees(y)
    entityStore.points[entityStore.currentIndex] = [y, x, 400]
  }

  const onClickViewer = (e) => {
    if (isNPress) {
      addPoint(e)
    }
  }

  const keyDown = (e) => {
    if (e.keyCode === 78) isNPress = true
  }

  const keyUp = (e) => {
    if (e.keyCode === 78) isNPress = false
  } 

  useEffect(() => {
    document.addEventListener('keydown', keyDown)
    document.addEventListener('keyup', keyUp)
    return () =>{
      document.removeEventListener('keydown', keyDown)
      document.removeEventListener('keyup', keyUp)
    }
  })

  return (
    <Viewer ref={cesium} full terrainProvider={terrainProvider} className={styles.container}  onClick={onClickViewer}>
      <Points onMovePoint={onMovePoint}/>
      <Lines/>
      <Poligon/>
    </Viewer>
  )
})

export default Map