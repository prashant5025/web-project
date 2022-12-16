import React from 'react'

import styles from './Button.module.css'

const Button = (props) => {
  return (
    <div>
            <button className="classes.button" type={props.type || 'button'} onClick={props.onClick}></button>
    </div>
  )
}

export default Button