import React from 'react'

export const Checkbox = props => {
  return (
    <li>
      <input type="checkbox" id={props.id} value={props.value} checked={props.isChecked} onClick={props.handleCheck}/>
      <label for={props.id}><img src={props.image}/></label>
    </li>
  )
}
