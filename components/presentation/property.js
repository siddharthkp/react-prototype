import React from 'react'
import styled from 'styled-components'
import Slider from './tools/slider'
import ColorPicker from './tools/colorpicker'
import Input from './input'

const StyledField = styled.div`
  padding: 10px;
  height: 30px;
`

const Left = styled.div`
  float: left;
  width: 50%;
`
const Right = styled.div`
  float: left;
  width: 50%
`

const Clear = styled.div`
  clear:both;
`

const Property = (props) => <StyledField>
  <Left>{props.name}</Left>
    <Right>
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
  </Right>
  <Clear/>
</StyledField>

export default Property
