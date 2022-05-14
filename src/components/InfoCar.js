import { Component } from 'react'
import ButtonClean from './ButtonClean'

const styles = {
  container: {
    position: 'absolute',
    backgroundColor: '#ddd',
    border: '1px solid #111',
    borderRadius: '4px',
    width: '200px',
    right: 10
  },
  ul: {
    listStyleType: 'none',
    margin: '0',
    padding: '0'
  },
  li: {
    display: 'flex',
    padding: '20px',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #222'
  }
}

class InfoCar extends Component {
  render() {
    const { cleanCar, car } = this.props
    return(
      <div style={styles.container}>
        <ul style={styles.ul}>
          {
            car.map(product =>
              <li style={styles.li} key={product.name}>
                <img src={product.img} width='70' height='60' alt={product.name} />
                <span style={{display: 'inline-block'}}>
                  <strong>{product.name}</strong>
                  <br />
                  Amount: {product.stock}
                  <br />
                  Price: ${product.price}
                </span>
              </li>
            )
          }
        </ul>
        <ButtonClean onClick={() => cleanCar()}>Clean</ButtonClean>
      </div>
    )
  }
}

export default InfoCar
