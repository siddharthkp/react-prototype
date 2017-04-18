import React from 'react'
import styled from 'styled-components'
import Slider from './tools/slider'
import ColorPicker from './tools/colorpicker'
import Input from './input'

const StyledField = styled.div`
  padding: 10px;
  height: 50px;
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
      defaultValue={props.defaultValue}
    /> : ''}
    {props.spec.type === 'number' ? <Slider
      spec={props.spec}
      defaultValue={props.defaultValue}
      onChange={value => props.onChange(props.name, value)}
    /> : ''}
    {props.spec.type === 'color' ? <ColorPicker
      defaultValue={props.defaultValue}
      onChange={value => props.onChange(props.name, value)}
    /> : ''}
  </Right>
  <Clear/>
</StyledField>

export default Property
