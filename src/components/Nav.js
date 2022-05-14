import { Component } from 'react'
import Title from './Title'
import Car from './Car'

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ddd',
    boxShadow: '0 2px 10px 5px #abf2ca',
    marginBottom: '20px',
    padding: '0 10px',
    borderBottom: '1px solid #111'
  }
}

class Nav extends Component {
  render() {
    const { isCar, car, cleanCar, showCar } = this.props
    return(
      <div style={styles.nav}>
        <Title />
        <Car car={car} isCar={isCar} cleanCar={cleanCar} showCar={showCar} />
      </div>
    )
  }
}

export default Nav
