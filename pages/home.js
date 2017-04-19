import React from 'react'
import Workspace from '../components/presentation/workspace'
import Canvas from '../components/container/canvas'
import Tools from '../components/container/tools'
import componentSpec from '../utils/componentSpec'
import debounce from 'debounce'

const getDefauts = () => {
  const defaultValues = {}
  for (let key in componentSpec) defaultValues[key] = componentSpec[key].default
  return defaultValues
}

export default class Root extends React.Component {
  constructor (props) {
    super(props)
    const newComponentState = getDefauts()
    this.state = {canvas: [newComponentState], activeIndex: 0}
  }

  new () {
    const newComponentState = getDefauts()
    this.setState(prevState => {
      prevState.canvas.push(newComponentState)
      prevState.activeIndex = prevState.canvas.length - 1
      return prevState
    })
  }

  remove () {
    this.setState(prevState => {
      prevState.canvas[this.state.activeIndex].left = -1000
      prevState.activeIndex = prevState.canvas.length - 1
      return prevState
    })
  }

  update (properties) {
    this.setState(prevState => {
      const activeIndex = this.state.activeIndex
      const newState = Object.assign(prevState.canvas[activeIndex], properties)
      return newState
    })
  }

  active (index) {
    this.setState({activeIndex: index})
  }

  render () {
    return <Workspace>
      <Canvas
        components={this.state.canvas}
        activeIndex={this.state.activeIndex}
        onClick={this.active.bind(this)}
        update={this.update.bind(this)}
      />
      <Tools
        properties={this.state.canvas[this.state.activeIndex]}
        update={this.update.bind(this)}
        new={this.new.bind(this)}
        remove={this.remove.bind(this)}
      />
    </Workspace>
  }
}
