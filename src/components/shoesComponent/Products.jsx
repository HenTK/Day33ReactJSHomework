import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    return (
      <div>
        <div className="card">
            <img className="card-img-top" src={this.props.element.image} alt ="#" />
            <div className="card-body">
                <h4 className="card-title">{this.props.element.name}</h4>
                <p className="card-text">{this.props.element.description}</p>
                <button onClick={()=> this.props.showName(this.props.element.name)} className="btn btn-primary">SHOW DESC</button>
            </div>
        </div>
      </div>
    )
  }
}
