import { PolylineCollection, Polyline } from "resium"
import { Cartesian3 } from "cesium"
import { observer } from "mobx-react-lite"
import entityStore from "../../../store/entityStore"

const Lines  = observer(() => {
  const positions = entityStore.points.map(coords => Cartesian3.fromDegrees(...coords))
  if (entityStore.points.length < 2) return null
  return (
    <PolylineCollection >
26     <Polyline  positions={positions} />
27   </PolylineCollection>
  )
})


export default Lines