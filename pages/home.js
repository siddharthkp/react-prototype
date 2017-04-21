import React from 'react'
import Workspace from '../components/presentation/workspace'
import Canvas from '../components/container/canvas'
import Tools from '../components/container/tools'
import canvas from '../utils/canvas'

export default class Root extends React.Component {
  constructor (props) {
    super(props)
    this.state = canvas
  }

  componentDidMount () {this.setState(canvas.restore())}

  new () {this.setState(canvas.add())}
  select (index) {this.setState(canvas.select(index))}
  update (properties) {this.setState(canvas.update(properties))}
  remove () {this.setState(canvas.remove())}
  undo () {this.setState(canvas.undo())}
  redo () {this.setState(canvas.redo())}

  render () {
    const update = this.props.update
    return <Workspace>
      <Canvas
        components={this.state.components}
        active={this.state.active}
        onClick={this.select.bind(this)}
        update={this.update.bind(this)}
      />
      {this.state.components.length ? <Tools
        properties={this.state.components[this.state.active]}
        update={this.update.bind(this)}
        new={this.new.bind(this)}
        remove={this.remove.bind(this)}
        undo={this.undo.bind(this)}
        redo={this.redo.bind(this)}

      /> : ''}
    </Workspace>
  }
}
