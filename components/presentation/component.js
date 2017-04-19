import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'
import componentSpec from '../../utils/componentSpec'

const getCSS = (properties) => {
  const css = {}
  Object.keys(componentSpec).map(property => {
    if (typeof properties[property] !== 'undefined') css[property] = properties[property]
    else css[property] = componentSpec[property].default

    css[property] += componentSpec[property].unit || ''

    if (property === 'background' && !properties.fill) css.background = 'transparent'
    if (property === 'opacity') css.opacity = properties.opacity / 100
    if (property === 'width' && css.width === '0px') css.width = '1px'
    if (property === 'height' && css.height === '0px') css.height = '1px'
  })
  return css
}

const Component = styled.div`${props => getCSS(props.properties)}`

export default ({properties, onClick}) => <div>
  <Draggable defaultPosition={{x: 32, y: 32}} grid={[32, 32]}>
    <Component properties={properties} onClick={onClick}/>
  </Draggable>
</div>
