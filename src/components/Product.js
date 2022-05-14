import { Component } from 'react'
import ButtonAdd from './ButtonAdd'

const styles = {
  card: {
    backgroundColor: '#ddd',
    border: '1px solid #111',
    margin: '10px',
    padding: '10px 10px 50px 10px',
    width: '30%',
    borderRadius: '10px'
  },
  container: {
    backgroundColor: '#fff',
    margin: '0 auto',
    padding: '10px 0',
    width: '100%',
    height: '50%',
    borderRadius: '4px'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }
}

class Product extends Component {
  render() {
    const { addToCar, product } = this.props
    return(
      <div style={styles.card}>
        <div style={styles.container}>
          <img style={styles.img} src={product.img}/>
        </div>
        <div style={{height: '30%'}}>
          <h3 style={{margin: '0', padding: '0'}}>{product.name}</h3>
          <p>${product.price}</p>
        </div>
        <div>
          <ButtonAdd addToCar={addToCar} product={product} >Añadir</ButtonAdd>
        </div>
      </div>
    )
  }
}

export default Product
