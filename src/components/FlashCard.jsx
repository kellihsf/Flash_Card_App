import React, { Component } from "react";
import "./FlashCard.css";

class FlashCardBack extends React.Component {
  render() 
  {
    return (
      <div className="FlashCard" onClick={this.props.pickCard}>
      <div className={!this.props.isFlipped ? "FlashCardInner" : "FlashCardInner flipped" }>
       <div className="FlashCardInner">
        <div className="FlashCardBack">
          <div className="FlashCardFront">
              ∆ </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default FlashCardBack;
