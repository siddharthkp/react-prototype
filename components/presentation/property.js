import React from 'react'
import styled from 'styled-components'
import Slider from './tools/slider'
import ColorPicker from './tools/colorpicker'
import Input from './input'
import StyledProperty from './styled-property'

const Property = (props) => <StyledProperty>
  <div>{props.name}</div>
  <div>
    {props.spec.type === 'text' ? <Input
      type='text'
      value={props.defaultValue}
      onChange={event => props.onChange(event.target.value)}
    /> : ''}
    {props.spec.type === 'number' ? <Slider
      spec={props.spec}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    /> : ''}
    {props.spec.type === 'color' ? <ColorPicker
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    /> : ''}
  </div>
  <div></div>
</StyledProperty>

export default Property
