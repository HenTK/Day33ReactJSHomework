import React, { Component } from 'react'
import DataShoes from '../../data/shoesData.json'
import Products from './Products'

export default class shoes extends Component {
    state = {
      productDetails: "",
      idState: 0,
    }

    setStateModel = (shoe) => {
      const data = [...DataShoes];
      const index = data.findIndex((element)=>element.id === shoe.id);
      this.setState({
        productDetails: data[index],
        idState: data[index].id,
      })
      }

      hideStateModel = (shoe) => {
        const data = [...DataShoes];
        const index = data.findIndex((element)=>element.id === shoe.id);
        data[index] = "";
        this.setState({
          productDetails: data[index],
          idState: 0,
      })
      }

    renderShowList = () => {
        return DataShoes.map((element) => {
            return (
            <div key={element.id} className="col-4">
                <Products
                element={element}
                setStateModel = {this.setStateModel}
                hideStateModel = {this.hideStateModel}
                productDetails = {this.state.productDetails}
                idState = {this.state.idState}
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
