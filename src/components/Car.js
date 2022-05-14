import { Component } from 'react'
import '../index.css'
import BubbleAlert from './BubbleAlert'
import InfoCar from './InfoCar'

const styles = {
  bubble: {
    position: 'relative',
    top: 20,
    left: 10
  }
}

class Car extends Component {
  render() {
    const { car, isCar, showCar, cleanCar } = this.props
    const stocks = car.reduce((ac, el) => ac + el.stock, 0)
    return(
      <div>
        <span style={styles.bubble}>
          {
            stocks != 0
              ? !isCar ? <BubbleAlert value={stocks} /> : null
              : null
          }
        </span>
        <button onClick={() => showCar()}>
          <span className='button_top'>Car</span>
        </button>
        {
          isCar
            ? <InfoCar cleanCar={cleanCar} car={car} />
            : null
        }
      </div>
    )
  }
}

export default Car
