import React from 'react'

export const Checkbox = props => {
  return (
    <li className="activity">
      <input type="checkbox" id={props.id} className="activity-input" value={props.value} checked={props.isChecked} onClick={props.handleCheck}/>
      <label className="activity-icon" for={props.id}>
        <img src={props.image}/> 
      </label>
    </li>
  )
}
