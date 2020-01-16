import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditable: false,
      priceChange: this.props.info.price,
      imgurlChange: this.props.info.imgurl,
      nameChange: this.props.info.name,
    }
  }

  componentDidMount() {
    this.setState({
      list: this.props.info.list
    })
  }

  toggleEdit = () => {
    this.setState({
      isEditable: !this.state.isEditable
    })
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState({ 
      [name]: value
    })
  }

  store() {
    this.props.edit(this.props.info.id, this.state.nameChange, this.state.priceChange, this.state.imgurlChange)
    this.toggleEdit()
}

render() {
  console.log(this.state)
  const {id, price, imgurl, name} = this.props.info
  const {isEditable, priceChange, imgurlChange, nameChange} = this.state
  if(!isEditable) {
    return (
      <div className="Product">
        <div>
          {imgurl} 
        </div>
        <div>
          {name}
        </div>
        <div>
          {price}
        </div>
        <button onClick={this.toggleEdit}>Edit</button>
        <button onClick={() => this.props.delete(id)}>Delete</button>
      </div>
    )
  } else {
    return (
        <div className="Product">
          <label className="Product-titles">Image URL:</label>
            <input name="imgurlChange" type="text" value={imgurlChange} onChange={e => this.handleChange(e)}/>
          <label className="Product-titles">Product Name:</label>
            <input name="nameChange"  type="text" value={nameChange} onChange={e => this.handleChange(e)}/>
          <label className="Product-titles">Price:</label>
            <input name="priceChange" type="number" placeholder="0" value={priceChange} onChange={e => this.handleChange(e)}/>
          <button type="button" onClick={() => this.store()}>Save</button>
        </div>
      )
    }
  }
}

export default Product;