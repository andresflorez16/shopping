import { Component } from 'react'

const styles = {
  backgroundColor: '#abf2ca',
  padding: '5px',
  border: '1px solid #000',
  borderRadius: '100px'
}

class BubbleAlert extends Component {
  getNumber(n) {
    if (!n) return
    return n > 9 ? '9+' : n
  }
  render() {
    const { value } = this.props
    return(
      <span style={styles}>{this.getNumber(value)}</span>
    )
  }
}

export default BubbleAlert
