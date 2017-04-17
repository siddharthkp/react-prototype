import React from 'react'
import styled from 'styled-components'
import Slider from './tools/slider'
import ColorPicker from './tools/colorpicker'

const StyledField = styled.div`
  padding: 10px;
  border-bottom: 1px solid #DDD;
`

const Property = (props) => <StyledField>
  {props.name}:
  {['height', 'width'].includes(props.name) ? <Slider
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
