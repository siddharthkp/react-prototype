import React from 'react'
import Grid from '../presentation/grid'
import Component from '../presentation/component'

export default ({components, active, onClick, update}) => <Grid>
  {components.map((component, index) => <Component
    key={index}
    active={index === active}
    properties={component}
    onClick={event => onClick(index)}
    update={update}
  />)}
</Grid>
