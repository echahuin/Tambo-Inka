import React from 'react'
import classes from './box.module.css'

function Box({ type='paragraph', content, styleBox }) {
  return (
        <div className={classes.box} style={styleBox}>
            {type === 'title' && <h1 className={classes.title}>{content}</h1>}
            {type === 'paragraph' && <p className={classes.paragraph}>{content}</p>}
        </div>
  )
}

export default Box