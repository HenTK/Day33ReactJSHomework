import React, { Component } from 'react'
import Modal from './Modal'

export default class Products extends Component {

  render() {
    return (
      <div>
        <div className="card">
            <img className="card-img-top" src={this.props.element.image} alt ="#" />
            <div className="card-body">
                <h4 className="card-title">{this.props.element.name}</h4>
                <p className="card-text">{this.props.element.description}</p>
                <button onClick={()=> this.props.setStateModel(this.props.element)} className="btn btn-dark">SHOW DESC</button>
                <button onClick={()=> this.props.hideStateModel(this.props.element)} className="btn btn-warning">HIDE DESC</button>
                <Modal
                idState = {this.props.idState}
                element = {this.props.element}
                />
            </div>
        </div>
      </div>
    )
  }
}
