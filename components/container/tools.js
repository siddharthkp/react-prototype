import React from 'react'
import defaultMap from '../../utils/componentDefaults'
import Sidebar from '../presentation/sidebar'
import Property from '../presentation/property'

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
    const properties = ['width', 'height', 'background', 'border-radius']
    return <Sidebar>
      {properties.map((property, index) => <div key={index}>
        <Property
          name={property}
          defaultValue={this.props.properties[property]}
          onChange={this.update.bind(this)}
        />
      </div>)}
    </Sidebar>
  }
}
