import React from 'react'
import Grid from '../presentation/grid'
import Component from '../presentation/component'

export default ({components, onClick}) => <Grid>
  {components.map((component, index) => <Component
    key={index}
    properties={component}
    onClick={event => onClick(index)}
  />)}
</Grid>
