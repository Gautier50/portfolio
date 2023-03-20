import React from 'react'
import "./button.css"

export default function Button({color, title, style}) {
  return (
    <button className={color}>{title}{style}</button>
    
  )
}
