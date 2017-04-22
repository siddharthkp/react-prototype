import React from 'react'
import styled from 'styled-components'
import {DraggableCore} from 'react-draggable'
import componentSpec from '../../utils/componentSpec'
import getCSS from '../../utils/css'

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
