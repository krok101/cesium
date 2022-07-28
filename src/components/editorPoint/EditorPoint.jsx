import styles from './styles.module.css'
import entityStore from "../../store/entityStore"
import { observer } from "mobx-react-lite"

const EditorPoint = observer(() => {
  const { points, currentIndex, replaceCurrentPoint } = entityStore

  const onChangeCoord = (e, i) => {
    const newValue = +e.target.value
    if (isNaN(newValue)) return;
    const newPoint = points[currentIndex]
    newPoint[i] = newValue
  }
  if (currentIndex === -1) return 0; 
  return (
    <div className={styles.container}>
      <h1>edit point({currentIndex + 1}) </h1>
      <input value={points[currentIndex][0]} onChange={(e) => onChangeCoord(e, 0)}/>
      <input value={points[currentIndex][1]} onChange={(e) => onChangeCoord(e, 1)}/>
      <input value={points[currentIndex][2]} onChange={(e) => onChangeCoord(e, 2)}/>
    </div>
  )
})

export default EditorPoint