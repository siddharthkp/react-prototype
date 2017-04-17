import React from 'react'
import styled from 'styled-components'
import {BlockPicker} from 'react-color'

const Preview = styled.span`
  background: ${props => props.color};
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  + .block-picker {
    margin-top: -25px;
    position: absolute;
    z-index: 9;
    margin-left: -50px;
  }
  + .block-picker > div:first-child {
    display: none;
  }
`

export default class ColorPicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false, color: this.props.defaultValue}
  }
  toggle () {
    this.setState({open: !this.state.open})
  }
  updateColor(color) {
    this.setState({color: color})
  }
  render () {
    return <span>
      <Preview color={this.state.color} onClick={this.toggle.bind(this)}></Preview>
      {this.state.open ? <BlockPicker
        color={this.state.color}
        onChangeComplete={(value) => {
          this.toggle();
          this.updateColor(value.hex)
          this.props.onChange(value.hex)
        }}
      /> : ''}
    </span>
  }
}
