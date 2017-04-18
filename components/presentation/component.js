import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'
import componentSpec from '../../utils/componentSpec'

const getCSS = (properties) => {
  const css = {}
  Object.keys(componentSpec).map(property => {
    css[property] = properties[property] || componentSpec[property].default
    css[property] += componentSpec[property].unit || ''
    if (property === 'background' && !properties.fill) css.background = 'transparent'
  })
  return css
}

const Component = styled.div`${props => getCSS(props.properties)}`

export default ({properties, onClick}) => <div>
  <Draggable defaultPosition={{x: 32, y: 32}} grid={[32, 32]}>
    <Component properties={properties} onClick={onClick}/>
  </Draggable>
</div>
