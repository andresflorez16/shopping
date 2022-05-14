import { Component } from 'react'
import '../index.css'

const styles = {
  display: 'inline-block',
  backgroundColor: '#ffa857',
  borderRadius: '4px',
  borderRight: '2px solid #aaa',
  borderBottom: '2px solid #aaa',
  margin: '0 auto',
  padding: '5px 10px'
}

class ButtonAdd extends Component {
  render() {
    const { addToCar, product } = this.props
    return(
      <div style={styles}>
        <button className='cta' onClick={() => addToCar(product)}>
          <span className='hover-underline-animation'> Shop Now </span>
          <svg id='arrow-horizontal' xmlns='http://www.w3.org/2000/svg' width='30' height='10' viewBox='0 0 46 16'>
            <path id='Path_10' data-name='Path 10' d='M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z' transform='translate(30)'></path>
          </svg>
        </button>
      </div>
    )
  }
}

export default ButtonAdd
