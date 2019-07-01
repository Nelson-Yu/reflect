import React, { Component } from "react";
import axios from "axios";
import moment from "moment-timezone";

export const Activities3Days = props => {

  const oneDayAgo = moment().tz("America/Vancouver").subtract(1, "days").format("dddd, MMMM Do YYYY");
  const twoDayAgo = moment().tz("America/Vancouver").subtract(2, "days").format("dddd, MMMM Do YYYY");
  const threeDayAgo = moment().tz("America/Vancouver").subtract(3, "days").format("dddd, MMMM Do YYYY");

  return (
    <>
      <p className="recap-text"><strong>"You've Been Working A Lot!"</strong></p>

      <p>
        <strong> {oneDayAgo} </strong>
        <br/>
        <span className="activity-badge">
          <img src={props[2].image}/> 
        </span>
        <span className="activity-badge">
          <img src={props[5].image}/> 
        </span>
        <span className="activity-badge">
          <img src={props[10].image}/> 
        </span>
        <span className="activity-badge">
          <img src={props[15].image}/> 
        </span>
      </p>
      <p>
        <strong>{twoDayAgo}</strong>
        <br/>
        <span className="activity-badge">
          <img src={props[2].image}/> 
        </span>
        <span className="activity-badge">
          <img src={props[9].image}/> 
        </span>
        <span className="activity-badge">
          <img src={props[15].image}/> 
        </span>
        <span className="activity-badge">
          <img src={props[18].image}/> 
        </span>
        <span className="activity-badge">
          <img src={props[19].image}/> 
        </span>
      </p>
      <p>
        <strong>{threeDayAgo}</strong>
        <br/>
        <span className="activity-badge">
          <img src={props[5].image}/> 
        </span>
        <span className="activity-badge">
          <img src={props[6].image}/> 
        </span>
        <span className="activity-badge">
          <img src={props[15].image}/> 
        </span>
      </p>
    </>
  )
}
