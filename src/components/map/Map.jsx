import { Viewer, Entity, PointGraphics, EntityDescription } from "resium"
import { Cartesian3, createWorldTerrain } from "cesium"
import styles from './styles.module.css'
import { useRef } from "react"
import { observer } from "mobx-react-lite"
import entityStore from "../../store/entityStore"

const terrainProvider = createWorldTerrain()

const Map = observer(() => {
  const position = Cartesian3.fromDegrees(...entityStore.point )

  const entityRef = useRef()
  const onClickEntity = (e) => {
    entityStore.setPoint(entityRef.current.cesiumElement.position._value)
  }
  return (
    <Viewer full terrainProvider={terrainProvider} className={styles.container}>
      <Entity position={position} name="Tokyo" onClick={(e) => onClickEntity(e)} ref={entityRef}>
        <PointGraphics pixelSize={10}/>
        <EntityDescription>
        </EntityDescription>
      </Entity>
    </Viewer>
  )
})

export default Map