import React, { Component } from "react";
import axios from "axios";
import moment from "moment-timezone";
import { Col, Row, Card } from "antd";

export const Activities3Days = props => {

  const currentDate = moment().tz("America/Vancouver").format("dddd, MMMM Do YYYY");
  const oneDayAgo = moment().tz("America/Vancouver").subtract(1, "days").format("dddd, MMMM Do YYYY");
  const twoDayAgo = moment().tz("America/Vancouver").subtract(2, "days").format("dddd, MMMM Do YYYY");
  const threeDayAgo = moment().tz("America/Vancouver").subtract(3, "days").format("dddd, MMMM Do YYYY");

  return (
    <>

      <Card title="Recent Acitvities" bordered={true} style={{ padding: "0 2em", margin: "0% 25%" }}>
        <div className="activity-form"> 
          <div className="today-activity">
            <p>
              <strong className="activity-date"> Today's Activities </strong>
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
          </div>
          <div className="last-3-days">
            <p>
              <strong className="activity-date"> Last Three Days: </strong>
            </p>
            <p>
              <strong className="l3-activity-date"> {oneDayAgo} </strong>
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
              <strong className="l3-activity-date">{twoDayAgo}</strong>
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
              <strong className="l3-activity-date">{threeDayAgo}</strong>
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
          </div>
        </div>
      </Card>
    </>
  )
}
