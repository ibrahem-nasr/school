import React , {Fragment , useState} from 'react'
import styles from './Filter.module.css'

const Filter = ({Filtration}) => {
    const [filter , setFilter] = useState("")
    const filterName = (e) =>{
        let name = e.target.value
        setFilter(name)
        Filtration(name)
    }
  return (
    <Fragment>
        <div className={styles.filter}>
            <input type="text" placeholder='Search by Name' value={filter} onChange={filterName}/>
        </div>
    </Fragment>
  )
}

export default Filter