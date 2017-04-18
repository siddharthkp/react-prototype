import React from 'react'
import Workspace from '../components/presentation/workspace'
import Canvas from '../components/container/canvas'
import Tools from '../components/container/tools'
import componentSpec from '../utils/componentSpec'

export default class Root extends React.Component {
  constructor (props) {
    super(props)
    const defaultValues = {}
    for (let key in componentSpec) defaultValues[key] = componentSpec[key].default
    this.state = defaultValues
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
