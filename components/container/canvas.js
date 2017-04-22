import React from 'react'
import styled from 'styled-components'
import Grid from '../presentation/grid'
import Component from '../presentation/component'

const Canvas = styled.div`
  float: left;
  width: 75%;
  height: 80%;
`

export default ({components, active, onClick, update}) => <Canvas><Grid>
  {components.map((component, index) => <Component
    key={index}
    active={index === active}
    properties={component}
    onClick={event => onClick(index)}
    update={update}
  />)}
</Grid></Canvas>
