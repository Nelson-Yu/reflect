import React from 'react'

export const Checkbox = props => {
  const checked = () => {
    if (props.isChecked) {
      return <img src={props.image2}/>
    } else {
      return <img src={props.image}/>
    }
  }

  return (
    <li className="activity">
      <input type="checkbox" id={props.id} className="activity-input" value={props.value} checked={props.isChecked} onClick={props.handleCheck}/>
      <label className="activity-icon" for={props.id}>
        {checked()} 
      </label>
      <p className="text">{props.value}</p>
    </li>
  )
}
