import React from 'react'
import componentSpec from '../../utils/componentSpec'
import Sidebar from '../presentation/sidebar'
import Property from '../presentation/property'
import Input from '../presentation/input'
import Button from '../presentation/button'
import StyledProperty from '../presentation/styled-property'

export default class Tools extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  update (key, value) {
    const property = {}
    property[key] = value
    this.props.update(property)
  }

  render () {
    const properties = Object.keys(componentSpec)
    .filter(property => !componentSpec[property].hidden)

    return <Sidebar>
      <StyledProperty>
        <Button onClick={this.props.new}>+</Button>
        <Button onClick={this.props.remove}>✕</Button>
        <div></div>
      </StyledProperty>

      <StyledProperty>
        <Button onClick={this.props.undo}>↺</Button>
        <Button onClick={this.props.redo}>↻</Button>
        <div></div>
      </StyledProperty>

      {properties.map((property, index) => <div key={index}>
        <Property
          name={componentSpec[property].displayName || property}
          spec={componentSpec[property]}
          defaultValue={this.props.properties[property]}
          onChange={value => this.update(property, value)}
        />
      </div>)}
    </Sidebar>
  }
}
