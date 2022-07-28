import { Entity, PointGraphics } from "resium"
import { Cartesian3} from "cesium"
import { observer } from "mobx-react-lite"
import entityStore from "../../../store/entityStore"

const Points  = observer(() => entityStore.points.map(coords => {
  const position = Cartesian3.fromDegrees(...coords)
  return (
    <Entity position={position} onMouseMove={e => console.log(e)}>
      <PointGraphics pixelSize={10}/>
    </Entity>
  )}
))


export default Points