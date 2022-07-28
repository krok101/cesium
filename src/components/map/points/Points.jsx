import { PointPrimitive, PointPrimitiveCollection } from "resium"
import { Cartesian3, Color} from "cesium"
import { observer } from "mobx-react-lite"
import entityStore from "../../../store/entityStore"
import { useEffect } from "react"



const Point = observer(({ coords, index }) => {
  const position = Cartesian3.fromDegrees(...coords)

  const onClick = (e) => {
    entityStore.toggleActivePoint()
    entityStore.setCurrentIndex(index)
  }

  return <PointPrimitive
    position={position}
    onClick={onClick}
    color={index === entityStore.currentIndex && entityStore.isActivePoint ? Color.RED : Color.WHITE}
  />
})

const Points  = observer(({onMovePoint}) => {
  let isMPress = false;
  const mouseMove = (e) => {
    if (entityStore.isActivePoint && isMPress) {
      onMovePoint(e.clientX, e.clientY)
    }
  }

  const keyDown = (e) => {
    console.log(e)
    if (e.keyCode === 77) isMPress = true
  }

  const keyUp = (e) => {
    if (e.keyCode === 77) {
      isMPress = false
      entityStore.isActivePoint = false
    }
  } 

  useEffect(() => {
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('keydown', keyDown)
    document.addEventListener('keyup', keyUp)
    return () =>{
      document.removeEventListener('mousemove', mouseMove)
      document.removeEventListener('keydown', keyDown)
      document.removeEventListener('keyup', keyUp)
    }
  })

  return (
    <PointPrimitiveCollection>
      { entityStore.points.map((coords, i) => <Point coords={coords} index={i} />)}
    </PointPrimitiveCollection> 
  )
})


export default Points