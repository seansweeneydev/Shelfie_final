import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      imgurl: '',
      name: '',
      price: 0
    }
      this.initialState = this.state
    this.reset = this.reset.bind(this)
  }

  reset = () => {
    this.setState(this.initialState)
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const {imgurl, name, price} = this.state
    return (
      <div>
        <div className="form-input">
          <label className="form-input-titles">Image URL:</label>
            <input name="imgurl" type="text" value={imgurl} onChange={e => this.handleChange(e)}/>
          <label className="form-input-titles">Product Name:</label>
            <input name="name"  type="text" value={name} onChange={e => this.handleChange(e)}/>
          <label className="form-input-titles">Price:</label>
            <input name="price" type="number" placeholder="0" value={price} onChange={e => this.handleChange(e)}/>
        </div>
        <div className="form-buttons">
          <button type="button" onClick={this.reset}>Cancel</button>
          <button type="button" onClick={() => this.props.addToInventory(imgurl, name, price)}>Add to Inventory</button>
        </div>
      </div>
    )
  }
}

export default Form;

