import React from 'react'
import styled from 'styled-components'
import Sidebar from '../presentation/sidebar'

const LeftSidebar = styled(Sidebar)`
  float: left;
  width: 10%;
  background: #FFF;
  border-right: 1px solid #DDD;
`

const Title = styled.div`
  text-transform: uppercase;
  color: #555;
  text-align: center;
  padding: 10px 0 50px;
  border-bottom: 1px solid #DDD;
`

const Item = styled.div`
  color: #555;
  padding: 20px 10px;
  border-bottom: 1px solid #DDD;
`

const Library = (props) => <LeftSidebar>
  <Title>Library</Title>
  {props.components
    .filter(component => !component.hidden)
    .map((component, index) => <Item key={index}>
      {component.name}
    </Item>)}
</LeftSidebar>

export default Library
