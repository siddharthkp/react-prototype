import styled from 'styled-components'
import constants from '../constants.js'

const {gridAlpha} = constants

const Grid = styled.div`
  background: #FFF;
  width: 600px;
  margin: 50px auto;
  height: 100%;
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(0, 0, 0, ${gridAlpha}) 31px, rgba(0, 0, 0, ${gridAlpha}) 32px),
    repeating-linear-gradient(-90deg, transparent, transparent 31px, rgba(0, 0, 0, ${gridAlpha}) 31px, rgba(0, 0, 0, ${gridAlpha}) 32px);
  background-position: -25px -17px;
  border-radius: 2px;
  border: 1px solid #DDD;
`

export default Grid
