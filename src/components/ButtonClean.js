import { Component } from 'react'

const styles = {
  backgroundColor: '#d00',
  color: '#fff',
  padding: '10px 15px',
  margin: '10px'
}

class ButtonClean extends Component {
  render() {
    return(
      <button style={styles} {...this.props} />
    )
  }
}

export default ButtonClean
