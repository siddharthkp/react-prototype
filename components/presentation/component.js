import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'
import componentSpec from '../../utils/componentSpec'

const getProp = (type, props) => {
  const properties = props.properties

  if (type === 'background' && !properties.fill) return 'transparent'
  return properties[type] ? properties[type] : componentSpec[type]
}

const Component = styled.div`
  width: ${props => getProp('width', props) + 'px'};
  height: ${props => getProp('height', props) + 'px'};
  border-radius: ${props => getProp('border', props) + 'px'};
  background: ${props => getProp('background', props)};
`

export default ({properties}) => <div>
  <Draggable defaultPosition={{x: 32, y: 32}} grid={[32, 32]}>
    <Component properties={properties}/>
  </Draggable>
</div>
