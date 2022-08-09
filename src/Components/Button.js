import React from 'react'
import './Button.css'
function Button(props) {
  return (
    <div>
        <button className='cart-btn' onClick={ props.add }> { props.val } </button>
    </div>
  )
}

export default Button