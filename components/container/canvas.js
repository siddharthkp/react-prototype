import React from 'react'
import Grid from '../presentation/grid'
import Component from '../presentation/component'

export default ({components, activeIndex, onClick, update}) => <Grid>
  {components.map((component, index) => <Component
    key={index}
    active={index === activeIndex}
    properties={component}
    onClick={event => onClick(index)}
    update={update}
  />)}
</Grid>
