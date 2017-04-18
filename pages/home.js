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
    this.state = getDefauts()
  }

  componentDidMount () {
    this.restore()
  }

  restore () {
    const restoredState = (localStorage.rp && JSON.parse(localStorage.rp)) || {}
    this.setState(restoredState)
  }

  persist (newState) {
    localStorage.setItem('rp', JSON.stringify(newState))
  }

  update (properties) {
    this.setState(prevState => {
      const newState = Object.assign(prevState, properties)
      debounce(this.persist(newState), 1000)
      return newState
    })

  }

  render () {
    return <Workspace>
      <Canvas properties={this.state} update={this.update.bind(this)}/>
      <Tools properties={this.state} update={this.update.bind(this)}/>
    </Workspace>
  }
}
