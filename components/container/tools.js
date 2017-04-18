import React from 'react'
import componentSpec from '../../utils/componentSpec'
import Sidebar from '../presentation/sidebar'
import Property from '../presentation/property'
import Input from '../presentation/input'

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
    return <Sidebar>
      <div onClick={this.props.new} style={{textAlign: 'center'}}>+</div>
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
