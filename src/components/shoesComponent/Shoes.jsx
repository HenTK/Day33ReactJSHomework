import React, { Component } from 'react'
import DataShoes from '../../data/shoesData.json'
import Products from './Products'

export default class shoes extends Component {
    showName = (name) => {
        alert(name);
      }
    renderShowList = () => {
        return DataShoes.map((element) => {
            return (
            <div key={element.id} className="col-4">
                <Products
                element={element}
                showName = {this.showName}
                />
            </div>
            )
        })
    }
  render() {
    return (
      <div>
        <h3>Shoes Ex</h3>
        <div className="row">
        {this.renderShowList()}
        </div>
      </div>
    )
  }
}
