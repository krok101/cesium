import { Entity, PolygonGraphics } from "resium"
import { Cartesian3, Color } from "cesium"
import { observer } from "mobx-react-lite"
import entityStore from "../../../store/entityStore"

const Poligon  = observer(() => {
  if (entityStore.points.length < 3) return null
  const positions = []
  entityStore.points.forEach(coords => positions.push(coords[0], coords[1]))
  const poligonCoords = Cartesian3.fromDegreesArray(positions)
  return (
    <Entity>
      <PolygonGraphics
        hierarchy={poligonCoords}
        material={Color.PURPLE}
        extrudedHeight={50000}
        outline={true}
      />
    </Entity>
  )
})


export default Poligon