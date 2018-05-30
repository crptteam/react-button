import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src/index'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-button Demo</h1>
      <Example/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
