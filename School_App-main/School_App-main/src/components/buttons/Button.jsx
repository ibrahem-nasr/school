import React from 'react'
import styles from './Button.module.css'

const Button = ({onClick , value}) => {
  return (
    <div>
        <button className={styles.button} onClick={onClick}>
            {value}
        </button>
    </div>
  )
}

export default Button