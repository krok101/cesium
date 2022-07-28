import styles from './styles.module.css'
import entityStore from "../../store/entityStore"
import { observer } from "mobx-react-lite"
import { sampleTerrainMostDetailed, createWorldTerrain, Cartographic, when } from "cesium"

const EditorPoint = observer(() => {
  console.log(entityStore.point)
  const onChangeCoord = (e, i) => {
    if (isNaN(+e.target.value)) return;
    const newPoint = [...entityStore.point]
    newPoint[i] = +e.target.value
    console.log(entityStore.point, newPoint)
    entityStore.setPoint(newPoint)

    
    var terrainProvider = createWorldTerrain();
    var positions = [
        Cartographic.fromDegrees(newPoint[0], newPoint[1]),
    ];
    sampleTerrainMostDetailed(terrainProvider, positions)
      .then(data => {
        console.log('data::', data[0])
      })

  }
  return (
    <div className={styles.container}>
      <h1>edit point </h1>
{/*       <input value={entityStore.point[0]} onChange={(e) => onChangeCoord(e, 0)}/>
      <input value={entityStore.point[1]} onChange={(e) => onChangeCoord(e, 1)}/>
      <input value={entityStore.point[2]} onChange={(e) => onChangeCoord(e, 2)}/> */}
    </div>
  )
})

export default EditorPoint