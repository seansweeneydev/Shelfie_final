import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
  render() {
    return(
      <div className="Dashboard">
        {this.props.data.map((element, index) => {
          return <Product
                    info={element} 
                    edit={this.props.edit} 
                    delete={this.props.delete} 
                    key={index}
                    addToInventory={this.props.addToInventory}
                    />
        })}
      </div>
    )
  }
}

export default Dashboard;