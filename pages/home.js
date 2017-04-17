import React from 'react'
import Workspace from '../components/presentation/workspace'
import Canvas from '../components/container/canvas'
import Tools from '../components/container/tools'
import defaultMap from '../utils/componentDefaults'

export default class Root extends React.Component {
  constructor (props) {
    super(props)
    this.state = defaultMap
  }

  update (properties) {
    this.setState(Object.assign(this.state, properties))
  }

  render () {
    return <Workspace>
      <Canvas properties={this.state} update={this.update.bind(this)}/>
      <Tools properties={this.state} update={this.update.bind(this)}/>
    </Workspace>
  }
}
