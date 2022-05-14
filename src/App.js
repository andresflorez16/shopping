import { Component } from 'react'
import Layout from './components/Layout'
import Nav from './components/Nav'
import Products from './components/Products'

class App extends Component {
  state = {
    products: [
      { name: 'Tomato', price: 400, img: '/products-img/tomato.jpg' },
      { name: 'Pea', price: 800, img: '/products-img/pea.jpg' },
      { name: 'Lettuce', price: 1000, img: '/products-img/lettuce.jpg' },
    ],
    car: [],
    isCar: false
  }

  addToCar = (product) => {
    const { car } = this.state
    if (car.find(el => el.name === product.name)) {
      const newCar = car.map(el => el.name === product.name
        ? { ...el, stock: el.stock + 1 }
        : el
      )
      return this.setState({ car: newCar })
    }
    this.setState({ car: this.state.car.concat({ ...product, stock: 1 }) })
  }

  showCar = () => {
    if(!this.state.car.length) return
    this.setState({ isCar: !this.state.isCar })
  }

  cleanCar = () => {
    this.setState({ car: [] })
    this.setState({ isCar: !this.state.isCar })
  }

  render() {
    return(
      <>
        <Nav car={this.state.car} cleanCar={this.cleanCar} showCar={this.showCar} isCar={this.state.isCar} />
        <Layout>
          <Products products={this.state.products} addToCar={this.addToCar}/>
        </Layout>
      </>
    )
  }
}

export default App;
