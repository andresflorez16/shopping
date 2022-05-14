import { Component} from 'react'
import Product from './Product.js'

const styles = {
  display: 'flex',
  justifyContent: 'center',
  width: '95%',
  heigth: '90%',
  margin: 'auto',
  flexWrap: 'wrap'
}

class Products extends Component {
  render() {
    const { addToCar, products } = this.props
    return(
      <div style={styles}>
        {
          products.map(product => <Product addToCar={addToCar} key={product.name} product={product} />)
        }
      </div>
    )
  }
}

export default Products
