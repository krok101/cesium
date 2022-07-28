import { PointPrimitive, PointPrimitiveCollection } from "resium"
import { Cartesian3} from "cesium"
import { observer } from "mobx-react-lite"
import entityStore from "../../../store/entityStore"



const Point = observer(({coords, index}) => {
  const position = Cartesian3.fromDegrees(...coords)
  const onClick = (e) => {
    console.log('e::', e)
    entityStore.setCurrentIndex(index)
  }

  return <PointPrimitive  position={position} onClick={onClick} />
})

const Points  = observer(() => (
  <PointPrimitiveCollection>
    { entityStore.points.map((coords, i) => <Point coords={coords} index={i}/>)}
  </PointPrimitiveCollection> 
))


export default Points