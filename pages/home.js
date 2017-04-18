import React from 'react'
import Workspace from '../components/presentation/workspace'
import Canvas from '../components/container/canvas'
import Tools from '../components/container/tools'
import componentSpec from '../utils/componentSpec'

const getDefauts = () => {
  const defaultValues = {}
  for (let key in componentSpec) defaultValues[key] = componentSpec[key].default
  return defaultValues
}

export default class Root extends React.Component {
  constructor (props) {
    super(props)
    this.state = getDefauts()
  }

  componentDidMount () {
    this.restore()
  }

  restore () {
    const rp = (localStorage.rp && JSON.parse(localStorage.rp)) || {}
    this.setState(rp[this.state.name])
  }

  persist () {
    const rp = (localStorage.rp && JSON.parse(localStorage.rp)) || {}
    rp[this.state.name] = this.state
    localStorage.setItem('rp', JSON.stringify(rp))
  }

  update (properties) {
    this.setState(Object.assign(this.state, properties))
    this.persist()
  }

  render () {
    return <Workspace>
      <Canvas properties={this.state} update={this.update.bind(this)}/>
      <Tools properties={this.state} update={this.update.bind(this)}/>
    </Workspace>
  }
}
