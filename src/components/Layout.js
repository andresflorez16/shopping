import { Component } from 'react'

const styles = {
  layout: {
    backgroundColor: '#d4f7e5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '95vw',
    textAlign: 'center',
    backgroundColor: '#abf2ca',
    borderRadius: '26px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'inset 20px 20px 60px #91ceac, inset -20px -20px 60px #c5ffe8'
  }
}

class Layout extends Component {
  render() {
    return(
      <div style={styles.layout}>
        <div style={styles.content}>{this.props.children}</div>
      </div>
    )
  }
}

export default Layout
