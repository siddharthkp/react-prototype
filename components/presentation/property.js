import React from 'react'
import styled from 'styled-components'
import Slider from './tools/slider'
import ColorPicker from './tools/colorpicker'

const StyledField = styled.div`
  padding: 10px;
  background: #373938;
`

const Property = (props) => <StyledField>
  <span>{props.name}</span> {['height', 'width', 'border-radius'].includes(props.name) ? <Slider
    name={props.name}
    defaultValue={props.defaultValue}
    onChange={value => props.onChange(props.name, value)}
  /> : ''}
  {props.name === 'background' ? <ColorPicker
    defaultValue={props.defaultValue}
    onChange={value => props.onChange(props.name, value)}
  /> : ''}
  <br/>
</StyledField>

export default Property
