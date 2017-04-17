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
    {props.name === 'name' ? <Input
      type='text'
    /> : ''}
    {['height', 'width', 'border', 'fill'].includes(props.name) ? <Slider
      name={props.name}
      defaultValue={props.defaultValue}
      onChange={value => props.onChange(props.name, value)}
    /> : ''}
    {props.name === 'background' ? <ColorPicker
      defaultValue={props.defaultValue}
      onChange={value => props.onChange(props.name, value)}
    /> : ''}
  </Right>
  <Clear/>
</StyledField>

export default Property
