import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
    this.addToInventory = this.addToInventory.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/inventory')
      .then(res => {
        this.setState({ list: res.data })
    })
  }

  addToInventory = (imgurl, name, price) => {
    axios
      .post('/api/product', {imgurl, name, price})
      .then(res => {
        this.setState({ list: res.data })
    })
  }

  edit = (id, name, price, imgurl) => {
    console.log(imgurl, name, price)
    axios
      .put(`/api/product/${id}`, {imgurl, name, price})
      .then(res => {
        this.setState({ list: res.data })
    })
  }

  delete = (id) => {
    axios
      .delete(`/api/product/${id}`)
      .then(res => {
        this.setState({ people: res.data })
    })
  }  

  render() {
    return (
      <div className="App">
        <Header />
        <Form addToInventory={this.addToInventory}/>
        <Dashboard addToInventory={this.addToInventory} edit={this.edit} delete={this.delete} data={this.state.list} />
      </div>
    )
  }
}

export default App;
