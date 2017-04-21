import React from 'react'
import styled from 'styled-components'
import {DraggableCore} from 'react-draggable'
import componentSpec from '../../utils/componentSpec'

const getCSS = (properties, active) => {
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

  if (active) css['box-shadow'] = '0 0 0 1px #85D7FF'
  return css
}

const Component = styled.div`${props => getCSS(props.properties, props.active)}`

export default ({active, properties, onClick, update}) => <div>
  <DraggableCore
    defaultPosition={{x: properties.left, y: properties.top}}
    grid={[componentSpec.left.step, componentSpec.top.step]}
    onDrag={(event, data) => {
      onClick()
      update({
        top: properties.top + data.deltaY,
        left: properties.left + data.deltaX,
      })
    }}
  >
    <Component active={active} properties={properties} onClick={onClick}/>
  </DraggableCore>
</div>
