import React, { Component } from 'react'

export default class Modal extends Component {

  renderDesc = () =>{
    if(this.props.element.id === this.props.idState)
      return (
        <div style={{display: 'block'}}>
          <p>id: {this.props.element.id}</p>
          <p>name: {this.props.element.name}</p>
          <p>alias: {this.props.element.alias}</p>
          <p>price: {this.props.element.price}$</p>
          <p>description: {this.props.element.description}</p>
          <p>shortDescription: {this.props.element.shortDescription}</p>
          <p>quantity: {this.props.element.quantity}</p>
        </div>
      )
    else
      return (
        <div style={{display: 'none'}}>
        </div>
      )
  }
  
  render() {
    return (
      <div>
          {this.renderDesc()}
      </div>
    )
  }
}
